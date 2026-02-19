import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FoodItems } from "../FullPage"

export default function Header() {
	const { accs, setAccs, adminLogged, } = useContext(FoodItems)

	const navigate = useNavigate()

	const [sideBar, setSideBar] = useState(false)

	const logged = accs.find(el => el.logged)

	function logOut() {
		const updated = accs.map(acc => {
			if (acc.logged) {
				if (acc.title === 'user') {
					return {
						...acc,
						logged: false,
						cart: []
					}
				}
				if (acc.title === 'admin') {
					return {
						...acc,
						logged: false
					}
				}
			}
			return acc
		})

		setAccs(updated)
		navigate('/')
	}

	return (
		<header className='max-md:px-5 w-full z-3 fixed top-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)] bg-[#121212] text-white flex justify-between items-center px-5 xl:px-30 py-5 flex-wrap gap-6 border-b border-[#4a4a4a]'>
			<Link to={'/Home'} className='flex items-center gap-4'>
				<img src="/images/food.png" alt="logo" className='w-10' />
				<h1 className='font-bold text-[25px] font-lexend-zetta '>GOA-TONA</h1>
			</Link>

			<nav className='max-lg:hidden'>
				<ul className='flex max-md:gap-3 gap-15 text-[21px] items-center font-sansita-swashed'>
					{adminLogged == false && <Link to='/Home' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:bottom-0 -before:left-1/2 before:bg-white hover:before:w-full'>Home</Link>}
					{adminLogged == false && <Link to='/order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:bottom-0 -before:left-1/2 before:bg-white hover:before:w-full'>Orders</Link>}
					{adminLogged == true && <Link to='/finance' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:bottom-0 -before:left-1/2 before:bg-white hover:before:w-full'>Finance</Link>}
					<Link to='/blogs' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:bottom-0 -before:left-1/2 before:bg-white hover:before:w-full'>Blogs</Link>
					{adminLogged == true && <Link to='/kitchen' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:bottom-0 -before:left-1/2 before:bg-white hover:before:w-full'>Kitchen</Link>}
				</ul>
			</nav>

			<div className='flex items-center gap-7 p-5'>
				{
					logged ?
						<div className='flex items-center gap-3 duration-200 hover:bg-[#3a3a3a] px-3 py-1 rounded-lg cursor-pointer'>
							<i className="fa-regular fa-user text-white"></i>
							<button className="group cursor-pointer relative border border-[#4a4a4a] rounded-lg px-[7px] py-[5px] text-white">
								{logged.name}
								<div className='bg-[#2a2a2a] text-left flex flex-col gap-1 border border-[#4a4a4a] w-[150px] absolute top-full -right-5 rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
									<p className='opacity-50 ml-1 text-[#d1d1d1]'>{logged.title == 'user' ? 'customer' : 'admin'}</p>
									<hr className='border-t [#4a4a4a]' />
									<div className='flex gap-3 items-center cursor-pointer duration-200 hover:bg-[#3a3a3a] px-2 rounded-lg' onClick={() => logOut()}>
										<i className="fa-solid fa-arrow-right-from-bracket text-[13px] mt-[5px] opacity-60 text-[#d1d1d1]"></i>
										<p className='font-light text-[#d1d1d1]'>Log Out?</p>
									</div>
								</div>
							</button>
						</div>

						: <button className='rounded-lg border border-[#4a4a4a] px-4 py-1 cursor-pointer duration-200 hover:bg-[#3a3a3a] text-white'>Log In</button>
				}
			</div>

			<div className='lg:hidden flex items-center gap-3'>
				<i className="fa-solid fa-bars cursor-pointer text-[20px]" onClick={() => setSideBar(true)}></i>
			</div>

			<div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#00000080] z-50 transition-opacity duration-300 ${sideBar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSideBar(false)}></div>

			<div className={`lg:hidden fixed top-0 right-0 w-[300px] h-full bg-[#1e1e1e] z-50 transition-transform duration-300 ${sideBar ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className='flex flex-col gap-5 p-5'>
					<i className="fa-solid fa-xmark cursor-pointer text-[25px] self-end" onClick={() => setSideBar(false)}></i>

					<nav>
						<ul className='flex flex-col gap-5 text-[21px] items-start font-sansita-swashed'>
							{!adminLogged && <Link to='/Home' className='cursor-pointer' onClick={() => setSideBar(false)}>Home</Link>}
							{!adminLogged && <Link to='/order' className='cursor-pointer' onClick={() => setSideBar(false)}>Orders</Link>}
							{adminLogged && <Link to='/finance' className='cursor-pointer' onClick={() => setSideBar(false)}>Finance</Link>}
							{adminLogged && <Link to='/blogs' className='cursor-pointer' onClick={() => setSideBar(false)}>Blogs</Link>}
							{adminLogged && <Link to='/kitchen' className='cursor-pointer' onClick={() => setSideBar(false)}>Kitchen</Link>}
							<Link to='/contact' className='cursor-pointer' onClick={() => setSideBar(false)}>Contact</Link>
						</ul>
					</nav>
				</div>

				<div className='flex items-center gap-7 p-5'>
					{
						logged ?
							<div className='flex items-center gap-3 duration-200 hover:bg-[#3a3a3a] px-3 py-1 rounded-lg cursor-pointer'>
								<i className="fa-regular fa-user text-white"></i>
								<button className="group cursor-pointer relative border border-[#4a4a4a] rounded-lg px-[7px] py-[5px] text-white">
									{logged.name}
									<div className='bg-[#2a2a2a] text-left flex flex-col gap-1 border border-[#4a4a4a] w-full absolute top-full right-0 rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
										<p className='opacity-50 ml-1 text-[#d1d1d1]'>{logged.title == 'user' ? 'customer' : 'admin'}</p>
										<hr className='border-t [#4a4a4a]' />
										<div className='flex gap-3 items-center cursor-pointer duration-200 hover:bg-[#3a3a3a] px-2 rounded-lg' onClick={() => logOut()}>
											<i className="fa-solid fa-arrow-right-from-bracket text-[13px] mt-[5px] opacity-60 text-[#d1d1d1]"></i>
											<p className='font-light text-[#d1d1d1]'>Log Out?</p>
										</div>
									</div>
								</button>
							</div>

							: <button className='rounded-lg border border-[#4a4a4a] px-4 py-1 cursor-pointer duration-200 hover:bg-[#3a3a3a] text-white'>Log In</button>
					}
				</div>
			</div>
		</header>
	)
}