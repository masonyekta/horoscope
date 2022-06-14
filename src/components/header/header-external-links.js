/** @jsx jsx */
import React from 'react'
import { jsx, Link as TLink } from 'theme-ui'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const HeaderExternalLinks = () => {
	const { externalLinks } = useSiteMetadata()

	return (
		<React.Fragment>
			{externalLinks && externalLinks.length > 0 && (
				<div
					sx={{
						'a:not(:first-of-type)': { ml: 3 },
						fontSize: [1, `18px`],
					}}
				>
					{externalLinks.map((link) => (
						<TLink key={link.url} href={link.url} target="_blank" rel="noopener">
							{link.name}
						</TLink>
					))}
				</div>
			)}
		</React.Fragment>
	)
}

export default HeaderExternalLinks
