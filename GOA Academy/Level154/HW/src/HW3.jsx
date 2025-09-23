import React, { useState } from 'react'
import HW1 from './HW1'

export default function FontSizeAdjuster() {
	const [size, setSize] = useState(16)
	const [input, setInput] = useState('')
	const [toast, setToast] = useState(null)

	function handleSubmit(e) {
		e.preventDefault()
		const num = parseInt(input, 10)

		if (isNaN(num) || num < 10 || num > 100) {
			setToast({
				content: 'Font size must be between 10 and 100',
				background: '#e74c3c',
				expiresIn: 3000
			})
			return
		}

		setSize(num)
	}

	function handleReset() {
		setSize(16)
		setInput('')
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder="Enter font size (10-100)"
				/>
				<button type="submit">Submit</button>
				<button type="button" onClick={handleReset}>Reset</button>
			</form>
			<p style={{ fontSize: `${size}px` }}>This is a sample text with adjustable font size.</p>
			{toast && <HW1 content={toast.content} background={toast.background} expiresIn={toast.expiresIn} />}
		</div>
	)
}
