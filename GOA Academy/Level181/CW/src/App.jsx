import { useRef } from 'react'
import './App.css'

function App() {
	const inputRef = useRef(null)
	const counterRef = useRef(null)
	const paragraphRef = useRef(null)

	function handleChange() {
		const value = inputRef.current.value
		counterRef.current.textContent = value.length
		paragraphRef.current.textContent = value
	}

	return (
		<div>
			<div>
				<input
					type="text"
					ref={inputRef}
					onChange={handleChange}
					placeholder="type here"
				/>
				<p ref={paragraphRef}></p>
			</div>
			<div>
				<p>
					Count: <span ref={counterRef}>0</span>
				</p>
			</div>
		</div>
	)
}

export default App
//level 181:
//   1) შექმენით ინფუთი რომელშიც ინფორმაციის შეტანის დროს ეგ ინფორმაცია გამოჩნდება სხვა პარაგრაფში, 
// 	 	პლიუს ერთი ქაუნთერიც გააკეთეთ გვერძე, ორივეში გამოიყენეთ useRef