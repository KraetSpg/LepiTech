import { pgTable, serial, varchar, integer, numeric, timestamp, foreignKey } from "drizzle-orm/pg-core";

// Software-Tabelle
export const softwareTable = pgTable("software", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  os: varchar("os", { length: 128 }), // z.B. "Windows", "macOS", etc.
  cpu_cores: integer("cpu_cores"), // Aanzahl der CPU Kerne
  cpu_frequency: numeric("cpu_frequency").$type<number>(), // Taktrate des CPUs in GHz
  ram: integer("ram"), // in MB
  storage: integer("storage"), // in GB
  categories: varchar("categories", { length: 512})
});

// Geräte-Tabelle
export const devicesTable = pgTable("devices", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  manufacturer: varchar("manufacturer", { length: 64 }),
  cpu_cores: integer("cpu_cores"), // Aanzahl der CPU Kerne
  cpu_frequency: numeric("cpu_frequency").$type<number>(), // Taktrate des CPUs in GHz in GHz
  ram: integer("ram").notNull(), // in MB
  storage: integer("storage").notNull(), // in MB
  os: varchar("os", { length: 128 }).notNull(),
  price: integer("price"), // in EUR-Cent
});

// Aggregierte Mindestanforderungen-Tabelle
// Aggregiert bedeutet in diesem Fall das das Backend die höchsten Anforderungen errechnet und dann hier einen Eintrag erstellt und diesen dann ans FE zurückgibt
export const aggregatedRequirementsTable = pgTable("aggregated_requirements", {
  id: serial("id").primaryKey(),
  os: varchar("os", { length: 128 }).notNull(),
  cpu_cores: integer("cpu_cores"), // Aanzahl der CPU Kerne
  cpu_frequency: numeric("cpu_frequency").$type<number>(), // Taktrate des CPUs in GHz
  ram: integer("ram").notNull(),
  storage: integer("storage").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Logging-Tabelle
export const generationLogsTable = pgTable("generation_logs", {
  id: serial("id").primaryKey(),
  aggregatedReqId: integer("aggregated_req_id").references(() => aggregatedRequirementsTable.id).notNull(),
  softwareIds: varchar("software_ids", { length: 400 }).notNull(), // Komma-separierte Liste der Software-IDs
  suggestedDeviceIds: varchar("suggested_device_ids", { length: 400 }).notNull(), // Komma-separierte Liste der Device-IDs
  generatedAt: timestamp("generated_at").defaultNow(),
});


export type SelectSoftware = typeof softwareTable.$inferSelect;
export type SelectDevices = typeof devicesTable.$inferSelect;
export type SelectAggregatedRequirements = typeof aggregatedRequirementsTable.$inferSelect;
export type InsertSoftware = typeof softwareTable.$inferInsert;