import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
	return (
		<section className='border-b border-[#0000001A] flex max-w-[1400px] w-[90%] gap-10 xl:gap-20 justify-center items-center py-[20px] max-lg:justify-between max-lg:px-10'>
			<div className='flex gap-4 items-center'>
				<i className="fa-solid fa-bars lg:!hidden cursor-pointer"></i>
				<Link to='/'><p className='text-[34px] font-oswald font-[900]'>SHOP.CO</p></Link>
			</div>

			<nav className='min-w-[320px] max-lg:hidden'>
				<ul className='flex gap-5'>
					<li className='cursor-pointer'>Shop <i className="fa-solid fa-chevron-down text-[13px]"></i></li>
					<li className='cursor-pointer'>On Sale</li>
					<li className='cursor-pointer'>New Arrivals</li>
					<li className='cursor-pointer'>Brands</li>
				</ul>
			</nav>

			<form className='min-w-[300px] max-w-[450px] w-[40%] max-lg:hidden'>
				<div className='px-3 py-2 rounded-[60px] bg-[#F0F0F0] flex gap-5 items-center'>
					<i className="fa-solid fa-magnifying-glass text-[#00000066]"></i>
					<input type="text" placeholder='Search for product...' name='search' className='w-full outline-none' />
				</div>
			</form>

			<div className='flex items-center gap-5'>
				<i className="fa-solid fa-magnifying-glass lg:!hidden"></i>
				<Link to={'/cart'}><i className="fa-solid fa-cart-shopping cursor-pointer"></i></Link>
				<i className="fa-regular fa-circle-user cursor-pointer"></i>
			</div>
		</section>
	)
}
