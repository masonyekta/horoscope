/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useSiteBuildtime } from '../../hooks/use-buildtime'

const footerStyles = {
	boxSizing: `border-box`,
	display: `flex`,
	justifyContent: `space-between`,
	mt: [6],
	pb: [4],
	pt: [4],
	color: `secondary`,
	a: {
		variant: `links.secondary`,
	},
	flexDirection: [`column`, `column`, `row`],
	variant: `dividers.top`,
}

const Footer = () => {
	const { currentDate } = useSiteBuildtime()
	return (
		<footer sx={{ ...footerStyles }}>
			<div>
				&copy; {new Date().getFullYear()} by Mason Yekta. All rights reserved.
				<div>Last updated on {currentDate} (Eastern/Canada)</div>
			</div>
		</footer>
	)
}

export default Footer
