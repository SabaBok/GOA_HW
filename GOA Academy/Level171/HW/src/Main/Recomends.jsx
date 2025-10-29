import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

export default function Recomends() {
	const [data, setData] = useState([])
	const [newArrivals, setNewArrivals] = useState([])
	const [topSelling, setTopSelling] = useState([])

	async function getData() {
		const response = await fetch('/clotheData.json')
		const responseData = await response.json()
		setData(responseData)

		let randomItems = []
		for (let i = 0; i < 4; i++) {
			let randomIndex = Math.floor(Math.random() * responseData.length)
			randomItems.push(responseData[randomIndex])
			responseData.splice(randomIndex, 1)
		}
		setNewArrivals(randomItems)

		randomItems = []
		for (let i = 0; i < 4; i++) {
			let randomIndex = Math.floor(Math.random() * responseData.length)
			randomItems.push(responseData[randomIndex])
			responseData.splice(randomIndex, 1)
		}
		setTopSelling(randomItems)	
	}

	useEffect(() => { getData() }, [])

	return (
		<section className='w-full flex flex-col items-center gap-30 max-w-[1500px]'>
			<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>NEW ARRIVALS</h1>

				<div className='w-full grid gap-15 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center'>
					{newArrivals.map((el, ind) => (
						<Link key={ind} to={`/product/${el.id}`}> <Card  title={el.title} imgList={el.imgList[0]} price={el.price} rating={el.rate} discountPrice={el.discount}/> </Link>
					))}
				</div>

				<Link to='/filtering'>
				<button className='rounded-[20px] cursor-pointer border border-[#0000001A] px-10 py-[6px]'>View All</button>
				</Link>
			</div>

			<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>top selling</h1>

				<div className='w-full grid gap-15 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center'>
					{topSelling.map((el, ind) => {
						return <Card key={ind} title={el.title} imgList={el.imgList[0]} price={el.price} rating={el.rate} discountPrice={el.discount}/>
					})}
				</div>

				<button className='rounded-[20px] cursor-pointer border border-[#0000001A] px-10 py-[6px]'>View All</button>
			</div>
		</section>
	)
}
