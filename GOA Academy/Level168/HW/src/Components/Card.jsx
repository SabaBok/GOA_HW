import React from 'react'

export default function Card({title,imgList,price,discountPrice,rating}) {
	return (
		<div className='flex flex-col max-w-[300px]'>
			<img src={`/clothes/${imgList}`} alt="clothe photo" className='w-[300px] h-[400px] object-cover'/>
			<div>
				<h3 className='font-[700]'>{title}</h3>
				<p className='flex gap-2 items-center'>
					⭐⭐⭐⭐⭐

					<span>{rating}/<span className='text-[#666666]'>5</span></span>
				</p>
				<p className='font-[700]'>{price}</p>
			</div>
		</div>
	)
}
