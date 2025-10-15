import Hero from './Hero'
import BeltLine from './BeltLine'
import Recomends from './Recomends'
import Style from './Style'
import Reviews from './Reviews'

export default function Main() {
	return (
		<main className='w-full flex flex-col items-center'>
			<Hero></Hero>
			<BeltLine></BeltLine>
			<Recomends></Recomends>
			<Style></Style>
			<br /><br />
			<Reviews></Reviews>
			<br /><br />
			<br /><br />
		</main>
	)
}
