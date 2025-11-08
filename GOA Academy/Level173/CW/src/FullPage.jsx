import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { createContext, useState } from 'react'
import { useEffect } from 'react'

const UserContext = createContext()
function FullPage() {
	const [data, setData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/clotheData.json')
			const data = await response.json()
			setData(data)
		}
		fetchData()
	}, [])
	
	return (
		<UserContext.Provider value={[data, setData]}>
			<section className='flex flex-col min-h-screen h-full gap-10'>
				<Header></Header>

				<Outlet></Outlet>

				<Footer></Footer>
			</section>
		</UserContext.Provider>
	)
}
export {UserContext,FullPage}