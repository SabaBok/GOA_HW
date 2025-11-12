import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataInfo } from '../FullPage'

export default function Recomends() {
	const {data} = useContext(DataInfo)
	const [newArrivals, setNewArrivals] = useState([])
	const [topSelling, setTopSelling] = useState([])

	useEffect(() => {
		if (!data || data.length === 0) return;

		let dataClone = [...data]

		function getRandomItems(count) {
			let items = []
			for (let i = 0; i < count && dataClone.length > 0; i++) {
				let randomIndex = Math.floor(Math.random() * dataClone.length)
				items.push(dataClone[randomIndex])
				dataClone.splice(randomIndex, 1)
			}
			return items
		}

		setNewArrivals(getRandomItems(4))
		setTopSelling(getRandomItems(4))
	}, [data])

	if (!data) return <p>Loading...</p>
	return (
		<section className='w-full flex flex-col items-center gap-30 max-w-[1500px]'>
			<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>NEW ARRIVALS</h1>

				<div className='w-full grid gap-15 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center'>
					{newArrivals.map((el, ind) => (
						<Link key={ind} to={`/product/${el.id}`}> <Card prod={el} /> </Link>
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
						return <Link key={ind} to={`/product/${el.id}`}> <Card prod={el} /> </Link>
					})}
				</div>

				<button className='rounded-[20px] cursor-pointer border border-[#0000001A] px-10 py-[6px]'>View All</button>
			</div>
		</section>
	)
}
