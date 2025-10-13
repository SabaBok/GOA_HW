import { use, useState } from 'react'
import Main from './mainRight/Main.jsx'
import Watch from './Watch/Watch.jsx'

function App() {
	const [info,setInfo] = useState({
		color:'black',
		showingTime:true,
	})
	return (
		<section className='h-full flex flex-col items-center gap-25'>	
			<header className='bg-[#212134] flex items-center justify-center py-3 pb-5 w-full'>
				<img src="/Amazon-logo.png" alt="" className='w-35'/>
			</header>
			<main className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center gap-30 md:px-25 min-w-[300px] max-w-[1200px] w-[90%]'>
				<Watch color={info.color} showingTime={info.showingTime}></Watch>
				<Main setInfo={setInfo}></Main>
			</main>
		</section>
	)
}

export default App
