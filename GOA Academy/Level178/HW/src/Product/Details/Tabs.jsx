import React, { useState } from 'react'
import Ratings from './Ratings'
import ProdDets from './ProdDets'
import FaQ from './FaQ'

export default function Tabs({prod}) {
	const [activeTab, setActiveTab] = useState(1) //0-dets 1-reviews 2-faq
	
	function renderContent(){
		switch (activeTab) {
			case 0:
				return <ProdDets prod={prod}/>; break;
			case 1:
				return <Ratings prod={prod}/>; break;
			case 2:
				return <FaQ prod={prod}/>; break;
			default:
				return null
		}
	}
	return (
		<section className='w-full flex flex-col gap-10'>
			<div className='flex justify-between text-center items-center w-full px-4 border-b border-gray-200'>
				<p className={`py-3 flex-1 text-gray-500 font-medium hover:text-gray-700 transition duration-300 ease-in-out border-b-2 ${activeTab == 0?'border-black':'border-transparent'} cursor-pointer`} onClick={()=> setActiveTab(0)}>Product Details</p>
				<p className={`py-3 flex-1 text-gray-500 font-medium hover:text-gray-700 transition duration-300 ease-in-out border-b-2 ${activeTab == 1?'border-black':'border-transparent'} cursor-pointer`} onClick={()=> setActiveTab(1)}>Rating & Reviews</p>
				<p className={`py-3 flex-1 text-gray-500 font-medium hover:text-gray-700 transition duration-300 ease-in-out border-b-2 ${activeTab == 2?'border-black':'border-transparent'} cursor-pointer`} onClick={()=> setActiveTab(2)}>FAQs</p>
			</div>

			{renderContent()}
		</section>
	)
}
