import React from 'react'
import Car from './Car'

export default function CarList() {
	let carList = [
		{brand:'bmw',model:'X5',price:50000,desc:'New car',img:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2024-bmw-x5-m.jpg'},
		{brand:'audi',model:'Q7',price:60000,desc:'New car',img:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2024-bmw-x5-m.jpg'},
		{brand:'mercedes',model:'GLS',price:70000,desc:'New car',img:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2024-bmw-x5-m.jpg'},
		{brand:'volvo',model:'XC90',price:80000,desc:'New car',img:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2024-bmw-x5-m.jpg'},
	]
	
	return (
		<div>
			<Card img='https://cdn.motor1.com/images/mgl/0AN2V/s1/2024-bmw-x5-m.jpg' brand='bmw' model='X5' price={50000}></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>
	)
}
