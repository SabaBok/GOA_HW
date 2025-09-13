import { useState } from 'react'
import HW6 from './HW6'
import HW7 from './HW7'
import HW9 from './HW9'
import HW10 from './HW10'
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<HW6 /> <hr />
			<HW7 /> <hr />	
			<HW9 /> <hr />
			<HW10 />
		</>
	)
}

export default App
