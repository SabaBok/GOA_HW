import React, { useState } from 'react'

export default function HW7() {
	const initText = 'ragaca teqsti aris es'
	const [text,setText] = useState(initText)
	
	return (
		<div>
			<p>{text}</p>
			<button onClick={()=>{
				text.toLowerCase() === text ? setText(text.toUpperCase()) : setText(text.toLowerCase())
			}}>click me</button>
		</div>
	)
}
