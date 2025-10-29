import { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Tabs from './Details/Tabs'

export default function Product() {
	const { id } = useParams()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/clotheData.json')
			const data = await response.json()
			const found = data.find(item => item.id === parseInt(id))
			setProduct(found)
		}
		fetchData()
	}, [id])

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
			<div></div>
		</main>
	)
}
