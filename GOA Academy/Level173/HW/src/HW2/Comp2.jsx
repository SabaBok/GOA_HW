import React from 'react'
import { useContext } from 'react'
import { InfoData } from './HW2'

export default function Comp2() {
	const [data,setData] = useContext(InfoData)
	
	return (
		<div>
			<p>Comp2</p>
			<p>{data}</p>
			<button onClick={()=>setData('Comp2')}>Comp2</button>
		</div>
	)
}
