import React, { useState, useEffect } from 'react'
import CartCard from '../Components/CartCard'

export default function CartLeft({ cartProd, updateAmount }) {
	return (
		<div className='border border-[#0000001A] rounded-[20px] px-[24px] py-[20px] flex-7 flex flex-col items-start justify-start gap-10'>
			{cartProd.map((el, id) => (
				<CartCard prod={el} updateAmount={updateAmount} id={id} key={id} />
			))}
		</div>
	)
}
