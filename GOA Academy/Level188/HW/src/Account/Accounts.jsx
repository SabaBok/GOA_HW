import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { useState } from 'react'

export default function Accounts() {
	const [active,setActive] = useState(1) //0 aris register, 1 aris login

	return (
		<section>
			{active===0?<RegisterForm changeForm={setActive}/>:<LoginForm changeForm={setActive}/>}
		</section>
	)
}
