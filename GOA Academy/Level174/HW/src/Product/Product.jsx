import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Tabs from './Details/Tabs'
import AlsoLike from './AlsoLike'
import { DataInfo } from '../FullPage'

export default function Product() {
	const { id } = useParams()
	const data = useContext(DataInfo)
	const [product, setProduct] = useState(null)

	useEffect(() => {
		function fetchData() {
			const found = [...data].find(item => item.id === parseInt(id))
			setProduct(found) 
		}
		fetchData()
	}, [id,data])

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
