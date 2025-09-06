import React from 'react'

export default function Card({children,topMargin = false,marginAmount = 10}) {
	let styles = {
		marginTop: topMargin? `${MarginAmmount}px`:"0px"
	}
	return (
		<div className='card'>
			{children}
		</div>
	)
}
