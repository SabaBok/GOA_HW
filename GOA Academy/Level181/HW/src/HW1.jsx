import React, { useRef } from 'react'

export default function HW1() {
	const p = useRef()
	
	return (
		<div>
			<button onClick={()=> p.current.style = 'color:red'}>Click me</button>
			<p ref={p}>some text</p>
		</div>
	)
}
//1) შექმენით button და ტექსტი. როცა ღილაკს დააწვები, ტექსტის ფერი შეიცვალოს.
//გამოიყენეთ useRef-ი ტექსტის ელემენტზე წვდომისთვის.