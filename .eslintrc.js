module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: ['react-app', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
				printWidth: 100,
				tabWidth: 4,
				useTabs: true,
				trailingComma: 'es5',
				bracketSpacing: true,
			},
		],
	},
}
