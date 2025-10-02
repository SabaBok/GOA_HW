import { useState } from 'react'
import HW4 from 'HW4.jsx'
import HW5 from 'HW5.jsx'
import HW6 from 'HW6.jsx'

function App() {
	const [count, setCount] = useState(0)
	
	return (
		<>
			<HW4></HW4>
			<HW5></HW5>
			<HW6></HW6>
		</>
	)
}

export default App
