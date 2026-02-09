import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FoodItems } from "../FullPage"

export default function Header() {
	const { 
		accs, 
		setAccs, 
		adminLogged,
		loggedUser, 
		adminMode 
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
		<header className='max-md:px-5 w-full z-3 fixed top-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)] bg-white text-black flex justify-between items-center px-5 xl:px-30 py-5 flex-wrap gap-6 border-b border-[#a1a1a131]'>
			<Link to={'/Home'} className='flex items-center gap-4'>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat h-8 w-8 text-primary" aria-hidden="true">
					<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
					<path d="M6 17h12"></path>
				</svg>

				<h1 className='font-bold text-[25px] font-lexend-zetta '>GOA-TONA</h1>
			</Link>

			<nav className='max-lg:hidden'>
				<ul className='flex max-md:gap-3 gap-15 text-[21px] items-center font-sansita-swashed'>
					{!adminLogged && <a href='#hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Home</a>}
					{!adminLogged && <a href='#order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Order</a>}
					{!adminLogged && <a href='#contact' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Contact</a>}
					<Link to={'/blogs'} className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Blogs</Link>

					{/* admin stuff */}
					{adminLogged && (<Link to="/finance" className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Finance</Link>)}
					{adminLogged && (<Link to="/Kitchen" className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Kitchen</Link>)}
				</ul>
			</nav>

			<div className='flex items-center gap-7 max-lg:hidden'>
				{
					logged?.logged ?
						<div className='flex items-center gap-3 duration-200 hover:shadow-md px-3 py-1 rounded-lg cursor-pointer'>
							<i className="fa-regular fa-user"></i>

							<button className="group cursor-pointer relative border border-[#3333336e] rounded-lg px-[7px] py-[5px]">
								{logged?.name}
								<div className='bg-white text-left flex flex-col gap-1 border border-[#7878786b] w-full min-w-[150px] absolute top-full right-[-18px] rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
									<p className='opacity-50 ml-1'>{logged?.title == 'user' ? 'customer' : 'admin'}</p>
									<hr className='border-t border-gray-300' />
									<div className='flex gap-3 items-center cursor-pointer duration-200 hover:bg-[#e1e1e1] px-2 rounded-lg' onClick={() => logOut()}>
										<i className="fa-solid fa-arrow-right-from-bracket text-[13px] mt-[5px] opacity-60"></i>
										<p className='font-light'>Log Out?</p>
									</div>
								</div>
							</button>
						</div>

						: <button className='rounded-lg border border-black px-4 py-1 cursor-pointer duration-200 hover:bg-[#e1e1e1]'>Log In</button>
				}
			</div>

			<div className='lg:hidden' onClick={() => setSideBar(true)}><i className="fa-solid fa-bars"></i></div>

			{/* sidebar */}
			<div id="blur" className={`${sideBar ? '' : 'hidden'} fixed w-screen h-screen top-0 left-0 backdrop-blur-[20px] bg-[#0008]`}></div>
			<div id="sidebar" className={`${sideBar ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-between px-4 py-2 duration-300 fixed z-3 right-0 h-screen top-0 max-w-[300px] w-[50%] bg-white`}>
				<div className='flex gap-4 items-center text-[24px] cursor-pointer duration-200 hover:text-[#6b6b6b]' onClick={() => setSideBar(false)}>
					<i className="fa-solid fa-arrow-left mt-[5px]"></i>
					<p>Close</p>
				</div>

				<div className='h-[70%] flex flex-col justify-between items-center'>
					<div className='flex flex-col gap-10'>
						<div className='flex flex-col items-center gap-4'>
							<img src="/images/food.png" alt="" className='w-10' />
							<h1 className='font-bold text-[25px] font-lexend-zetta '>GOA-TONA</h1>
							<p>Money: <span className='text-green-500'>${loggedUser?.money}</span></p>
						</div>

						<nav>
							<ul className='flex flex-col  gap-10 text-[21px] items-center font-sansita-swashed'>
								<a href='#hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Home</a>
								<a href='#order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Order</a>
								<a href='#contact' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Contact</a>
							</ul>
						</nav>
					</div>

					<div className='flex items-center gap-7 '>
						{
							logged?.logged?
								<div className='flex items-center gap-3 duration-200 hover:bg-[#e1e1e1] px-3 py-1 rounded-lg cursor-pointer'>
									<i className="fa-regular fa-user"></i>
									<button className="group cursor-pointer relative border border-[#3333336e] rounded-lg px-[7px] py-[5px]">
										{logged?.name}
										<div className='bg-white text-left flex flex-col gap-1 border border-[#7878786b] w-full absolute top-full right-0 rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
											<p className='opacity-50 ml-1'>{loggedUser?.title == 'user' ? 'customer' : 'admin'}</p>
											<hr className='border-t border-gray-300' />
											<div className='flex gap-3 items-center cursor-pointer duration-200 hover:bg-[#e1e1e1] px-2 rounded-lg' onClick={() => logOut()}>
												<i className="fa-solid fa-arrow-right-from-bracket text-[13px] mt-[5px] opacity-60"></i>
												<p className='font-light'>Log Out?</p>
											</div>
										</div>
									</button>
								</div>

								: <button className='rounded-lg border border-black px-4 py-1 cursor-pointer duration-200 hover:bg-[#e1e1e1]'>Log In</button>
						}
					</div>
				</div>
			</div>
		</header>
	)
}