import React, { useState } from 'react'

function Toast({ content, expiresIn = 3000, background = '#333' }) {
	const [visible, setVisible] = useState(true)

	if (typeof expiresIn === 'number' && expiresIn > 0) {
		setTimeout(() => setVisible(false), expiresIn)
	}

	if (!visible) return null

	const containerStyle = {
		position: 'fixed',
		bottom: '20px',
		right: '20px',
		background,
		color: '#fff',
		padding: '12px 16px',
		borderRadius: '8px',
		boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
		maxWidth: '320px',
		zIndex: 9999
	}

	return (
		<div style={containerStyle}>
			{content}
			<button
				onClick={() => setVisible(false)}
				style={{
					marginLeft: '12px',
					background: 'transparent',
					border: 'none',
					color: '#fff',
					cursor: 'pointer'
				}}
			>
				×
			</button>
		</div>
	)
}

export default function App() {
	const generateNumber = () => Math.floor(Math.random() * 100) + 1

	const [secret, setSecret] = useState(generateNumber())
	const [guess, setGuess] = useState('')
	const [message, setMessage] = useState('Guess a number between 1 and 100')
	const [toast, setToast] = useState(null)
	const [attempts, setAttempts] = useState(0)

	function handleSubmit(e) {
		e.preventDefault()
		const num = parseInt(guess, 10)
		if (isNaN(num)) {
			setMessage('Please enter a valid number!')
			return
		}

		setAttempts(a => a + 1)

		if (num === secret) {
			setMessage(`🎉 Correct! The number was ${secret}. Attempts: ${attempts + 1}`)
			setToast({
				content: 'You guessed it right! 🎯',
				background: '#2ecc71',
				expiresIn: 4000
			})
		} else if (num < secret) {
			setMessage('Too low! Try again.')
		} else {
			setMessage('Too high! Try again.')
		}
	}

	function handleRestart() {
		setSecret(generateNumber())
		setGuess('')
		setMessage('Guess a number between 1 and 100')
		setToast(null)
		setAttempts(0)
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '40px' }}>
			<h2>🎲 Number Guesser</h2>
			<p>{message}</p>
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					value={guess}
					onChange={e => setGuess(e.target.value)}
					placeholder="Enter your guess"
					style={{ padding: '8px', marginRight: '8px' }}
				/>
				<button type="submit" style={{ padding: '8px 12px' }}>Guess</button>
				<button type="button" onClick={handleRestart} style={{ padding: '8px 12px', marginLeft: '8px' }}>Restart</button>
			</form>
			{toast && <Toast content={toast.content} background={toast.background} expiresIn={toast.expiresIn} />}
		</div>
	)
}
