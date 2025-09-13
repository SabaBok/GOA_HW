import { useState } from 'react'

function App() {
	const [input, setInput] = useState('')
	const [tasks, setTasks] = useState([])

	function addTask(e){
		e.preventDefault()
		input.trim()==''?alert('type in a task'):setTasks([input,...tasks])
		setInput('')
	}
	return (
		<div className='w-full h-screen flex justify-center gap-10 items-center flex-col'>
			<h1>To-Do List</h1>

			<section className='flex flex-col gap-2.5  w-[60%] min-w-[340px] max-w-[800px] mx-auto'>
				<form onSubmit={addTask} className='p-2 bg-gray-700 flex flex-col gap-5'>
					<input type="text" placeholder='Enter task' name='task' className='text-center' onChange={e => setInput(e.target.value)} value={input}/>
					<button type='submit' className='p-2 bg-amber-600 text-white'>Create</button>
				</form>

				<div className='flex flex-col gap-7 bg-gray-600 w-full items-center rounded-sm py-3 px-1'>
					{tasks.map((el,ind) => (
						<div key={ind} className='w-full px-5 py-2 flex justify-between items-center bg-gray-500 rounded-[7px]'>
							<p className=''>{el}</p> 

							<div className='flex gap-3'>
								<button className='p-1 px-3 bg-purple-600 text-white rounded-sm cursor-pointer' onClick={()=>{
									let newTasks = [...tasks]
									let newText = prompt('enter new task')
									newTasks[ind] = newText
									setTasks(newTasks)
								}}>Edit</button>
								<button className='p-1 bg-red-600 text-white rounded-sm cursor-pointer' onClick={()=>{
									let newTasks = [...tasks]
									newTasks.splice(ind,1)
									setTasks(newTasks)
								}}>Remove</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default App
