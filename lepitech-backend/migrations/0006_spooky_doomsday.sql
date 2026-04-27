DROP TABLE "categories" CASCADE;--> statement-breakpoint
DROP TABLE "software_categories" CASCADE;--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "categories" varchar(512);