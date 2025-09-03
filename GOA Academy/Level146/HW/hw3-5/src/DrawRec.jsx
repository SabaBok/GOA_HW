import React from 'react'

export default function DrawRec(prop) {
	const style = {
		color:prop.color,
		width:prop.width,
		height:prop.height
	}
	return (
		<div style={style}></div>
	)
}
