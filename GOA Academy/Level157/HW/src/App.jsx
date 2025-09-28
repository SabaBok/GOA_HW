import { useState } from 'react'

function App() {
	const [accShowing, setAccShowing] = useState(false)
	const [currAcc, setcurrAcc] = useState({})
	const [toast, setToast] = useState([false, ''])
	const [theme,setTheme] = useState('dark')
	const [inp,setInp] = useState('')

	async function handleSearch(e) {
		e.preventDefault()

		let searchtext = e.target.user.value.trim()
		if (!searchtext) {handleError("Please enter a username"); return}

		const data = await getInfo(searchtext)
		if (!data) {
			setAccShowing(false)
			return
		}

		setAccShowing(true)
		setcurrAcc(data)
	}
	async function getInfo(username) {
		try {
			const response = await fetch(`https://api.github.com/users/${username}`)

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			const data = await response.json()

			return data
		} catch (error) {
			handleError("Please enter a valid username")
			return null
		}
	}
	function handleError(message) {
		let visible = toast[0]
		if (visible) return
		setToast([true, message])
		setTimeout(() => setToast([false, '']), 2000)
	}
	function handleTime(time) {
		const date = new Date(time)
		const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

		const day = date.getDate()
		const month = allMonths[date.getMonth()]
		const year = date.getFullYear() % 100

		return `Joined ${month} ${day}, ${year}`
	}
	function handleTheme(){
		const newTheme = theme === 'dark'?'light':'dark'
		setTheme(newTheme)
		localStorage.setItem('devfinder-theme',JSON.stringify('light'))
		document.documentElement.classList.toggle("light", newTheme === "light")
	}
	return (
		<main className='bg-[#141c2f] dark:bg-[#f0f4f8] dark:text-black w-full h-full flex flex-col items-center justify-center duration-200'>
			<section className='w-[98%] max-w-[700px] min-w-[300px] p-3 flex flex-col gap-5'>
				{/* header */}
				<div className='flex justify-between items-center'>
					<p className='font-bold'>devfinder</p>

					<div className='flex items-center gap-4 w-[70px] cursor-pointer duration-300 hover:text-gray-400' onClick={handleTheme}>
						<p>{theme ==='light'? 'Light': 'Dark'}</p>
						<i className={`fa-solid fa-${theme ==='light'?'sun':'moon'}`}></i>
					</div>
				</div>

				{/* search */}
				<div className='flex gap-4 items-center px-2 2xsm:pl-7 py-2 bg-[#1f2a48] dark:bg-[#fff] dark:shadow-xs rounded-lg'>
					<i className="fa-solid fa-magnifying-glass text-[#046ce3]"></i>
					<form className='flex justify-between gap-4 w-full' onSubmit={handleSearch}>
						<input type="text" 
						onChange={e=>setInp(e.target.value)} value={inp}
						placeholder='Search Github username' name='user' 
						className='dark:placeholder:text-[#6b7280] outline-none max-2xsm:hidden bg-none placeholder:text-white placeholder:opacity-80' />
						
						<input type="text" 
						onChange={e=>setInp(e.target.value)} value={inp}
						placeholder='Search Github username' name='user1' 
						className='dark:placeholder:text-[#6b7280] outline-none 2xsm:hidden max-w-[200px] bg-none placeholder:text-white placeholder:opacity-80' />
						
						<button type='submit' className='bg-[#0079fe] text-white rounded-lg px-4 py-[8px] duration-300 hover:bg-[#005bbd] cursor-pointer'>Search</button>
					</form>
				</div>

				{/* main */}
				{accShowing && (
					<div className='bg-[#1f2a48] dark:shadow-xl dark:bg-[#fff] 2xsm:px-4 px-1 py-6 rounded-lg flex items-start gap-6'>
						{/* body left */}
						<img src={currAcc.avatar_url} alt="profile" className='rounded-[50%] w-[100px] opacity-0 hidden sm:block sm:opacity-100'/>

						{/* body right */}
						<div className='flex flex-col gap-5 w-full h-full 2xsm:px-5'>
							{/* body top */}
							<div className='flex max-sm:items-center gap-6'>
								<img src={currAcc.avatar_url} alt="profile" className='rounded-[50%] w-[100px] sm:hidden'/>

								<div className='flex flex-col w-full gap-3 max-sm:gap-1'>
									<div className='flex justify-between w-full gap-3 items-center max-midsm:flex-col max-midsm:items-start max-midsm:gap-0'>
										<h2 className='font-[600] text-[1.4rem]'>{currAcc.login}</h2>
										<p className='min-w-[122px]'>{handleTime(currAcc.created_at)}</p>
									</div>
									<p className={`text-blue-400 ${!currAcc.name ? 'opacity-30' : null}`}>@{currAcc.name ? currAcc.name : 'Not Available'}</p>
									<span className={!currAcc.bio ? 'opacity-50' : null}>{currAcc.bio ? currAcc.bio : 'Not Bio'}</span>
								</div>
							</div>

							{/* body mid */}
							<div className='flex w-full justify-between bg-[#141c2f] dark:bg-[#f0f4f8] dark:text-black rounded-lg px-6 py-3'>
								<div>
									<span className='text-[13px] opacity-70'>Repos</span>
									<p className='font-bold text-[17px]'>{currAcc.public_repos}</p>
								</div>

								<div>
									<span className='text-[13px] opacity-70'>Followers</span>
									<p className='font-bold text-[17px]'>{currAcc.followers}</p>
								</div>

								<div>
									<span className='text-[13px] opacity-70'>Following</span>
									<p className='font-bold text-[17px]'>{currAcc.following}</p>
								</div>
							</div>

							{/* body bot */}
							<div className='w-full grid grid-cols-2 max-sm:grid-cols-1 max-sm:pl-[5px] max-midsm:justify-items-center midsm:justify-items-start gap-y-3 gap-x-10'>
								<div className={`flex items-center gap-3 ${!currAcc.location ? 'opacity-50' : null}`}>
									<i className='fa-solid fa-location-dot'></i>
									<p>{currAcc.location ? currAcc.location : 'Not Available'}</p>
								</div>

								<div className={`flex items-center gap-3 ${!currAcc.twitter_username ? 'opacity-50' : null}`}>
									<i className="fa-brands fa-twitter"></i>
									<p>{currAcc.twitter_username ? currAcc.twitter_username : 'Not Available'}</p>
								</div>

								<div className={`flex items-center gap-3 ${!currAcc.html_url ? 'opacity-50' : null}`}>
									<i className="fa-solid fa-link"></i>
									<a href={currAcc.html_url} target='_blank'
									className='hover:text-blue-400 duration-200'>{
										currAcc.html_url.length - 8 > 22? 
										`${currAcc.html_url.slice(8,22)}...`:
										currAcc.html_url.slice(8,currAcc.html_url.length)
									}</a>
								</div>

								<div className={`flex items-center gap-3 ${!currAcc.company ? 'opacity-50' : null}`}>
									<i className="fa-solid fa-city"></i>
									<p>{currAcc.company ? currAcc.company : 'Not Available'}</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* toast element */}
				<div className={`${toast[0] ? 'opacity-100' : 'opacity-0'} flex items-center gap-5 absolute top-[3%] right-[1%] min-w-70 w-[98%] max-w-[450px] min-h-15 rounded-sm px-5 py-2 bg-red-600 duration-300`}>
					<i className="fa-solid fa-circle-exclamation text-[20px] dark:text-white text-black"></i>
					<p className='font-[700] capitalize dark:text-white text-black'>{toast[1]}</p>
				</div>
			</section>
		</main>
	)
}

export default App
