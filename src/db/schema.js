import { timestamp, serial, text, pgTable } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id'),
	name: text('name'),
	email: text('email'),
	created_at: timestamp('created_at').defaultNow(),
	updated_at: timestamp('updated_at').defaultNow()
});

export const notes = pgTable('notes', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content'),
	created_at: timestamp('created_at').defaultNow(),
	updated_at: timestamp('updated_at').defaultNow()
});
