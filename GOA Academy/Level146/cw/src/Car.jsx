import React from 'react'

export default function Car(info) {
	return (
		<div>
			<img src={info.img} alt="" />
			<p>Brand: <span>{info.brand}</span></p>
			<p>Model: <span>{info.model}</span></p>
			<p>Price: <span>{info.price}</span></p>
			<p>Desc: <span>{info.desc}</span></p>
		</div>
	)
}
