import { useRef } from 'react'

export default function HW3() {
	const p = useRef()

	function toggleText(){
		if (p.current.style.display === 'none') {
			p.current.style.display = 'block'
		} else {
			p.current.style.display = 'none'
		}
	}

	return (
		<div>
			<p ref={p}>text</p>
			<button onClick={toggleText}>Click me</button>
		</div>
	)
}
//3) შექმენით ტექსტი და button. ღილაკზე დაჭერისას ტექსტი გაჩნდეს და გაქრეს. გამოიყენეთ useRef