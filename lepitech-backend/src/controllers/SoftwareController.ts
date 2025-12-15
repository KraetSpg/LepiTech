import { aggregatedRequirementsTable, SelectSoftware, softwareTable } from "../db/schema";
import { db } from "../db";
import { eq, inArray } from "drizzle-orm";

export class SoftwareController {
    public async getSoftware(): Promise<SelectSoftware[]> {
        return await db.select().from(softwareTable);
    }

    // TODO: 
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
        let maxStorage = 0;
        let cpu_cores = 0;
        let cpu_frequency = 0;
        const osSet = new Set<string>();

        selectedSoftwares.forEach((sw) => {
            if (sw.ram && sw.ram > maxRam) {
                maxRam = sw.ram;
            }
            if (sw.storage) {
                maxStorage += sw.storage;
            }
            if (sw.cpu_cores && sw.cpu_cores > cpu_cores) {
                cpu_cores = sw.cpu_cores;
            }
            if (sw.cpu_frequency && sw.cpu_frequency > cpu_frequency) {
                cpu_frequency = sw.cpu_frequency;
            }
            if (sw.os) {
                osSet.add(sw.os);
            }
        });

        // Wenn mehrere OS vorhanden, kannst du eine Strategie wählen, hier als Array
        const osArray = Array.from(osSet);

        const aggregatedRequirementsObj = {
            cpu_cores,
            cpu_frequency,
            ram: maxRam,
            storage: maxStorage,
            os: osArray.join(", "), // alle OS als String getrennt
        }

        const [aggregatedRequirement] = await db.insert(aggregatedRequirementsTable).values(aggregatedRequirementsObj).returning()

        return aggregatedRequirement;
    }
}