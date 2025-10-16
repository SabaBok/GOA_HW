import React from 'react'
import Subscribe from './Subscribe'

export default function Ending() {
	return (
		<section className='bg-[#F0F0F0] h-[500px] w-full flex flex-col items-center'>
			<Subscribe></Subscribe>
			
			<div className='w-[90%] grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-items-center items-start gap-5'>
				<div className='flex flex-col text-left gap-5'>
					<h1 className='text-[34px] font-[800]'>SHOP.CO</h1>
					<p className='text-[#00000099]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

					<div className='flex gap-8'>
						<div className='rounded-full w-[35px] h-[35px] bg-white border border-[#00000033] flex items-center justify-center'><i className="fa-brands fa-twitter"></i></div>
						<div className='rounded-full w-[35px] h-[35px] bg-black flex items-center justify-center text-white'><i className="fa-brands fa-facebook-f"></i></div>
						<div className='rounded-full w-[35px] h-[35px] bg-white border border-[#00000033] flex items-center justify-center'><i className="fa-brands fa-instagram"></i></div>
						<div className='rounded-full w-[35px] h-[35px] bg-white border border-[#00000033] flex items-center justify-center'><i className="fa-brands fa-github"></i></div>
					</div>
				</div>

				<div className='flex flex-col text-left gap-4'>
					<h3 className='uppercase text-[20px] font-[400] tracking-wider'>company</h3>

					<ul className='text-[#00000099] flex flex-col gap-3'>
						<li>About</li>
						<li>Features</li>
						<li>Works</li>
						<li>Career</li>
					</ul>
				</div>

				<div className='flex flex-col text-left gap-4'>
					<h3 className='uppercase text-[20px] font-[400] tracking-wider'>Help</h3>

					<ul className='text-[#00000099] flex flex-col gap-3'>
						<li>Account</li>
						<li>Delivery Details</li>
						<li>Terms & Condition</li>
						<li>Privacy policies</li>
					</ul>
				</div>

				<div className='flex flex-col text-left gap-4'>
					<h3 className='uppercase text-[20px] font-[400] tracking-wider'>FAQ</h3>

					<ul className='text-[#00000099] flex flex-col gap-3'>
						<li>Account</li>
						<li>Manage Deliveries</li>
						<li>Orders</li>
						<li>Payments</li>
					</ul>
				</div>

				<div className='flex flex-col text-left gap-4'>
					<h3 className='uppercase text-[20px] font-[400] tracking-wider'>Recources</h3>

					<ul className='text-[#00000099] flex flex-col gap-3'>
						<li>Free Ebooks</li>
						<li>Development Tutortial</li>
						<li>Ho to - Blog</li>
						<li>Youtube Playlist</li>
					</ul>
				</div>
			</div>

			<br /><br />

			<div className='w-[90%] flex items-center justify-between border-t border-[#0000001A] pt-[10px]'>
				<p className='text-[#00000099] text-[14px]'>Shop.co © 2000-2023, All Rights Reserved</p>

				<div className='flex gap-4'>
					<img src="/cards/visa.png" alt="" />
					<img src="/cards/master.png" alt="" />
					<img src="/cards/pay.png" alt="" />
					<img src="/cards/apple.png" alt="" />
					<img src="/cards/google.png" alt="" />
				</div>
			</div>
		</section>
	)
}
