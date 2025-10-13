import { useState } from 'react'


function App() {
	const [curShow,setCurShow] = useState('')	

	function rendering(){
		switch(curShow){
			case 'home':
				return <p>home</p>
			case 'categories':
				return <p>categories</p>
			case 'about':
				return <p>about</p>
		}
	}	
	return (
		<div className='flex flex-col gap-10 w-full items-center'>
			<ul className='flex gap-5'>
				<li onClick={e=>setCurShow(e.target.textContent)}>home</li>
				<li onClick={e=>setCurShow(e.target.textContent)}>categories</li>
				<li onClick={e=>setCurShow(e.target.textContent)}>about</li>
			</ul>

			<div>
				{rendering()}
			</div>
		</div>
	)
}

export default App
