import express from 'express';
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from '../services/notas.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const notes = await getAllNotes();
		res.json(notes);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const note = await getNoteById(req.params.id);
		if (note) {
			res.json(note);
		} else {
			res.status(404).json({ error: 'Note not found' });
		}
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.post('/', async (req, res) => {
	const { title, content } = req.body;
	if (!title || !content) {
		return res.status(400).json({ error: 'Title and content are required' });
	}
	try {
		const newNote = await createNote(title, content);
		res.status(201).json(newNote);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.put('/:id', async (req, res) => {
	const { title, content } = req.body;
	if (!title || !content) {
		return res.status(400).json({ error: 'Title and content are required' });
	}
	try {
		const updatedNote = await updateNote(req.params.id, title, content);
		if (updatedNote) {
			res.json(updatedNote);
		} else {
			res.status(404).json({ error: 'Note not found' });
		}
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const deletedNote = await deleteNote(req.params.id);
		if (deletedNote) {
			res.json({ message: 'Note deleted successfully' });
		} else {
			res.status(404).json({ error: 'Note not found' });
		}
	} catch (error) {
		res.status(500).json({ error });
	}
});

export default router;
