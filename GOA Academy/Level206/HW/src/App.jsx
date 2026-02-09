import { useEffect, useState } from 'react'

function App() {
	const [todo,setTodo] = useState([])
	const [accs,setAccs] = useState([])
	
	useEffect(() => {
		async function getTodo() {
			let file = await fetch('todo-list.txt')
			let res = await file.text()
			setTodo(res.split("\n").slice(0,-1))
		}
		async function getAcc() {
			let file = await fetch('accounts.txt')
			let res = await file.text()	
			setAccs(res.split("\n").slice(0,-1))
		}
		
		getTodo()
		getAcc()
	},[])
	
	return (
		<section>
			<h1>accounts</h1>
			<ul>{accs.map((el, ind) => <li key={ind}>{el}</li>) }</ul>
			<br />
			<h1>tasks</h1>
			<ul>{todo.map((el, ind) => <li key={ind}>{el}</li>) }</ul>
		</section>
	)
}

export default App
