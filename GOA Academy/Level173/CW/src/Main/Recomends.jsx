import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

export default function Recomends({ data }) {
	const [newArrivals, setNewArrivals] = useState([])
	const [topSelling, setTopSelling] = useState([])

	useEffect(() => {
		async function getData() {
			if (!data || data.length === 0) return;

			let copiedData = [...data]
			let randomItems = []

			for (let i = 0; i < 4; i++) {
				let randomIndex = Math.floor(Math.random() * copiedData.length)
				randomItems.push(copiedData[randomIndex])
				copiedData.splice(randomIndex, 1)
			}
			setNewArrivals(randomItems)
			
			randomItems = []
			for (let i = 0; i < 4; i++) {
				let randomIndex = Math.floor(Math.random() * copiedData.length)
				randomItems.push(copiedData[randomIndex])
				copiedData.splice(randomIndex, 1)
			}
			setTopSelling(randomItems)
		}
		getData()
	}, [data])

	if (!data || data.length === 0) {
		return <p>Loading...</p>;
	}

	return (
		<section className='w-full flex flex-col items-center gap-30 max-w-[1500px]'>
			<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>NEW ARRIVALS</h1>

				<div className='w-full grid gap-15 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center'>
					{newArrivals.map((el, ind) => (
						<Link key={ind} to={`/product`}> <Card prod={el} /></Link>
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
						return <Link key={ind} to={`/product`}> <Card prod={el} /></Link>
					})}
				</div>

				<button className='rounded-[20px] cursor-pointer border border-[#0000001A] px-10 py-[6px]'>View All</button>
			</div>
		</section>
	)
}
