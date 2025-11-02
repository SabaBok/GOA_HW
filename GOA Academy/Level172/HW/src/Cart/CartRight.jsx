import React, { useEffect, useState } from 'react'

export default function CardRight({ cartProd }) {
	const [fullPrice, setFullPrice] = useState(0)
	const [discount, setDiscount] = useState(0)
	const [finalPrice, setFinalPrice] = useState(0)

	useEffect(() => {
		let totalPrice = 0
		let totalDiscount = 0

		cartProd.forEach(el => {
			totalPrice += el.price * el.amount
			if (el.discount) totalDiscount += (el.discount - el.price) * el.amount
		})

		setFullPrice(totalPrice)
		setDiscount(totalDiscount)
		setFinalPrice(totalPrice - totalDiscount + cartProd.length>0?15:0)
	}, [cartProd])

	return (
		<div className='border border-[#0000001A] rounded-[20px] px-[24px] py-[20px] h-[440px] flex-5 flex flex-col gap-5'>
			<h2 className='text-[20px] font-[700]'>Order Summary</h2>

			<div className='flex flex-col gap-5'>
				<div className='flex justify-between items-center gap-2'>
					<p className='text-[#00000099]'>Subtotal</p>
					<p className='font-[700] text-[20px]'>${fullPrice}</p>
				</div>

				<div className='flex justify-between items-center gap-2'>
					<p className='text-[#00000099]'>Discount (-20%)</p>
					<p className='text-red-500 font-[700] text-[20px]'>-${discount}</p>
				</div>

				<div className='flex justify-between items-center gap-2'>
					<p className='text-[#00000099]'>Delivery Fee</p>
					<p className='font-[700] text-[20px]'>${cartProd.length>0?15:0}</p>
				</div>

				<div className='w-full bg-[#0000001A] h-[1.5px]'></div>

				<div className='flex justify-between items-center gap-2'>
					<p>Total</p>
					<p className='font-[700] text-[24px]'>${finalPrice}</p>
				</div>
			</div>

			<div className='flex gap-4'>
				<div className='flex gap-4 bg-[#F0F0F0] rounded-full items-center px-4 py-2 flex-3'>
					<i className="fa-solid fa-tag text-[#00000066]"></i>
					<input type="text" placeholder='Add promo code' />
				</div>
				<button className='flex-1 bg-black text-white py-2 rounded-full'>Apply</button>
			</div>

			<button className='w-full rounded-full py-4 flex items-center gap-5 justify-center bg-black text-white'>Go To Checkout <i className="fa-solid fa-arrow-right"></i></button>
		</div>
	)
}
