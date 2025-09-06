import React from 'react'

export default function User({name,bio = 'No Bio',age = 18}) {
	return (
		<div>
			<p>Name: {name}</p>
			<p>Bio: {bio}</p>
			<p>Age: {age}</p>
		</div>
	)
}
