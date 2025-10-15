import React from 'react'

export default function Recomends() {
	return (
		<section className='w-full flex flex-col items-center gap-30 max-w-[1200px]'>
			<div className='w-full flex flex-col gap-10 items-center'>
				<h1 className='font-oswald uppercase font-[900] text-[42px]'>NEW ARRIVALS</h1>

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
			</div>

			<div className='w-full flex flex-col gap-10 items-center'>
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
			</div>
		</section>
	)
}
