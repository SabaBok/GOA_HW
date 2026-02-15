export default function Hero() {
	return (
		<section id='hero' className='relative flex justify-center items-center min-h-[340px] bg-no-repeat bg-center w-full -translate-y-4'>
			<div className="absolute z-2 inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-40"></div>

			<div className="relative z-3 flex flex-col items-center gap-3 text-center w-1/2 max-md:w-[90%]">
				<h3 className="font-bold text-[50px] text-white">Welcome to Goa-Tona</h3>
				<p className="text-[20px] text-[#d1d1d1]">Experience authentic georgian cuisine in the heart of the city. Fresh ingredients, traditional recipes, and warm hospitality await you.</p>
				<a href="#menu"><button className="bg-[#e53e3e] rounded-lg px-6 py-2 text-white cursor-pointer hover:bg-[#c53030]">View Our Menu</button></a>
			</div>
		</section>
	)
}
