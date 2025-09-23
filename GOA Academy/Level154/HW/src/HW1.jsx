import React, { useState } from 'react'

export default function Toast({ content, expiresIn = 3000, background = '#333' }) {
	const [visible, setVisible] = useState(true)

	if (expiresIn > 0) {
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

	const closeStyle = {
		marginLeft: '12px',
		background: 'transparent',
		border: 'none',
		color: '#fff',
		cursor: 'pointer',
		fontSize: '16px'
	}

	return (
		<div style={containerStyle} role="status" aria-live="polite">
			<span>{content}</span>
			<button style={closeStyle} onClick={() => setVisible(false)} aria-label="Close">×</button>
		</div>
	)
}