import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ['src/**/*.test.js']
	},
	...compat.extends('eslint:recommended', 'plugin:prettier/recommended'),
	{
		plugins: {
			import: fixupPluginRules(_import),
			prettier
		},

		languageOptions: {
			globals: {
				...globals.node
			},

			ecmaVersion: 'latest',
			sourceType: 'module'
		},

		rules: {
			'prettier/prettier': 'error',
			'spaced-comment': 'error',
			quotes: ['error', 'single'],
			'no-duplicate-imports': 'error',
			'no-unused-vars': 'warn',
			'no-magic-numbers': 'off',
			'import/no-unresolved': 'error'
		}
	}
];
