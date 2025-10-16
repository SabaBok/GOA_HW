import React from 'react'

export default function Subscribe() {
	return (
		<section className='max-md:mt-[70px] max-md:flex-col translate-y-[-50%] flex justify-between gap-5 bg-black rounded-[15px] w-[90%] max-w-[1500px]  md:min-h-[180px] px-[60px] py-[30px] text-white items-center'>
			<h1 className='font-[800] text-[30px] md:max-w-[45%]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

			<form className='flex flex-col items-center w-[350px] gap-5'>
				<div className='rounded-full bg-white text-black w-full py-3 px-5 flex items-center gap-3'>
					<i className="fa-solid fa-envelope text-[#00000066]"></i>
					<input type="text" placeholder='Enter your email address'/>
				</div>
				<button className='rounded-full bg-white text-black w-full py-3 cursor-pointer duration-200 hover:bg-[#cccccc]' type='submit'>Subscribe to Newsletter</button>
			</form>
		</section>
	)
}
