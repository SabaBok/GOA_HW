import React, { useState } from 'react'

export default function Mood() {
	const [mood, setMood] = useState('')
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
	}

	function renderMood() {
		if (!submitted) return 'Your Mood: Unknown🤷‍♂️'
		switch (mood.toLowerCase()) {
			case 'happy':
				return 'Your Mood: 😀'
			case 'sad':
				return 'Your Mood: 🙁'
			case 'scared':
				return 'Your Mood: 😰'
			case 'angry':
				return 'Your Mood: 😡'
			default:
				return 'Your Mood: Unknown🤷‍♂️'
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Enter your mood:
					<input
						type="text"
						value={mood}
						onChange={e => setMood(e.target.value)}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
			<p>{renderMood()}</p>
		</div>
	)
}
//6) შექმენით Mood კომპონენტი
//მომხმარებელს მოთხოვეთ შემოიყვანოს, თუ როგორ ხასიათზეა
//--> თუ happy მაშინ დაარენდერეთ `Your Mood: 😀`
//--> თუ sad მაშინ დაარენდერეთ `Your Mood: 🙁`
//--> თუ scared მაშინ დაარენდერეთ `Your Mood: 😰`
//--> თუ angryმაშინ დაარენდერეთ `Your Mood: 😡`
//ყველა სხვა შემთხვევაში 'Your Mood: Unknown🤷‍♂️`