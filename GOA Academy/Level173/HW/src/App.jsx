import { useState } from 'react'
import {HW2} from './HW2/HW2'
import HW1 from './HW1'
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<HW1></HW1>
			<HW2></HW2>
		</>
	)
}

export default App
