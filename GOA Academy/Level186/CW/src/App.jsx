import { useState,useMemo } from "react"

function App() {
	const [count,setCount] = useState(0)	
	const [count2,setCount2] = useState(0)	

	const calculatedInfo = useMemo(()=> calculate(count),[count])
	function calculate(count){
		for(let i = 0; i<100000;i++) i++
		return ((count*3.14159)/2.18745)%13
	}

	function calculate2(count){
		for(let i = 0; i<100000;i++) i++
		return ((count*3.14159)/2.18745)%13
	}
	return (
		<>
			<div>
				<button onClick={()=> setCount(prev => prev + 1)}>Click</button>
				<h1>Result : {calculatedInfo}</h1>
			</div>

			<div>
				<button onClick={()=> setCount2(prev => prev + 1)}>Click</button>
				<h1>Result : {calculate2(count2)}</h1>
			</div>
		</>
	)
}

export default App
