import React from 'react'
import { useState } from 'react'

export default function App() {
	const [country,setCountry] = useState('')
	return (
		<div>
			<form action="" onSubmit={e=>{
				e.preventDefault()
				setCountry(e.target.country.value.trim())
			}}>
				<label htmlFor="">what is your country</label>
				<input type="text" name='country'/>
			</form>

			<p>{country}</p>
		</div>
	)
}

//შექმენით MyForm კომპონენტი, რომელიც იქნება რაღაცა ფორმა. მომხმარებელს მოთხოვეთ, რომ შემოიყვანოს, რაღაცა ინფორმაცია, ვთქვა, 
// მისი საყვარელი ხილი, მანქანა, ქვეყანა და ა.შ. onSubmit ზე დაარენდერეთ მომხმარებლის შემოყვანილი მნიშვნელობა 
