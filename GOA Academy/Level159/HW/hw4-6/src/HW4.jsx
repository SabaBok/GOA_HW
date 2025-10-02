import React, { useEffect, useState } from 'react'

export default function HW4() {
	const [email,setEmail] = useState('')
	const [pass,setPass] = useState('')
	
	useEffect(()=>{
		email.includes('@')&&pass.length>6?console.log('valid credentials'):console.log('invalid email or password')
	},[email,pass])

	return (
		<form action="" onSubmit={e=> {e.preventDefault(); setEmail(e.target.email.value); setPass(e.target.pass.value)}}>
			<input type="text" placeholder='email' name='email'/>
			<input type="text" placeholder='pass' name='pass'/>
		</form>
	)
}
//4) შექმენით ორი state: email და password
//შექმენით ორი input -> ერთი მეილის მეორე პაროლის
//შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
//თუ email შეიცავს "@" და password.length >= 6 -> console.log("Valid Credentials")
//სხვა შემთხვევაში -> console.log("Invalid email or password")