import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query siteMetaData {
				site {
					siteMetadata {
						title
						description
						siteUrl
						image
						navigation {
							title
							slug
						}
						externalLinks {
							name
							url
						}
					}
				}
			}
		`
	)
	return site.siteMetadata
}
