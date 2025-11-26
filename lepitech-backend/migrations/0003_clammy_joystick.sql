ALTER TABLE "aggregated_requirements" ALTER COLUMN "os" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "name" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "devices" ALTER COLUMN "os" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "software" ALTER COLUMN "os" SET DATA TYPE varchar(128);