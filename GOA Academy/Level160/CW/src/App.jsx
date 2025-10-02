import { use, useState } from 'react'
import Main from './mainRight/Main.jsx'
import Watch from './Watch/Watch.jsx'

function App() {
	const [info,setInfo] = useState({
		color:'black',
		showingTime:true,
	})
	return (
		<section className='h-full flex flex-col gap-25'>	
			<header className='bg-[#212134] flex items-center justify-center py-3 pb-5 w-full'>
				<img src="/Amazon-logo.png" alt="" className='w-35'/>
			</header>
			<main className='flex w-full justify-center gap-30 px-25'>
				<Watch color={info.color} showingTime={info.showingTime}></Watch>
				<Main setInfo={setInfo}></Main>
			</main>
		</section>
	)
}

export default App
