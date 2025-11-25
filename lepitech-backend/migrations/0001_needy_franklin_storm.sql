ALTER TABLE "requirements" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "requirements" CASCADE;--> statement-breakpoint
--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "os" varchar(32);--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "cpu" varchar(128);--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "ram" integer;--> statement-breakpoint
ALTER TABLE "software" ADD COLUMN "storage" integer;--> statement-breakpoint
ALTER TABLE "software" DROP COLUMN "requirement_id";