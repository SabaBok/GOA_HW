import React, { useState } from 'react'

export default function App() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		age: ''
	})

	function handleChange(e) {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	function handleSubmit(e) {
		e.preventDefault()
		console.log('Form Data:', formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					First Name:
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Last Name:
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Age:
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={handleChange}
					/>
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}
