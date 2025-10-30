import React from 'react'
import Review from '../../Components/Review'

export default function Ratings({prod}) {
	return (
		<div className='flex flex-col gap-7'>
			<div className='w-full flex items-center justify-between max-md:flex-col max-md:items-center'>
				<h2 className='text-[20px] font-[700]'>All Reviews <span className='text-[#00000099] text-[14px] font-[400]'>({prod.reviews.length})</span></h2>

				<div className='flex gap-5'>
					<div className='py-2 px-4 bg-[#F0F0F0] rounded-full '><i className="fa-solid fa-sliders rotate-90"></i></div>
					<div className='py-2 px-4 bg-[#F0F0F0] rounded-full '><p className='flex items-center gap-2'>Latest <i className="fa-solid fa-angle-down text-[13px]"></i></p></div>
					<div className='py-2 px-4 bg-black text-white rounded-full '><p>Write a Review</p></div>
				</div>
			</div>

			<div className='grid grid-cols-[repeat(auto-fit,minmax(610px,1fr))] gap-[20px] justify-items-center'>
				{
					prod.reviews.length==0?'No Reviews' :
					prod.reviews.map((el,ind)=>(
						<Review key={ind} info={el}/>
					))
				}
			</div>
		</div>
	)
}
