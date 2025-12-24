import { Migration } from "@mikro-orm/migrations";

export class Migration20241224000001 extends Migration {
  async up(): Promise<void> {
    this.addSql(`
      CREATE TABLE IF NOT EXISTS "simple_quote" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "contact_info" TEXT NOT NULL,
        "company_name" TEXT NULL,
        "remark" TEXT NULL,
        "file_url" TEXT NULL,
        "cart_items" JSONB NOT NULL,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        "deleted_at" TIMESTAMPTZ NULL,
        CONSTRAINT "simple_quote_pkey" PRIMARY KEY ("id")
      );
    `);
  }

  async down(): Promise<void> {
    this.addSql(`DROP TABLE IF EXISTS "simple_quote";`);
  }
}
