import React from 'react'

export default function Card({title,imgList,price,discountPrice,rating}) {
	return (
		<div className='flex flex-col max-w-[300px] duration-200 hover:scale-[1.02] cursor-pointer rounded-[10px]'>
			<img src={`/clothes/${imgList}`} alt="clothe photo" className='w-[300px] h-[400px] object-cover rounded-[10px]'/>
			<div>
				<h3 className='font-[700]'>{title}</h3>
				<p className='flex gap-2 items-center'>
					⭐⭐⭐⭐⭐
					<span>{rating}/<span className='text-[#666666]'>5</span></span>
				</p>
				<div>
					{discountPrice?
					<p className='text-[20px] flex gap-3 items-center font-[600]'>${price} 
						<span className='text-gray-400 line-through text-[20px]'>${discountPrice}</span> 
						<span className='flex items-center justify-center text-red-500 text-[11px] h-[20px] px-2 bg-red-100 rounded-full'>-{100 - Math.round(price/discountPrice*100)}%</span>
					</p> 
					
					: <p className='text-[20px] font-[600]'>${price}</p>}
				</div>
			</div>
		</div>
	)
}
