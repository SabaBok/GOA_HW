import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FoodItems } from "../FullPage"

export default function Header() {
	const {
		accs,
		setAccs,
		adminLogged,
	} = useContext(FoodItems)

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
					{!adminLogged && <Link to='/Home' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Home</Link>}
					{/* {!adminLogged && <Link to='/Hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Order</Link>} */}
					{/* {!adminLogged && <Link to='/Hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Contact</Link>} */}
					<Link to={'/blogs'} className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Blogs</Link>
					{!adminLogged && <Link to='/Order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Orders</Link>}
					
					{/* admin stuff */}
					{adminLogged && (<Link to="/finance" className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Finance</Link>)}
					{adminLogged && (<Link to="/Kitchen" className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Kitchen</Link>)}
				</ul>
			</nav>

			<div className='flex items-center gap-7 max-lg:hidden'>
				{
					logged
						?
						<div className='flex items-center gap-3 duration-200 hover:bg-[#3a3a3a] px-3 py-1 rounded-lg cursor-pointer'>
							<i className="fa-regular fa-user text-white"></i>
							<button className="w-full group cursor-pointer relative border border-[#4a4a4a] rounded-lg px-[7px] py-[5px] text-white">
								{logged.name}
								<div className='bg-[#2a2a2a] text-left flex flex-col gap-1 border border-[#4a4a4a] min-w-[120px] w-full absolute top-full -right-2.5 rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
									<p className='opacity-50 ml-1 text-[#d1d1d1]'>{logged.title == 'user' ? 'customer' : 'admin'}</p>
									<hr className='border-t [#4a4a4a]' />
									<div className='w-full flex gap-3 items-center cursor-pointer duration-200 hover:bg-[#3a3a3a] px-2 rounded-lg' onClick={() => logOut()}>
										<i className="fa-solid fa-arrow-right-from-bracket text-[13px] mt-[5px] opacity-60 text-[#d1d1d1]"></i>
										<p className='font-light text-[#d1d1d1]'>Log Out?</p>
									</div>
								</div>
							</button>
						</div>

						: <Link to="/" className='rounded-lg border border-[#4a4a4a] px-4 py-1 cursor-pointer duration-200 hover:bg-[#3a3a3a] text-white'>Log In</Link>
				}


			</div>

			<div className='lg:hidden text-white' onClick={() => setSideBar(true)}><i className="fa-solid fa-bars"></i></div>
			{/* sidebar */}
			<div id="blur" className={`${sideBar ? '' : 'hidden'} fixed w-screen h-screen top-0 left-0 backdrop-blur-[20px] bg-[#0008]`} onClick={() => setSideBar(false)}></div>
			<div id="sidebar" className={`${sideBar ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-between px-4 py-2 duration-300 fixed z-3 right-0 h-screen top-0 max-w-[300px] w-[50%] bg-[#1e1e1e]`}>
				<div className='flex gap-4 items-center text-[24px] cursor-pointer duration-200 hover:text-[#d1d1d1] text-white' onClick={() => setSideBar(false)}>
					<i className="fa-solid fa-arrow-left mt-[5px]"></i>
					<p>Close</p>
				</div>

				<div className='h-[70%] flex flex-col justify-between items-center text-white'>
					<div className='flex flex-col gap-10'>
						<div className='flex flex-col items-center gap-4'>
							<img src="/images/food.png" alt="" className='w-10' />
							<h1 className='font-bold text-[25px] font-lexend-zetta '>GOA-TONA</h1>
							<p>Money: <span className='text-green-500'>${logged?.money}</span></p>
						</div>

						<nav>
							<ul className='flex flex-col  gap-10 text-[21px] items-center font-sansita-swashed'>
								<a href='#hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Home</a>
								<a href='#order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Order</a>
								<a href='#contact' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-white hover:before:w-full'>Contact</a>
							</ul>
						</nav>
					</div>

					<div className='flex items-center gap-7 '>
						{
							logged
								?
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
			</div>
		</header>
	)
}