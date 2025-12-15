import { db } from "../db";
import { aggregatedRequirementsTable, devicesTable, SelectDevices } from "../db/schema";
import { eq, inArray } from "drizzle-orm";

export class DevicesController {

    public async getDevicesForAggregatedSoftware(aggregatedRequirementId: number): Promise<SelectDevices[]> {
        const [aggregatedRequirement] = await db.select().from(aggregatedRequirementsTable).where(eq(aggregatedRequirementsTable.id, aggregatedRequirementId));
        const allDevices : SelectDevices[] = await db.select().from(devicesTable);
        const fittingDevices : SelectDevices[] = [];

        // Compare Logic Funktioniert nicht für CPU und OS
        allDevices.forEach((device) => {
            // Returns if not fitting
            if (device.ram < aggregatedRequirement.ram) {
                return;
            }
            if (device.storage < aggregatedRequirement.storage) {
                return;
            }
            if (!aggregatedRequirement.os.includes(device.os)) {
                return;
            }
            if (device.cpu_cores && aggregatedRequirement.cpu_cores && device.cpu_cores < aggregatedRequirement.cpu_cores) {
                return;
            }
            if (device.cpu_frequency && aggregatedRequirement.cpu_frequency && device.cpu_frequency < aggregatedRequirement.cpu_frequency) {
                return;
            }
            
            fittingDevices.push(device);
        })

        return fittingDevices;
    }
}