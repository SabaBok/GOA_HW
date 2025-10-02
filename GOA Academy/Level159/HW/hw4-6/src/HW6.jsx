import React, { useEffect, useState } from 'react'

export default function HW6() {
	const [temp,setTemp] = useState(0)
	const [city,setCity] = useState('')
	useEffect(()=>{
		temp>35 && city.length>=3?console.log('heat alert in ',city):temp<5?console.log('cold alert in ',city):null
	},[temp,city])
	return (
		<form action="" onSubmit={e=>{
			e.preventDefault()
			setTemp(e.target.temp.value)
			setCity(e.target.city.value)			
		}}>
			<input type="number" placeholder='Temperature' name='temp'/>
			<input type="text" placeholder='city' name='city'/>
		</form>
	)
}
//6) შექმენით ორი state: temperature (რიცხვი), city (სტრინგი)
//შექმენით ორი input -> ერთში ტემპერატურას შევიყვანთ მეორეში ქალაქის სახელს
//შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
//თუ temperature > 35 და city.length >= 3 -> console.log("Heat Alert in", city)
//თუ temperature < 5 -> console.log("Cold Alert in", city)
//სხვა შემთხვევაში -> console.log("Weather normal")