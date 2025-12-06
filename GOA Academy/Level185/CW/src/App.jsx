import React, { useState, useCallback } from 'react'

// შვილი კომპონენტი
const Child = React.memo(({ onIncrement }) => {
	console.log('Child render')
	return <button onClick={onIncrement}>Increment Parent State</button>
})

const Parent = () => {
	const [count, setCount] = useState(0)
	const [otherState, setOtherState] = useState(false)

	const handleIncrement = useCallback(() => setCount(prev => prev + 1), [])

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
			<Child onIncrement={handleIncrement} />
		</div>
	)
}

export default Parent
