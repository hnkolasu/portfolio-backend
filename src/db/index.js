import * as schema from './schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres('postgresql://postgres:example@localhost:5435/postgres');
export const db = drizzle(queryClient, { schema, casing: 'snake_case' });
