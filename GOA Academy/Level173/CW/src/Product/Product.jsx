import Info from './Info'
import Tabs from './Details/Tabs'
import AlsoLike from './AlsoLike'
import { useContext } from 'react'
import {UserContext} from '../FullPage'

export default function Product() {
	const [product, setProduct] = useContext(UserContext)

	if (!product) {
		return (
			<main className='flex justify-center items-center h-screen'>
				<p>Loading product...</p>
			</main>
		)
	}

	return (
		<main className='lg:px-[120px] px-[50px] pb-[120px] flex flex-col items-center gap-30'>
			{/* product */}
			<Info product={product}/>
			{/* tabs */}
			<Tabs prod={product}/>
			{/* recomends */}
			<AlsoLike />
		</main>
	)
}
