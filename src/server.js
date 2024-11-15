import express from 'express';
import dotenv from 'dotenv';
import notas from './routes/notas.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/notas', notas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
