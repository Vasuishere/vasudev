import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Schema already exists in database — no-op to align migration tracking
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "products_applications" CASCADE;
  DROP TABLE "products_industries" CASCADE;
  DROP TABLE "products_grades" CASCADE;
  DROP TABLE "products_packaging" CASCADE;
  DROP TABLE "products_images" CASCADE;
  DROP TABLE "products_specs" CASCADE;
  DROP TABLE "products" CASCADE;
  DROP TABLE "certifications_key_areas" CASCADE;
  DROP TABLE "certifications" CASCADE;
  DROP TABLE "industries_keywords" CASCADE;
  DROP TABLE "industries_challenges" CASCADE;
  DROP TABLE "industries_solutions" CASCADE;
  DROP TABLE "industries_chemicals_used" CASCADE;
  DROP TABLE "industries" CASCADE;
  DROP TABLE "blog_posts" CASCADE;
  DROP TABLE "clients" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "services_features" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "company_info_navigation" CASCADE;
  DROP TABLE "company_info" CASCADE;
  DROP TABLE "site_images_gallery" CASCADE;
  DROP TABLE "site_images" CASCADE;
  DROP TYPE "public"."enum_products_category";`)
}
