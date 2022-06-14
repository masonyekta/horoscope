/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const rowStyles = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	marginTop: '30px',
}

const HoroscopeList = (props) => {
	return <Box sx={{ ...rowStyles }}>{props.children}</Box>
}

export default HoroscopeList
