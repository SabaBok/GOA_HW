import React from 'react'
import CartLeft from './CartLeft'
import CartRight from './CartRight'
import { useState, useEffect } from 'react'

export default function Cart() {
	const [cartProd, setCartProd] = useState(() => JSON.parse(localStorage.getItem('shopco-cart')) || [])
	const updateAmount = (id, newAmount) => {
		setCartProd(prev =>
			prev
				.map((item, index) => index == id ? { ...item, amount: newAmount } : item)
				.filter(item => item.amount > 0)
		)
	}
	useEffect(() => {
		localStorage.setItem('shopco-cart', JSON.stringify(cartProd))
	}, [cartProd])
	return (
		<main className='w-full h-full flex items-center justify-center pb-[200px]'>
			<section className='max-w-[1390px] w-full flex gap-10 flex-col justify-between'>
				<div className=' w-full flex gap-[15px] items-center font-400'>
					<p className='text-[#00000099]'>Home</p>
					<i className="text-[#00000099] fa-solid fa-chevron-right text-[13px]"></i>
					<p>Cart</p>
				</div>

				<h1 className='uppercase text-[35px] font-[800]'>Your cart</h1>

				<div className='flex justify-between gap-10'>
					<CartLeft cartProd={cartProd} updateAmount={updateAmount} />
					<CartRight cartProd={cartProd} />
				</div>
			</section>
		</main>
	)
}
