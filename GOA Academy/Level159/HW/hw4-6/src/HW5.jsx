import React, { useEffect, useState } from 'react'

export default function HW5() {
	const [count,setCount] = useState(0)
	const [isActive,setIsActive] = useState(false)
	useEffect(()=>{
		count>10 && isActive ? console.log('High Activity'):
		count<=10 && !isActive ? console.log('normal state'):null
	},[count,isActive])
	return (
		<section>
			<button onClick={()=>setCount(count+1)}>increase count: {count}</button>
			<button onClick={()=>setIsActive(!isActive)}>turn {isActive?'off':'on'} active</button>
		</section>
	)
}
//5) შექმენით ორი state: count და isActive (boolean)
//ერთი ღილაკით გაზარდეთ count, მეორე ღილაკით შეცვალეთ isActive
//შექმენით useEffect, რომელიც რეაგირებს ორივე state-ზე
//თუ count > 10 და isActive === true -> console.log("High activity")
//თუ count <= 10 და isActive === false -> console.log("Low activity")
//სხვა შემთხვევაში -> console.log("Normal state")