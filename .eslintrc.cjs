module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'scripts/preinstall.js'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		//eslint(https://eslint.org/docs/latest/rules/)
		'no-var': 'error',
		'no-multiple-empty-lines': ['warn', { max: 1 }],
		'no-unexpected-multiline': 'error',
		'no-extra-semi': 'off',
	},
}
