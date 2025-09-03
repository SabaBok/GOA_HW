import React from 'react'

export default function Product(prop) {
	return (
		<div>
			<p>name: <span>{prop.name}</span></p>
			<p>price: <span>{prop.price}</span></p>
			<img src={prop.img} alt="" />
		</div>
	)
}
