const query = require('../data/query')
const path = require(`path`)

module.exports = async ({ graphql, actions }) => {
	const { createPage } = actions

	const horoscopesQuery = await graphql(query.data.horoscopes)

	const horoscopes = horoscopesQuery.data.allHoroscopes.edges
	horoscopes.forEach((page, i) => {
		createPage({
			path: `/${page.node.slug}/`,
			component: path.resolve(`./src/templates/horoscope.js`),
			context: {
				url: page.node.slug,
			},
		})
	})
}
