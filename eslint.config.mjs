import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript'],
		ignorePatterns: ['server.js'],
		rules: {
			'@next/next/no-html-link-for-pages': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	}),
];

export default eslintConfig;
