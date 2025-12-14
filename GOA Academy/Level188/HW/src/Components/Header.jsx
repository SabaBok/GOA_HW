import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
	const [accs, setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])
	const [user, setUser] = useState(accs.find(el => el.logged))
	const [logged, setLogged] = useState(accs.some(el => el.logged))

	const navigate = useNavigate()

	const [sideBar, setSideBar] = useState(false)
	const [newNotif, setNewNotif] = useState(false)

	useEffect(() => {
		const account = accs.find(el => el.logged)
		setUser(account)
		account ? setLogged(true) : navigate('/')
	}, [accs])

	function logOut() {
		let user = accs.find(el => el.logged)

		let updated = accs.map(el => {
			if (el.name == user.name) {
				return { ...el, logged: false }
			}
			return el
		})
		setAccs(updated)
		localStorage.setItem('proj-acc', JSON.stringify(updated))
		navigate('/')
	}

	return (
		<header className='max-md:px-5 w-full z-3 fixed top-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)] bg-white text-black flex justify-between items-center px-5 xl:px-30 py-5 flex-wrap gap-6 border-b border-[#a1a1a131]'>
			<div className='flex items-center gap-4'>
				<img src="/images/food.png" alt="" className='w-10' />
				<h1 className='font-bold text-[25px] font-lexend-zetta '>GOA-TONA</h1>
				<p className='max-lg:hidden'>Money: <span className='text-green-500'>${user.money}</span>  <span className='duration-300' style={{ opacity: 0 }}></span></p>
			</div>

			<nav className='max-lg:hidden'>
				<ul className='flex max-md:gap-3 gap-15 text-[21px] items-center font-sansita-swashed'>
					<a href='#hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Home</a>
					<a href='#order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Order</a>
					<a href='#checkout' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Check Out</a>
				</ul>
			</nav>

			<div className='flex items-center gap-7 max-lg:hidden'>
				<Link to={'/notifs'}>
					<i className={`fa-solid fa-bell cursor-pointer duration-200 hover:text-[#8d8d8d] relative ${newNotif ? 'after:opacity-100' : 'after:opacity-0'} after:rounded-full after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:bg-red-500 after:top-0 after:right-0 after:z-2`}></i>
				</Link>

				{
					logged
						?
						<div className='flex items-center gap-3 duration-200 hover:bg-[#e1e1e1] px-3 py-1 rounded-lg cursor-pointer'>
							<i className="fa-regular fa-user"></i>
							<button className="group cursor-pointer relative border border-[#3333336e] rounded-lg px-[7px] py-[5px]">
								{user.name}
								<div className='bg-white text-left flex flex-col gap-1 border border-[#7878786b] w-full absolute top-full right-0 rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
									<p className='opacity-50 ml-1'>{user.title == 'user' ? 'customer' : 'admin'}</p>
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
							<p>Money: <span className='text-green-500'>${user.money}</span>  <span className='duration-300' style={{ opacity: 0 }}></span></p>
						</div>

						<nav>
							<ul className='flex flex-col  gap-10 text-[21px] items-center font-sansita-swashed'>
								<a href='#hero' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Home</a>
								<a href='#order' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Order</a>
								<a href='#checkout' className='cursor-pointer relative before:content-[""] before:w-0 before:h-0.5 before:duration-300 before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-black hover:before:w-full'>Check Out</a>
							</ul>
						</nav>
					</div>

					<div className='flex items-center gap-7 '>
						<Link to={'/notifs'}>
							<i className={`fa-solid fa-bell cursor-pointer duration-200 hover:text-[#8d8d8d] relative ${newNotif ? 'after:opacity-100' : 'after:opacity-0'} after:rounded-full after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:bg-red-500 after:top-0 after:right-0 after:z-2`}></i>
						</Link>

						{
							logged
								?
								<div className='flex items-center gap-3 duration-200 hover:bg-[#e1e1e1] px-3 py-1 rounded-lg cursor-pointer'>
									<i className="fa-regular fa-user"></i>
									<button className="group cursor-pointer relative border border-[#3333336e] rounded-lg px-[7px] py-[5px]">
										{user.name}
										<div className='bg-white text-left flex flex-col gap-1 border border-[#7878786b] w-full absolute top-full right-0 rounded-lg p-1 mt-1 shadow-md scale-y-0 opacity-0 group-focus:opacity-100 group-focus:scale-y-100 origin-top duration-300'>
											<p className='opacity-50 ml-1'>{user.title == 'user' ? 'customer' : 'admin'}</p>
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
