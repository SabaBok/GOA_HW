import React from 'react'

export default function Reviews() {
	return (
		<section className='flex flex-col gap-10 w-full max-w-[1400px] justify-center'>
			<div className='w-full flex justify-between'>
				<h1 className='font-[800] text-[36px]'>OUR HAPPY CUSTOMERS</h1>

				<div className='flex gap-6 items-center text-[20px]'>
					<i className="fa-solid fa-arrow-left cursor-pointer"></i>
					<i className="fa-solid fa-arrow-right cursor-pointer"></i>
				</div>
			</div>

			<div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5'>
				<div className='w-[400px] flex flex-col gap-3 py-[28px] px-[32px] rounded-[15px] border border-[#0000001A]'>
					<i>⭐⭐⭐⭐⭐</i>
					<div className='flex gap-2 items-center'>
						<h2>Sarah M.</h2>
						<i className="fa-solid fa-circle-check text-green-600"></i>
					</div>
					<p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
				</div>

				<div className='w-[400px] flex flex-col gap-3 py-[28px] px-[32px] rounded-[15px] border border-[#0000001A]'>
					<i>⭐⭐⭐⭐⭐</i>
					<div className='flex gap-2 items-center'>
						<h2>Sarah M.</h2>
						<i className="fa-solid fa-circle-check text-green-600"></i>
					</div>
					<p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
				</div>

				<div className='w-[400px] flex flex-col gap-3 py-[28px] px-[32px] rounded-[15px] border border-[#0000001A]'>
					<i>⭐⭐⭐⭐⭐</i>
					<div className='flex gap-2 items-center'>
						<h2>Sarah M.</h2>
						<i className="fa-solid fa-circle-check text-green-600"></i>
					</div>
					<p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
				</div>
			</div>
		</section>
	)
}
