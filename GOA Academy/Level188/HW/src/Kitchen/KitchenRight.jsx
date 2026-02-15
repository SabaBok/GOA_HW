import { useState, useContext } from 'react'
import { FoodItems } from '../FullPage'

export default function KitchenRight() {
	const { admin } = useContext(FoodItems)
	let finishedOrders = admin.finishedOrders

	return (
		<div className='flex-1'>
			<h1></h1>

			{/* <div>
				{
					[...finishedOrders].map((el, ind) => (
						<div key={ind} className='flex flex-col justify-between rounded-lg border border-gray-600 h-[370px] w-[200px]'>
							<img src={foodObject.img || `/images/Foods/${el.name}.jpg`} alt="Order Image" className='rounded-t-lg h-1/2 min-w-[200px]' />
							<div className='flex flex-col h-1/2 rounded-b-lg justify-between items-start p-1'>
								<p>{el.name}</p>
								<p>{el.price}</p>
								<p>{el.category}</p>
								<p>{el.type}</p>
								<p>{el.date}</p>
								<button className='px-3 py-1 rounded-lg bg-orange-500 cursor-pointer duration-250 hover:bg-orange-700' onClick={() => StartOrder(el)}>Make Order</button>
							</div>
						</div>
					))
				}
			</div> */}
		</div>
	)
}
