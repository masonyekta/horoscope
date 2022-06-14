import { useStaticQuery, graphql } from 'gatsby'

export const useHoroscopeQuery = () => {
	const horoscopeData = useStaticQuery(
		graphql`
			query horoscopeData {
				allHoroscopes {
					edges {
						node {
							id
							content
							date
							title
							slug
						}
					}
				}
			}
		`
	)
	return horoscopeData
}
