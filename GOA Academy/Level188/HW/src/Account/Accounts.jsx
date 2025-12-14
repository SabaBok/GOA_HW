import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Accounts() {
	const navigate = useNavigate()

	const [active, setActive] = useState(0) //0 aris register, 1 aris login
	const [accs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])

	useEffect(() => {
		let logged = accs.some(el => el.logged)
		if (logged) navigate('/Home')
	}, [])

	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-center gap-10 py-10 bg-[#f5f5f7]">
			<section className="flex gap-4 flex-col items-center min-h-[550px] max-w-[600px] w-[95%] min-w-[300px] p-10 bg-white rounded-[20px]">
				<div className='flex items-center gap-4 mr-6'>
					<img src="/images/food.png" alt="logo" className='w-10'/>
					<h2 className='font-semibold text-[21px]'>GOA-TONA</h2>
				</div>

				<p>Welcome</p>
				
				<div className='mb-2.5 flex gap-2 w-full items-center justify-center bg-[#ececf0] p-2 rounded-[18px]'>
					<p className={`flex-1 font-semibold text-[18px] cursor-pointer text-center rounded-lg py-2 duration-300 ${active === 0 ? 'bg-white' : '' }`} onClick={()=>setActive(0)}>Register</p>
					<p className={`flex-1 font-semibold text-[18px] cursor-pointer text-center rounded-lg py-2 duration-300 ${active === 1 ? 'bg-white' : '' }`} onClick={()=>setActive(1)}>Login</p>
				</div>

				<div className='w-full'>
					{active === 0 ? <RegisterForm changeForm={setActive} /> : <LoginForm changeForm={setActive} />}
				</div>
			</section>
		</main>
	)
}
