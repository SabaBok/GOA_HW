import Hero from './Hero'
import BeltLine from './BeltLine'
import Recomends from './Recomends'
import Style from './Style'
import Reviews from './Reviews'
import { useContext } from 'react'
import { UserContext } from '../FullPage'

export default function Main() {
	const [data,setData] = useContext(UserContext)
	//console.log(data)
	return (
		<main className='w-full flex flex-col items-center'>
			<Hero></Hero>
			<BeltLine></BeltLine>
			<Recomends data={data}></Recomends>
			<Style></Style>
			<br /><br />
			<Reviews data={data}></Reviews>
			<br /><br />
			<br /><br />
			<br /><br />
		</main>
	)
}
