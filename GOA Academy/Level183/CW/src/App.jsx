import { useReducer,useState } from 'react'

function App() {
	const [mult,setMult] = useState(2)
	const [div,setDiv] = useState(2)
	const [score, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'plus': return { count: state.count + 1 };
			case 'minus': return { count: state.count - 1 };
			case 'times': {setMult(2); return { count:state.count*mult }}
			case 'divide': {setDiv(2); return { count:state.count/div }}
			default: return state
		}
	}, { count: 0 })

	return (
		<>
			<div>
				<button onClick={()=> setMult(prev=>prev+1)}>add to multiplication</button>
				<button onClick={()=> setDiv(prev=>prev+1)}>add to division</button>
			</div>

			<br /><br />

			<div style={{display:'flex', gap:'30px', alignItems:'center'}}>
				<button onClick={() => dispatch({ type: 'minus' })}>minus</button>
				<p>{score.count}</p>
				<button onClick={() => dispatch({ type: 'plus' })}>plus</button>
			</div>

			<br /><br />

			<div>
				<button onClick={()=> dispatch({type:'times'})}>times {mult}</button>
				<button onClick={()=> dispatch({type:'divide'})}>divided by {div}</button>
			</div>
		</>
	)
}

export default App
