import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Schema already exists in database — no-op to align migration tracking
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "products_documents" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "products_tags" CASCADE;
  DROP TABLE "products_documents" CASCADE;
  ALTER TABLE "products" ALTER COLUMN "category" SET DATA TYPE text;
  DROP TYPE "public"."enum_products_category";
  CREATE TYPE "public"."enum_products_category" AS ENUM('industrial', 'specialty');
  ALTER TABLE "products" ALTER COLUMN "category" SET DATA TYPE "public"."enum_products_category" USING "category"::"public"."enum_products_category";
  DROP INDEX "products_sku_idx";
  ALTER TABLE "products" ALTER COLUMN "formula" SET NOT NULL;
  ALTER TABLE "products" ALTER COLUMN "cas" SET NOT NULL;
  ALTER TABLE "company_info" ALTER COLUMN "updated_at" SET DEFAULT now();
  ALTER TABLE "company_info" ALTER COLUMN "updated_at" SET NOT NULL;
  ALTER TABLE "company_info" ALTER COLUMN "created_at" SET DEFAULT now();
  ALTER TABLE "company_info" ALTER COLUMN "created_at" SET NOT NULL;
  ALTER TABLE "site_images" ALTER COLUMN "updated_at" SET DEFAULT now();
  ALTER TABLE "site_images" ALTER COLUMN "updated_at" SET NOT NULL;
  ALTER TABLE "site_images" ALTER COLUMN "created_at" SET DEFAULT now();
  ALTER TABLE "site_images" ALTER COLUMN "created_at" SET NOT NULL;
  ALTER TABLE "media" ADD COLUMN "thumbnail_url" varchar;
  ALTER TABLE "site_images_gallery" ADD COLUMN "caption" varchar;
  ALTER TABLE "products" DROP COLUMN "sku";
  ALTER TABLE "products" DROP COLUMN "status";
  ALTER TABLE "products" DROP COLUMN "subcategory";
  ALTER TABLE "products" DROP COLUMN "supplier";
  ALTER TABLE "products" DROP COLUMN "origin_country";
  ALTER TABLE "products" DROP COLUMN "price";
  ALTER TABLE "products" DROP COLUMN "currency";
  ALTER TABLE "products" DROP COLUMN "price_unit";
  ALTER TABLE "products" DROP COLUMN "unit_of_measure";
  ALTER TABLE "products" DROP COLUMN "weight";
  ALTER TABLE "products" DROP COLUMN "dimensions";
  ALTER TABLE "products" DROP COLUMN "safety_class";
  ALTER TABLE "media" DROP COLUMN "thumbnail_u_r_l";
  ALTER TABLE "site_images_gallery" DROP COLUMN "alt_text";
  DROP TYPE "public"."enum_products_documents_doc_type";
  DROP TYPE "public"."enum_products_documents_access_level";
  DROP TYPE "public"."enum_products_status";`)
}
