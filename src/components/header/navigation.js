/** @jsx jsx */
import React from 'react'
import { jsx, Link as TLink } from 'theme-ui'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const Navigation = () => {
	const { navigation } = useSiteMetadata()

	return (
		<React.Fragment>
			{navigation && navigation.length > 0 && (
				<nav
					sx={{
						'a:not(:last-of-type)': { mr: 3 },
						fontSize: [1, `18px`],
						'.active': { color: `primary` },
					}}
				>
					{navigation.map((link) => (
						<Link
							key={link.slug}
							to={link.slug}
							activeClassName="active"
							sx={{ textDecoration: 'none' }}
						>
							{link.title}
						</Link>
					))}
					<TLink href="https://masonyekta.com/" target="_blank" rel="noopener">
						Blog
					</TLink>
				</nav>
			)}
		</React.Fragment>
	)
}

export default Navigation
