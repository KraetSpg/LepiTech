import { db } from "../db";
import { aggregatedRequirements, devices, SelectDevices } from "../db/schema";
import { eq, inArray } from "drizzle-orm";

export class DevicesController {

    public async getDevicesForAggregatedSoftware(aggregatedRequirementsId: number): Promise<SelectDevices[]> {
        const [aggregatedRequirement] = await db.select().from(aggregatedRequirements).where(eq(aggregatedRequirements.id, aggregatedRequirementsId));
        const allDevices : SelectDevices[] = await db.select().from(devices);
        const fittingDevices : SelectDevices[] = [];

        // Compare Logic Funktioniert nicht für CPU
        allDevices.forEach((device) => {
            if (device.ram < aggregatedRequirement.ram) {
                return;
            }
            if (device.storage < aggregatedRequirement.storage) {
                return;
            }
            if (!aggregatedRequirement.os.includes(device.os)) {
                return;
            }
            // NOT WORKING RN
            /*
            if (device.cpu < aggregatedRequirement.cpu) {
                return
            }
            */
            fittingDevices.push(device);
        })

        return fittingDevices;
    }
}