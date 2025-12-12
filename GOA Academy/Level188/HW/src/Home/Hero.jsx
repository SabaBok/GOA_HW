export default function Hero() {
	return (
		<section id='hero' className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] min-h-[700px] items-center justify-items-center'>
			<div>
				<div className='flex flex-col items-center text-center tracking-[5px] px-[50px]'>
					<p className='uppercase font-lexend-zetta text-[40px] text-[#ADBC9F] scale-y-[0.9] scale-x-[1.1] translate-y-[25px]'>the ultimate</p>
					<h2 className='font-sansita-swashed font-semibold text-[100px] text-[#FBFADA] scale-x-[1.2]'>GOA Club</h2>
					<span className='font-lexend-zetta text-[20px] text-[#ADBC9F] mt-[3px]'>Savor the Flavor, Join the Club!</span>
				</div>
			</div>

			<div>
				<img src="/images/food.png" alt="" className='w-[700px]' />
			</div>
		</section>
	)
}
