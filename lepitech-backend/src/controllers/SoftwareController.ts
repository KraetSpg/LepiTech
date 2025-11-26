import { SelectSoftware, software } from "../db/schema";
import { db } from "../db";

export class SoftwareController {
    public async getSoftware(): Promise<SelectSoftware[]> {
        return await db.select().from(software);
    }
}