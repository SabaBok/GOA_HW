import React from 'react'

export default function Hero() {
	return (
		<section className='w-full flex bg-[#F2F0F1] justify-center'>
			<div className='flex max-w-[1200px]'>
				<div className='w-1/2 flex flex-col gap-10 items-start'>
					<div className='flex flex-col gap-5 items-start'>
						<h2 className='font-oswald font-[800] text-[67px] scale-y-[0.8]  max-w-[470px] tracking-tighter leading-tight'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
						<p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
						<button className='rounded-[20px] bg-black text-white px-10 py-2 cursor-pointer'>Shop Now</button>
					</div>

					<div className='flex gap-8'>
						<div className='flex flex-col border-r border-[#0000001A] pr-10'>
							<p className='scale-y-[0.9] font-[600] text-[30px]'>200+</p>
							<span className='text-[#00000099] text-[14px]'>International Brands</span>
						</div>

						<div className='flex flex-col border-r border-[#0000001A] pr-10'>
							<p className='scale-y-[0.9] font-[600] text-[30px]'>2,000+</p>
							<span className='text-[#00000099] text-[14px]'>High-Quality Products</span>
						</div>

						<div className='flex flex-col pr-10'>
							<p className='scale-y-[0.9] font-[600] text-[30px]'>30,000+</p>
							<span className='text-[#00000099] text-[14px]'>Happy Customers</span>
						</div>
					</div>
				</div>

				<img src="/hero.jpg" alt="hero.jpg" className='w-[50%] h-[600px] object-cover object-[50%_17%]' />
			</div>
		</section>
	)
}
