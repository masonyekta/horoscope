import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const Head = ({ siteTitle, siteDescription, siteImage }) => {
	const { title, description, image, siteUrl } = useSiteMetadata()

	const defaultImage = siteUrl + image
	const metaDescription = siteDescription || description
	const metaImage = siteImage || defaultImage

	return (
		<Helmet
			htmlAttributes={{ lang: `en` }}
			title={siteTitle}
			defaultTitle={title}
			titleTemplate={`%s - ${title}`}
			defer={false}
		>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* General tags */}
			<meta name="image" content={metaImage} />
			<meta name="description" content={metaDescription} />

			{/* OpenGraph tags */}
			<meta property="og:title" content={siteTitle} />
			<meta property="og:image" content={metaImage} />
			<meta property="og:description" content={metaDescription} />

			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={siteTitle} />
			<meta name="twitter:image" content={metaImage} />
			<meta name="twitter:description" content={metaDescription} />

			{/* Structured data */}
			<script type="application/ld+json">
				{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "${title}"
          }
        `}
			</script>
		</Helmet>
	)
}

export default Head
