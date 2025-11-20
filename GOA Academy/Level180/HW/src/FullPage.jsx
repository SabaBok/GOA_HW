import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { createContext, useEffect, useState } from 'react'

export const DataInfo = createContext()
export function FullPage() {
	const [data, setData] = useState([])
	const [filteredData,setFilteredData] = useState(data)
	

	useEffect(()=>{
		async function getData() {
			const response = await fetch('/data2.json')
			const responseData = await response.json()
			setData(await responseData)
		}
		getData()
	},[])
	useEffect(()=> {if(data.length > 0) setFilteredData(data)},[data])

	return (
		<DataInfo.Provider value={ {data,filteredData,setFilteredData} }>
			<section className='flex flex-col min-h-screen h-full gap-10'>
				<Header></Header>

				<Outlet></Outlet>

				<Footer></Footer>
			</section>
		</DataInfo.Provider>
	)
}
