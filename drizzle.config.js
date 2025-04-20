import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_iCAHet3a6LIG@ep-wild-leaf-a4z4882d-pooler.us-east-1.aws.neon.tech/ai-interview?sslmode=require",
  },

});