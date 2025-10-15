import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUpNow() {
	const [display,setDisplay] = useState(true)
	const [hide, setHide] = useState(false)

	return (
		<section className={`w-full text-white bg-black py-1 px-3 lg:px-30 duration-200 ${display?'translate-y-[0%]':'translate-y-[-101%]'} ${!hide?'flex':'hidden'} items-center !justify-center lg:!justify-between font-[300] text-[14px]`}>
			<div className='max-lg:!hidden'></div>
			<p>Sign up and get 20% off to your first order. <span className='relative cursor-pointer after:content-[""] after:w-full after:h-[1px] after:absolute after:left-0 after:bottom-0 after:bg-white'>Sign Up Now</span></p>
			<i className="fa-solid fa-xmark max-lg:!hidden text-white text-[19px] cursor-pointer" onClick={()=>{ setDisplay(false); setTimeout(()=> setHide(true),200)}}></i>
		</section>
	)
}
