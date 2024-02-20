module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked', // Updated TypeScript ESLint plugin
		'plugin:react-hooks/recommended',
		'plugin:react/recommended', // Added React ESLint plugin
		'plugin:react/jsx-runtime', // Added React JSX runtime plugin
		'eslint-config-prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
	settings: { react: { version: 'detect' } },
	exclude: ['tailwind.config.js'],
};
