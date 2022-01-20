const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');
const { ts2esm2cjs } = require('@sapphire/docusaurus-plugin-ts2esm2cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'hypixel.ts',
	baseUrl: '/website',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	onDuplicateRoutes: 'throw',
	favicon: 'img/favicon.ico',
	tagline: 'hypixel.ts is a simple, easy to use NodeJS module for interacting with the Hypixel API.',
	organizationName: 'hypixelts',
	projectName: 'hypixel.ts',
	url: 'https://hypixel.js.org',

	themes: [],

	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'hypixel.ts',
				entryPoints: ['./packages/hypixel.ts/src/index.ts'],
				tsconfig: './packages/hypixel.ts/src/tsconfig.json',
				readme: 'none',
				out: 'documentation'
			}
		]
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/hypixelts/website/edit/main/',
					remarkPlugins: [npm2yarn2pnpm, ts2esm2cjs],
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				blog: false,
				theme: {
					customCss: [require.resolve('./src/css/custom.css')]
				}
			})
		]
	],

	themeConfig:
		/** @type {Partial<import('@docusaurus/preset-classic').ThemeConfig>} */
		({
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true
			},
			navbar: {
				title: 'hypixel.ts',
				logo: {
					alt: 'logo',
					src: './img/svg/short-nobg.svg'
				},
				items: [
					{
						to: '/',
						label: 'Home',
						position: 'left'
					},
					{
						to: 'docs/Welcome',
						position: 'left',
						label: 'Getting Started'
					},
					{
						to: 'docs/documentation',
						position: 'left',
						label: 'Documentation'
					},
					{
						href: 'https://hypixel.js.org/discord',
						label: 'Discord',
						position: 'right'
					},
					{
						href: 'https://github.com/hypixelts',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Our Platforms',
						items: [
							{
								label: 'Discord Server',
								href: 'https://hypixel.js.org/discord'
							},
							{
								label: 'GitHub Organization',
								href: 'https://github.com/hypixelts'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} hypixel.ts`
			},
			prism: {
				defaultLanguage: 'javascript',
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['powershell', 'batch']
			}
		})
};

module.exports = config;
