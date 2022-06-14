/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Text } from 'theme-ui'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const HeaderTitle = () => {
	const { title } = useSiteMetadata()
	return (
		<Link
			to={`/`}
			aria-label={`${title} - Back to home`}
			sx={{ color: `heading`, textDecoration: `none` }}
		>
			<Text
				variant="styles.h1"
				sx={{
					my: 0,
					fontWeight: `500`,
					wordSpacing: `-0.08em`,
					letterSpacing: `-0.04em`,
					fontSize: [3, 4],
				}}
			>
				{title}
			</Text>
		</Link>
	)
}

export default HeaderTitle
