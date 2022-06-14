/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const NotFound = () => {
	return (
		<Layout>
			<SEO siteTitle="Error 404 - Not Found" />
			<Text sx={{ variant: 'styles' }}>
				<p>
					The page you are looking for does not exist here. Go back to the homepage and
					try a different link.
				</p>
			</Text>
		</Layout>
	)
}

export default NotFound
