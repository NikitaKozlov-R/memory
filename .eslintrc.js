module.exports = {
	env: {
		browser: true,
		jquery: true,
		es2021: false,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',

		'linebreak-style': ['error', 'unix'],
		'semi': ['error', 'always'],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'space-in-parens': ['error', 'never'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
			},
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'space-before-blocks': 'error',
		'space-infix-ops': ['error', {int32Hint: false}],
		'no-trailing-spaces': 'error',

		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-redeclare': 'off',

		'one-var': ['error', 'never'],
	},
	plugins: ['prettier'],
};
