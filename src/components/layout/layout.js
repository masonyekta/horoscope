/** @jsx jsx */
import React from 'react'
import { Box, Container, jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import 'typeface-ibm-plex-sans'
import 'typeface-roboto-mono'
import Header from '../header/header'
import Footer from '../footer/footer'
import SkipNavLink from '../header/skip-nav'

const Layout = (props) => {
	return (
		<React.Fragment>
			<Global
				styles={(theme) => ({
					'*': {
						boxSizing: `inherit`,
					},
					html: {
						WebkitTextSizeAdjust: `100%`,
					},
					img: {
						borderStyle: `none`,
						width: `100%`,
					},
					pre: {
						fontFamily: `monospace`,
						fontSize: `1em`,
					},
					'[hidden]': {
						display: `none`,
					},
					'::selection': {
						backgroundColor: theme.colors.selectiontext,
						color: theme.colors.selectionbackground,
					},
					a: {
						transition: `all 0.3s ease-in-out`,
						color: `text`,
						textDecoration: `none`,
					},
				})}
			/>
			<SkipNavLink> Skip Navigation </SkipNavLink>
			<Container>
				<Header />
				<Box id="skip-nav" className={props.className}>
					{props.children}
				</Box>
				<Footer />
			</Container>
		</React.Fragment>
	)
}

export default Layout
