import { useState } from 'react'

function App() {
	const [name, setName] = useState('')

	function setFullname(){
		setName('saba bokuchava')
	}
	return (
		<>
			<button onClick={setFullname}>click me</button>
			<p>{name}</p>
		</>
	)
}

export default App
