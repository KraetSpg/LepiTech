CREATE TABLE "aggregated_requirements" (
	"id" serial PRIMARY KEY NOT NULL,
	"os" varchar(32) NOT NULL,
	"cpu" varchar(128) NOT NULL,
	"ram" integer NOT NULL,
	"storage" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "devices" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"manufacturer" varchar(64),
	"cpu" varchar(128),
	"ram" integer,
	"storage" integer,
	"os" varchar(32),
	"price" integer
);
--> statement-breakpoint
CREATE TABLE "generation_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"aggregated_req_id" integer NOT NULL,
	"software_ids" varchar(400) NOT NULL,
	"suggested_device_ids" varchar(400) NOT NULL,
	"generated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "requirements" (
	"id" serial PRIMARY KEY NOT NULL,
	"os" varchar(32),
	"cpu" varchar(128),
	"ram" integer,
	"storage" integer
);
--> statement-breakpoint
CREATE TABLE "software" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"requirement_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "software_categories" (
	"software_id" integer NOT NULL,
	"category_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "generation_logs" ADD CONSTRAINT "generation_logs_aggregated_req_id_aggregated_requirements_id_fk" FOREIGN KEY ("aggregated_req_id") REFERENCES "public"."aggregated_requirements"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "software_categories" ADD CONSTRAINT "software_categories_software_id_software_id_fk" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "software_categories" ADD CONSTRAINT "software_categories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;