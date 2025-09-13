import React, { useState } from 'react'

export default function HW8() {
	const [liked, setLiked] = useState(false)

	return (
		<div>
			<svg class={`w-7 h-7 ${liked?'text-red-500':'text-white'}`} fill="currentColor" viewBox="0 0 24 24" onClick={()=> setLiked(!liked)}>
				<path d="M12 21s-7-4.5-10-8.5S3 3 8 5.5c2 .9 4 3.5 4 3.5s2-2.6 4-3.5C21 3 24 8 22 12.5S12 21 12 21z" />
			</svg>
		</div>
	)
}
