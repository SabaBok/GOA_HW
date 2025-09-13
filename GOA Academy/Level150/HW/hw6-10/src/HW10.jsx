import React, { useState } from 'react'

export default function HW10() {
	const [open,setOpen] = useState(false)
	return (
		<div>
			<div className={open?'block':'hidden'}>
				<p>This Is Acordion</p>
				<h2>Yes Man</h2>
			</div>

			<button onClick={()=> setOpen(!open)}>{open?'Close Acordion':'Open Acordion'}</button>
		</div>
	)
}
