import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Accounts() {
	const navigate = useNavigate()
	
	const [active,setActive] = useState(1) //0 aris register, 1 aris login
	const [accs, setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])
	for(let i of accs){
		if(i.logged){
			navigate('/Home')
		}
	}

	return (
		<section>
			{active===0?<RegisterForm changeForm={setActive}/>:<LoginForm changeForm={setActive}/>}
		</section>
	)
}
