/** @jsx jsx */
import { jsx } from 'theme-ui'
import Aquarius from '../../assets/aquarius.svg'
import Aries from '../../assets/aries.svg'
import Cancer from '../../assets/cancer.svg'
import Capricorn from '../../assets/capricorn.svg'
import Gemini from '../../assets/gemini.svg'
import Leo from '../../assets/leo.svg'
import Libra from '../../assets/libra.svg'
import Pisces from '../../assets/pisces.svg'
import Sagittarius from '../../assets/sagittarius.svg'
import Scorpio from '../../assets/scorpio.svg'
import Taurus from '../../assets/taurus.svg'
import Virgo from '../../assets/virgo.svg'

const Icon = (props) => {
	switch (props.name) {
		case 'aquarius':
			return <Aquarius />
		case 'aries':
			return <Aries />
		case 'cancer':
			return <Cancer />
		case 'capricorn':
			return <Capricorn />
		case 'gemini':
			return <Gemini />
		case 'leo':
			return <Leo />
		case 'libra':
			return <Libra />
		case 'pisces':
			return <Pisces />
		case 'sagittarius':
			return <Sagittarius />
		case 'scorpio':
			return <Scorpio />
		case 'taurus':
			return <Taurus />
		case 'virgo':
			return <Virgo />
		default:
			return <div />
	}
}

export default Icon
