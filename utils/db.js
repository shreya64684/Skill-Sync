import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, {schema});

//postgresql://neondb_owner:npg_iCAHet3a6LIG@ep-wild-leaf-a4z4882d-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
