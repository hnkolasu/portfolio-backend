import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	dialect: 'postgresql',
	schema: './src/db/schema.js',
	out: './drizzle',
	dbCredentials: {
		url: 'postgresql://postgres:example@localhost:5435/postgres'
		// user: process.env.USER,
		// password: 'portfolio',
		// host: '127.0.0.1',
		// port: 5435,
		// database: 'portfolio'
	}
});
