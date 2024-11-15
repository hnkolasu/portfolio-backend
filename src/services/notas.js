import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { notes } from '../db/schema.js';

export const getAllNotes = async () => {
	return await db.select().from(notes);
};

export const getNoteById = async (id) => {
	const [note] = await db
		.select()
		.from(notes)
		.where(notes.id.eq(Number(id)));
	return note;
};

export const createNote = async (title, content) => {
	const [newNote] = await db.insert(notes).values({ title, content }).returning();
	return newNote;
};

export const updateNote = async (id, title, content) => {
	console.log(id, title, content);
	const [updatedNote] = await db.update(notes).set({ title, content }).where(eq(notes.id, id)).returning();

	console.log(updatedNote);
	return updatedNote;
};

export const deleteNote = async (id) => {
	const [deletedNote] = await db.delete(notes).where(eq(notes.id, id)).returning();
	return deletedNote;
};
