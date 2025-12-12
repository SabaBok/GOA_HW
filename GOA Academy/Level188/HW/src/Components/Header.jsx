import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
	const [accs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])
	const [logged, setLogged] = useState(false)
	const navigate = useNavigate()


	useEffect(() => {
		const isLogged = accs.some(el => el.logged)
		isLogged?setLogged(true):navigate('/')
	}, [accs])

	return (
		<header className='w-full fixed z-2 bg-[#12372A] flex justify-between items-center px-5 sm:px-[50px] py-5 flex-wrap gap-6 max-md:justify-center border-b border-[#a1a1a131]'>
			<h1 className='font-bold text-[35px] font-lexend-zetta tracking-[10px] '>GOA-TONA</h1>

			<nav>
				<ul className='flex gap-5 sm:gap-15 text-[21px] items-center font-sansita-swashed'>
					<a href='#hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Home</a>
					<a href='#menu' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Menu</a>
					<li className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Order</li>
					<li className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Receive</li>
				</ul>
			</nav>

			<div>
				{
					logged ?
						<div className='flex gap-2 items-center border border-gray-200 rounded-lg py-1.5 px-4 cursor-pointer duration-300 hover:bg-gray-600'>
							<i className="fa-solid fa-user"></i>
							<p>Log Out?</p>
						</div> :''
				}
			</div>

		</header>
	)
}
