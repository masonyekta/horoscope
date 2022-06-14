/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Flex } from '@theme-ui/components'
import HeaderTitle from './header-title'
import HeaderExternalLinks from './header-external-links'
import Navigation from './navigation'
import ColorModeToggle from './colormode-toggle'

const headerStyles = {
	boxSizing: `border-box`,
	display: `flex`,
	variant: `dividers.bottom`,
	alignItems: `center`,
	justifyContent: `space-between`,
	mt: 3,
	color: `secondary`,
	a: {
		color: `secondary`,
		':hover': {
			textDecoration: 'none',
			color: `heading`,
		},
	},
	flexFlow: `wrap`,
}

const Header = () => {
	const [colorMode, setColorMode] = useColorMode()
	const isDark = colorMode === `dark`

	const toggleColorMode = (e) => {
		e.preventDefault()
		setColorMode(isDark ? `light` : `dark`)
	}

	return (
		<header sx={{ mb: [5, 6] }}>
			<Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
				<HeaderTitle />
				<ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
			</Flex>
			<div sx={{ ...headerStyles }}>
				<Navigation />
				<HeaderExternalLinks />
			</div>
		</header>
	)
}

export default Header
