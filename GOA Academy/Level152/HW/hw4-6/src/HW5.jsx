import React, { useState } from 'react'

export default function Description() {
	const [desc, setDesc] = useState('')
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					<textarea
						value={desc}
						onChange={e => setDesc(e.target.value)}
						placeholder="Write description..."
						rows={4}
					/>
				</label>
				<button type="submit">
					Submit
				</button>
			</form>
			<p>
				{submitted && desc.trim() ? `Your Description: ${desc}` : 'No Description'}
			</p>
		</div>
	)
}

//5) შექმენით Description კომპონენტი.
//შექმენით form ერთი textarea და submit ღილაკით, ასევე p ტეგი
//--> p ტეგში თავიდან უნდა ეწეროს No Description
//--> როცა მომხმარებელი ჩაწერს ტექსტს და დაასაბმითებს ამ p ტეგის მნიშვნელობა უნდა გახდეს `Your Description: {desc}`