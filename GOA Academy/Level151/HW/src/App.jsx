import { useState } from 'react'

function App() {
	const [input, setInput] = useState('')
	const [tasks, setTasks] = useState([])

	function addTask(e){
		e.preventDefault()
		setTasks([input,...tasks])
		setInput('')
	}
	return (
		<div className='w-full h-screen flex justify-center gap-25 items-center flex-col'>
			<h1>To-Do List</h1>

			<section className='flex flex-col gap-2.5'>
				<form onSubmit={addTask} className='p-2 bg-gray-200 flex flex-col gap-5'>
					<input type="text" placeholder='Enter task' name='task' className='text-center' onChange={e => setInput(e.target.value)} value={input}/>
					<button type='submit' className='p-2 bg-amber-600 text-white'>Create</button>
				</form>

				<div className='flex flex-col gap-7 bg-gray-300 w-full items-center rounded-sm py-3 px-1'>
					{tasks.map((el,ind) => <p key={ind} className='border-2 w-full text-center border-amber-500 rounded-md'>{el}</p> )}
				</div>
			</section>
		</div>
	)
}

export default App
