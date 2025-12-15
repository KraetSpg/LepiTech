ALTER TABLE "aggregated_requirements" ADD COLUMN "cpu_cores" integer;--> statement-breakpoint
ALTER TABLE "aggregated_requirements" ADD COLUMN "cpu_frequency" numeric;--> statement-breakpoint
ALTER TABLE "devices" ADD COLUMN "cpu_cores" integer;--> statement-breakpoint
ALTER TABLE "devices" ADD COLUMN "cpu_frequency" numeric;--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "cpu_cores" integer;--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "cpu_frequency" numeric;--> statement-breakpoint
ALTER TABLE "aggregated_requirements" DROP COLUMN "cpu";--> statement-breakpoint
ALTER TABLE "devices" DROP COLUMN "cpu";--> statement-breakpoint
ALTER TABLE "software" DROP COLUMN "cpu";