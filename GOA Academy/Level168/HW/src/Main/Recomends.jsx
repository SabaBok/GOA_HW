import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
let rendered = false
export default function Recomends() {
	const [data, setData] = useState([])
	const [newArrivals, setNewArrivals] = useState([])
	async function getData() {
		let response = await fetch('/clotheData.json')
		let responseData = await response.json()
		setData(responseData)
		rendered = true

		//for (let i = 0; i < 4; i++) {
		//	let random = Math.floor(Math.random() * responseData.length) + 1
		//	setNewArrivals((prev) => [...prev, responseData[random]])
		//	//responseData.splice(response[i],1)
		//}

		let count = 0
		while (count <= 4){
			let random = Math.floor(Math.random() * responseData.length) + 1

			setNewArrivals((prev) => [...prev, responseData[random]])
			console.log(newArrivals.length)
			count++
		}
	}
	useEffect(()=>{!rendered ? getData() : null},[])
	
	useEffect(() => {
		console.log(newArrivals)

	}, [data])

	return (
		<section className='w-full flex flex-col items-center gap-30 max-w-[1500px]'>
			<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>NEW ARRIVALS</h1>

				<div className='w-full grid gap-15 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center'>
					{newArrivals.map((el,ind)=>{

						return <Card key={ind} title={el.title} imgList={el.imgList[0]} price={el.price} rating={el.rate}/>
					})}

					{/*<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>

					<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>

					<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>*/}
				</div>

				<button className='rounded-[20px] cursor-pointer border border-[#0000001A] px-10 py-[6px]'>View All</button>
			</div>

			{/*<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>top selling</h1>

				<div className='w-full grid gap-15 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center'>
					<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>

					<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>

					<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>

					<div className='flex flex-col max-w-[300px]'>
						<img src="/example.png" alt="clothe photo" />
						<div>
							<h3 className='font-[700]'>T-shirt with tape details</h3>
							<p className='flex gap-2 items-center'>⭐⭐⭐⭐<span>4/<span className='text-[#666666]'>5</span></span></p>
							<p className='font-[700]'>120$</p>
						</div>
					</div>
				</div>

				<button className='rounded-[20px] cursor-pointer border border-[#0000001A] px-10 py-[6px]'>View All</button>
			</div>*/}
		</section>
	)
}
