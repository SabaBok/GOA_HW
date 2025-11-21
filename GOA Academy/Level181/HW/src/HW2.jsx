import React, { useRef } from 'react'

export default function HW2() {
	const input = useRef()
	
	return (
		<form onSubmit={e=> e.preventDefault()}>
			<input type="text" ref={input}/>
			<button type='submit' onClick={()=> console.log(input.current.value)}>Click me</button>
		</form>
	)
}
//2) შექმენით input ველი და button. როცა  button დააჭერ, input-ის მნიშვნელობა console-ში დაიბეჭდოს.
//გამოიყენეთ useRef  input-ის წვდომისთვის