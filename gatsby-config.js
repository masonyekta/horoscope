require(`dotenv`).config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: `Daily Horoscope`,
		author: `Mason Yekta`,
		description: `Choose your sign for a daily horoscope reading`,
		siteUrl: `https://horoscope.masonyekta.com`,
		image: `/images/share.png`,
		navigation: [
			{
				title: `Home`,
				slug: `/`,
			},
		],
		externalLinks: [
			{
				name: `Twitter`,
				url: `https://twitter.com/masonyekta/`,
			},
			{
				name: `Instagram`,
				url: `https://instagram.com/masonyekta/`,
			},
		],
	},
	trailingSlash: 'always',
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-theme-ui`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Horoscope`,
				short_name: `Horoscope`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#000000`,
				display: `standalone`,
				icon: `./static/images/favicon.png`,
				legacy: true,
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: 'gatsby-source-custom-api',
			options: {
				url: `https://api.apify.com/v2/actor-tasks/${process.env.APIFY_TASK_ID}/runs/last/dataset/items?token=${process.env.APIFY_TOKEN}&clean=true`,
				rootKey: 'horoscopes',
				schemas: {
					horoscopes: `
						title: String
						date: String
						content: String
						slug: String
            		`,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-build-date`,
			options: {
				formatAsDateString: true,
				formatting: {
					format: 'dddd, MMMM DD',
					utc: false,
				},
			},
		},
		{
			resolve: `gatsby-plugin-advanced-sitemap`,
			options: {
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/404.html`,
					`/offline-plugin-app-shell-fallback`,
				],
			},
		},
	],
}
