import { Link } from "react-router-dom"
import { DataInfo } from '../FullPage'
import { useContext } from "react"

export default function Style() {
	const { filters, setFilters } = useContext(DataInfo)
	
	const changeFilter = (newStyle) => setFilters(prev => {return {...prev,dressStyle:newStyle}})
	
	return (
		<section className="mt-[100px] w-[90%] max-w-[1500px] flex flex-col items-center max-md:text-center bg-[#F0F0F0] rounded-[20px] py-10 max-md:px-1 px-5">
			<h1 className="font-[800] text-[32px]">BROWSE BY DRESS STYLE</h1>

			<div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 max-md:w-full w-[80%] min-h-[600px] max-lg:min-h-[1000px] max-w-[1500px] max-md:px-3 px-10 py-5 gap-10 max-md:justify-items-center">
				<Link to={'/filtering'} onClick={()=> changeFilter('Casual')} className="cursor-pointer bg-[url(/styles/casual.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></Link>
				<Link to={'/filtering'} onClick={()=> changeFilter('Formal')} className="cursor-pointer lg:col-start-2 lg:col-span-2 bg-[url(/styles/formal.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></Link>
				<Link to={'/filtering'} onClick={()=> changeFilter('Party')} className="cursor-pointer lg:col-start-1 lg:col-span-2 bg-[url(/styles/party.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></Link>
				<Link to={'/filtering'} onClick={()=> changeFilter('Gym')} className="cursor-pointer bg-[url(/styles/gym.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></Link>
			</div>
		</section>
	)
}
