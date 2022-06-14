/** @jsx jsx */
import { jsx, Heading, Box } from 'theme-ui'
import { Link } from 'gatsby'
import Icon from '../icons/icon'

const horscopeStyles = {
	flexBasis: [
		'calc(99.9% * 1 / 2 - 1rem)',
		'calc(99.9% * 1 / 2 - 1rem)',
		'calc(99.9% * 1 / 3 - 1rem)',
		'calc(99.9% * 1 / 4 - 1rem)',
	],
	maxWidth: [
		'calc(99.9% * 1 / 2 - 1rem)',
		'calc(99.9% * 1 / 2 - 1rem)',
		'calc(99.9% * 1 / 3 - 1rem)',
		'calc(99.9% * 1 / 4 - 1rem)',
	],
	width: [
		'calc(99.9% * 1 / 2 - 1rem)',
		'calc(99.9% * 1 / 2 - 1rem)',
		'calc(99.9% * 1 / 3 - 1rem)',
		'calc(99.9% * 1 / 4 - 1rem)',
	],
	marginBottom: '2rem',
	textAlign: 'center',
	backgroundColor: 'item',
	paddingTop: '25px',
	paddingBottom: '25px',
	borderWidth: '2px',
	borderStyle: 'solid',
	borderColor: 'item',
	'.icon': {
		fill: 'iconcolor',
	},
	':hover': {
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: 'primary',
	},
	svg: {
		display: 'block',
		margin: '0 auto',
		filter: 'grayscale(100%)',
		maxWidth: '50px',
		maxHeight: '50px',
		marginBottom: ['10px', '30px'],
		transition: 'all 0.5s ease',
	},
}

const HoroscopeItem = ({ title, date, content, slug, ...props }) => {
	return (
		<Link
			to={`/${slug}/`}
			sx={{ textDecoration: 'none', color: `primary`, ...horscopeStyles }}
			key={`item-${slug}`}
		>
			<Box>
				<Icon name={slug} />
				<Heading as="h3" variant="styles.h4" sx={{ my: 0 }}>
					{title}
				</Heading>
				<Box sx={{ fontSize: ['11px', '14px'], mt: 2 }}>{date}</Box>
			</Box>
		</Link>
	)
}

export default HoroscopeItem
