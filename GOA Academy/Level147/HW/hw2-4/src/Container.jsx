import React from 'react'

export default function Container({children}) {
	return (
		<div>
			<p>hello this is container</p>

			<div>
				{children}
			</div>
		</div>
	)
}
