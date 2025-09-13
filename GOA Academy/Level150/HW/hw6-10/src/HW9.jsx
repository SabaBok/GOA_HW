import React, { useState } from 'react'

export default function HW9() {
	const [number, setNumber] = useState(0)
	return (
		<div className='w-full p-10 flex flex-col g-5 justify-center items-center'>
			<p className={
				number>0?'text-green-500':
				number<0?'text-red-500':
				'text-black'}>{number}</p>
			<div className='flex g-3'>
				<button onClick={()=> setNumber(number-1)} className='p-2 bg-red-500 text-white'>-</button>
				<button onClick={()=> setNumber(0)} className='p-2 bg-white border border-black text-white'>0</button>
				<button onClick={()=> setNumber(number+1)} className='p-2 bg-green-500 text-black'>+</button>
			</div>
		</div>
	)
}
