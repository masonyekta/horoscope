import { merge } from 'theme-ui'
import { transparentize } from '@theme-ui/color'
import { tailwind } from '@theme-ui/presets'

const theme = merge(tailwind, {
	initialColorModeName: `light`,
	useCustomProperties: true,
	useColorSchemeMediaQuery: true,
	colors: {
		text: `#696969`,
		selectiontext: `#696969`,
		selectionbackground: `#ffffff`,
		primary: tailwind.colors.black,
		secondary: `#696969`,
		toggleIcon: tailwind.colors.gray[8],
		heading: `#343434`,
		divide: `#B8B8B8`,
		linkborder: `#dbdbdb`,
		codebackground: `#f6f8fa`,
		codecolor: `#393A34`,
		codekeywords: `#00a4db`,
		codeselectorkeywords: `#00009f`,
		codevariable: `#36acaa`,
		item: `#F7F7F7`,
		iconcolor: tailwind.colors.gray[8],
		modes: {
			dark: {
				text: `#9E9E9E`,
				primary: tailwind.colors.gray[1],
				secondary: `#696969`,
				toggleIcon: tailwind.colors.gray[4],
				background: `#191919`,
				heading: tailwind.colors.white,
				divide: `#343434`,
				linkborder: `#575757`,
				muted: tailwind.colors.gray[8],
				codebackground: `#282A36`,
				codecolor: `#F8F8F2`,
				codekeywords: `rgb(189, 147, 249)`,
				codeselectorkeywords: `rgb(255, 121, 198)`,
				codevariable: `rgb(189, 147, 249)`,
				selectionbackground: `#191919`,
				selectiontext: `#ffffff`,
				item: `#2b2a2a`,
				iconcolor: tailwind.colors.gray[6],
			},
		},
	},
	fonts: {
		body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
		heading: `"Roboto Mono", monospace`,
	},
	fontWeights: {
		body: 400,
		heading: 500,
	},
	styles: {
		root: {
			color: `text`,
			backgroundColor: `background`,
			margin: 0,
			padding: 0,
			boxSizing: `border-box`,
			textRendering: `optimizeLegibility`,
			WebkitFontSmoothing: `antialiased`,
			MozOsxFontSmoothing: `grayscale`,
		},
		p: {
			fontSize: [1, 1, 2],
			letterSpacing: `-0.003em`,
			lineHeight: `body`,
			'--baseline-multiplier': 0.179,
			'--x-height-multiplier': 0.35,
			wordBreak: `break-word`,
		},
		ul: {
			li: {
				fontSize: [1, 1, 2],
				letterSpacing: `-0.003em`,
				lineHeight: `body`,
				'--baseline-multiplier': 0.179,
				'--x-height-multiplier': 0.35,
			},
		},
		ol: {
			li: {
				fontSize: [1, 1, 2],
				letterSpacing: `-0.003em`,
				lineHeight: `body`,
				'--baseline-multiplier': 0.179,
				'--x-height-multiplier': 0.35,
			},
		},
		h1: {
			variant: `text.heading`,
			fontSize: [5, 6, 6, 7],
			wordSpacing: `-0.08em`,
			letterSpacing: `-0.04em`,
			mt: 4,
		},
		h2: {
			variant: `text.heading`,
			fontSize: [3, 5, 5, 5],
			wordSpacing: `-0.08em`,
			letterSpacing: `-0.04em`,
			mt: 4,
		},
		h3: {
			variant: `text.heading`,
			fontSize: [3, 4, 4, 4],
			wordSpacing: `-0.08em`,
			letterSpacing: `-0.04em`,
			mt: 4,
		},
		h4: {
			variant: `text.heading`,
			fontSize: [2, 3, 3, 3],
			mt: 3,
		},
		h5: {
			variant: `text.heading`,
			fontSize: [1, 2, 2, 2],
			mt: 3,
		},
		h6: {
			variant: `text.heading`,
			fontSize: 1,
			mb: 2,
		},
		blockquote: {
			fontSize: [1, 1, 2],
			borderLeftColor: `primary`,
			borderLeftStyle: `solid`,
			borderLeftWidth: `2px`,
			mx: 0,
			pl: 4,
			p: {
				fontStyle: `italic`,
			},
		},
		table: {
			width: `100%`,
			my: 4,
			borderCollapse: `separate`,
			borderSpacing: 0,
			[[`th`, `td`]]: {
				textAlign: `left`,
				py: `4px`,
				pr: `4px`,
				pl: 0,
				borderColor: `muted`,
				borderBottomStyle: `solid`,
			},
		},
		th: {
			verticalAlign: `bottom`,
			borderBottomWidth: `2px`,
			color: `heading`,
		},
		td: {
			verticalAlign: `top`,
			borderBottomWidth: `1px`,
		},
		hr: {
			mx: 0,
		},
		pre: {
			padding: 3,
			fontSize: [`14px`, `14px`, `16px`],
			fontFamily: `body`,
			overflow: `scroll`,
		},
	},
	layout: {
		container: {
			padding: [3, 4],
			maxWidth: `950px`,
		},
	},
	text: {
		heading: {
			fontFamily: `heading`,
			fontWeight: `heading`,
			lineHeight: `heading`,
			color: `heading`,
		},
	},
	copyButton: {
		backgroundColor: transparentize(`primary`, 0.8),
		border: `none`,
		color: `gray.2`,
		cursor: `pointer`,
		fontSize: [`14px`, `14px`, `16px`],
		fontFamily: `body`,
		letterSpacing: `0.025rem`,
		transition: `default`,
		'&[disabled]': {
			cursor: `not-allowed`,
		},
		':not([disabled]):hover': {
			bg: `primary`,
			color: `white`,
		},
		position: `absolute`,
		top: 0,
		right: 0,
		zIndex: 1,
		borderRadius: `0 0 0 0.25rem`,
		padding: `0.25rem 0.6rem`,
	},
	dividers: {
		bottom: {
			borderBottomStyle: `solid`,
			borderBottomWidth: `1px`,
			borderBottomColor: `divide`,
			pb: 3,
		},
		top: {
			borderTopStyle: `solid`,
			borderTopWidth: `1px`,
			borderTopColor: `divide`,
			pt: 3,
		},
	},
	borders: {
		bottom: {
			borderBottomStyle: `solid`,
			borderBottomWidth: `1px`,
			borderBottomColor: `primary`,
		},
	},
	links: {
		secondary: {
			color: `secondary`,
			textDecoration: `none`,
			':hover': {
				color: `heading`,
				textDecoration: `underline`,
			},
			':focus': {
				color: `heading`,
			},
		},
		listItem: {
			fontSize: [1, 2, 3],
			color: `text`,
		},
	},
})

export default theme
