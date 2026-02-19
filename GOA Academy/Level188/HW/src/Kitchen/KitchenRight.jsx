import { useContext, memo } from 'react'
import { FoodItems } from '../FullPage'

export default function KitchenRight() {
	const { admin, food } = useContext(FoodItems)
	let finishedOrders = [...admin.finishedOrders]

	const FinishedBlock = memo(({ el }) => {
		const foodObject = food.find(item => item.name === el.name)

		return (
			<div className='flex flex-col justify-between rounded-lg border border-[#4a4a4a] h-[370px] w-[200px] bg-[#2a2a2a] text-white'>
				<img src={foodObject?.imageURL || `/images/Foods/${el.name}.jpg`} alt="Finished Image" className='rounded-t-lg h-1/2 min-w-[200px] object-cover' />
				<div className='flex flex-col h-1/2 rounded-b-lg justify-between items-start p-3 gap-2'>
					<p className='font-bold'>{el.name}</p>
					<p>${el.price}</p>
					<p className='capitalize'>{el.category}</p>
					<p>{el.date}</p>
					<p className='text-green-400'>Finished</p>
				</div>
			</div>
		)
	})

	return (
		<div className='flex-1 flex flex-col items-center gap-8 p-5'>
			<h1 className='text-[35px] font-bold text-white'>Finished Orders</h1>
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center items-center px-5 gap-5 max-h-[600px] overflow-y-scroll'>
				{
					finishedOrders.map((el, ind) => (
						<FinishedBlock key={ind} el={el} />
					))
				}
			</div>
		</div>
	)
}