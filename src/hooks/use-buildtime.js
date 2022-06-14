import { useStaticQuery, graphql } from 'gatsby'

export const useSiteBuildtime = () => {
	const { currentBuildDate } = useStaticQuery(
		graphql`
			query SiteBuildtime {
				currentBuildDate {
					currentDate
				}
			}
		`
	)
	return currentBuildDate
}
