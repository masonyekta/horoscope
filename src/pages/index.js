/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout/layout'
import PageTitle from '../components/layout/page-title'
import SEO from '../components/seo/seo'
import AllHoroscopes from '../components/horoscopes/all-horoscopes'
import { useSiteBuildtime } from '../hooks/use-buildtime'

const Index = () => {
	const { currentDate } = useSiteBuildtime()
	let ogImage = `https://og.masonyekta.com/Daily Horoscope.jpg?theme=dark&subtitle=${currentDate}&md=1&fontSize=75px`

	return (
		<Layout>
			<SEO siteTitle="Daily Horoscope" siteImage={ogImage} />
			<article>
				<PageTitle title={currentDate} />
				<AllHoroscopes />
			</article>
		</Layout>
	)
}

export default Index
