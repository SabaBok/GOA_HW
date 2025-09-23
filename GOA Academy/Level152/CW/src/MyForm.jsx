import React from 'react'
import { useState } from 'react'

export default function MyForm() {
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
