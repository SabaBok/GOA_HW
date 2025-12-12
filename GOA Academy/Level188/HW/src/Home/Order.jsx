import {memo,useContext} from 'react'
import { FoodItems } from '../FullPage'

const FoodItem = memo(({ el }) => (
	<div className="group bg-[#ffffff21] p-5 rounded-2xl flex flex-col justify-between items-center gap-3 h-[360px] hover:h-full duration-300 overflow-hidden">
		<img src={`/images/Foods/${el.name}.jpg`} alt={el.name} className="w-[200px] h-[290px] rounded-lg flex-none"/>
		<p className="text-center">{el.name}</p>
		<p className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">{el.price}₾</p>
		<button className='px-5 py-2 bg-green-800 rounded-lg cursor-pointer duration-300 hover:bg-green-900'>Order</button>
	</div>
))

export default function Order() {
	const food = useContext(FoodItems)
	
	return (
		<section className='w-full bg-[#00250f] p-15 rounded-lg min-h-[1700px]'>
			<h2>Order</h2>
			
			<div className='grid h-full items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 auto-rows-[460px]'>
				{
					food.map((el,key)=> <FoodItem key={key} el={el}></FoodItem>)
				}
			</div>
		</section>
	)
}
