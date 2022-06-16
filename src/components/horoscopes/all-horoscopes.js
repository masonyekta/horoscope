/** @jsx jsx */
import { jsx } from 'theme-ui'
import HoroscopeList from './horoscope-list'
import HoroscopeItem from './horoscope-item'
import { useHoroscopeQuery } from '../../hooks/use-horoscope-query'

export default function Horoscopes() {
	const { allHoroscopes } = useHoroscopeQuery()

	return (
		<HoroscopeList>
			{allHoroscopes.edges.map(({ node: post }) => (
				<HoroscopeItem key={post.id} {...post} />
			))}
		</HoroscopeList>
	)
}
