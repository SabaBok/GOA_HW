import React, { useState } from 'react'

export default function HW6() {
	const [numb,setNumb] = useState(1)
	return (
		<div>
			<p>{numb}</p>
			<button onClick={()=> setNumb(numb*2)}>click me</button>
		</div>
	)
}
