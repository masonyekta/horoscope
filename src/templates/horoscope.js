/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui'
import Layout from '../components/layout/layout'
import PageTitle from '../components/layout/page-title'
import SEO from '../components/seo/seo'
import { graphql } from 'gatsby'
import { useSiteBuildtime } from '../hooks/use-buildtime'

const Horoscope = ({ data }) => {
	const { currentDate } = useSiteBuildtime()
	let ogImage = `https://og.masonyekta.com/${data.horoscopes.title}.jpg?theme=dark&date=${data.horoscopes.content}&subtitle=${currentDate}&md=1&fontSize=75px`
	return (
		<Layout>
			<SEO
				siteTitle={data.horoscopes.title}
				siteDescription={data.horoscopes.content}
				siteImage={ogImage}
			/>
			<article>
				<PageTitle title={data.horoscopes.title} />
				<Heading as="h3" sx={{ my: 0 }} variant="styles.h5">
					{data.horoscopes.date}
				</Heading>
				<Box sx={{ variant: 'styles' }}>
					<p>{data.horoscopes.content}</p>
				</Box>
			</article>
		</Layout>
	)
}

export const query = graphql`
	query pageQuery($url: String) {
		horoscopes(slug: { eq: $url }) {
			title
			date
			content
		}
	}
`

export default Horoscope
