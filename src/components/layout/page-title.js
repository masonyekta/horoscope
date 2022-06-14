/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui'

const bodyStyles = {
	mb: 5,
	variant: 'styles',
	a: {
		color: `primary`,
		position: `relative`,
		backgroundRepeat: 'repeat-x',
		backgroundImage: `linear-gradient(to right,currentColor 100%,currentColor 0)`,
		backgroundSize: `1px 1px`,
		backgroundPosition: `0 100%`,
	},
}

const PageTitle = (props) => {
	const title = props.title
	const content = props.content

	return (
		<Box>
			<Heading as="h2" variant="styles.h2" sx={{ my: 3, maxWidth: 850 }}>
				{title}
			</Heading>
			{content && (
				<Box sx={{ ...bodyStyles }}>
					<p>{content}</p>
				</Box>
			)}
		</Box>
	)
}

export default PageTitle
