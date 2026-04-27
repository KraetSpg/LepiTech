import { aggregatedRequirementsTable, SelectSoftware, softwareTable } from "../db/schema";
import { db } from "../db";
import { eq, inArray } from "drizzle-orm";

export class SoftwareController {
    public async getSoftware(): Promise<SelectSoftware[]> {
        return await db.select().from(softwareTable);
    }

    // Helper function to round storage to real-world values (128, 256, 512, 1024, 2048, etc.)
    private roundToRealWorldStorage(storageGB: number): number {
        const standardSizes = [128, 256, 512, 1024, 2048];
        // Find the smallest standard size that is >= the required storage
        return standardSizes.find(size => size >= storageGB) || 2048;
    }

    public async getAggregatedRequirements(softwareIds: number[]) {
        const selectedSoftwares: SelectSoftware[] = await db
            .select()
            .from(softwareTable)
            .where(inArray(softwareTable.id, softwareIds));

        if (selectedSoftwares.length === 0) {
            return null;
        }

        // Aggregation der Werte
        let maxRam = 0;
        let maxStorage = 32; // 32 gig for windows
        let maxCpuCores = 0;
        let maxCpuFrequency = 0;
        const osSet = new Set<string>();

        selectedSoftwares.forEach((sw) => {
            // RAM: take maximum (need enough for the most demanding app)
            if (sw.ram != null && sw.ram > maxRam) {
                maxRam = sw.ram;
            }
            // Storage: take maximum (then round to real-world size)
            if (sw.storage != null && sw.storage > maxStorage) {
                maxStorage = sw.storage;
            }
            // CPU Cores: take maximum (need to handle most demanding app)
            if (sw.cpu_cores != null && sw.cpu_cores > maxCpuCores) {
                maxCpuCores = sw.cpu_cores;
            }
            // CPU Frequency: take maximum (need sufficient speed)
            const freqNum = sw.cpu_frequency ? Number(sw.cpu_frequency) : 0;
            if (freqNum > maxCpuFrequency) {
                maxCpuFrequency = freqNum;
            }
            // Collect OS requirements
            if (sw.os) {
                osSet.add(sw.os);
            }
        });

        // OS handling: detect if all software is for same OS or multiple
        const osArray = Array.from(osSet);
        const commonOs = osArray.length === 1 ? osArray[0] : osArray.join(", ");

        // Add 20% buffer to storage for OS and headroom, then round to real-world size
        const storageNeeded = Math.ceil(maxStorage * 1.2);
        const storageRealWorld = this.roundToRealWorldStorage(storageNeeded);

        const aggregatedRequirementsObj = {
            cpu_cores: maxCpuCores || 2,  // Default minimum 2 cores if not specified
            cpu_frequency: maxCpuFrequency || 1.6,  // Default minimum 1.6 GHz if not specified
            ram: maxRam || 1024 * 4,  // Default 4 GB if not specified
            storage: storageRealWorld,  // Real-world storage size (128, 256, 512, 1024, 2048)
            os: commonOs,
        }

        const [aggregatedRequirement] = await db
            .insert(aggregatedRequirementsTable)
            .values(aggregatedRequirementsObj)
            .returning()

        return aggregatedRequirement;
    }
}