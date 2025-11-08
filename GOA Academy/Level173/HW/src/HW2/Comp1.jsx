import React from 'react'
import { useContext } from 'react'
import { InfoData } from './HW2'

export default function Comp1() {
	const [data,setData] = useContext(InfoData)
	
	return (
		<div>
			<p>Comp1</p>
			<p>{data}</p>
			<button onClick={()=>setData('Comp1')}>Comp1</button>
		</div>
	)
}
