const prettierConfig = require('@sapphire/prettier-config');

module.exports = {
	...prettierConfig,
	overrides: [
		{
			files: ['README.md', 'docs/guides/*.md', 'docs/documentation/**/*.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 120,
				proseWrap: 'always'
			}
		}
	]
};
