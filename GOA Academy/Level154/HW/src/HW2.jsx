import React, { useState } from 'react'
import HW1 from 'HW1.jsx'

export default function Username() {
	const [username, setUsername] = useState('')
	const [toast, setToast] = useState(null)

	function handleSubmit(e) {
		e.preventDefault()

		if (!username.trim()) {
			setToast({
				content: 'Username cannot be empty',
				background: '#e74c3c',
				expiresIn: 3000
			})
			return
		}

		if (/[^a-zA-Z]/.test(username)) {
			setToast({
				content: 'Username must contain only letters',
				background: '#e74c3c',
				expiresIn: 3000
			})
			return
		}

		setToast({
			content: 'Username is valid! 🎉',
			background: '#2ecc71',
			expiresIn: 3000
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{toast && <HW1 content={toast.content} background={toast.background} expiresIn={toast.expiresIn} />}
		</div>
	)
}
