import React, { useState, useContext, useEffect } from 'react'
import { DataInfo } from '../FullPage'

export default function Filter() {
	const { data, FilteredData, setFilteredData } = useContext(DataInfo)
	const [colorShow, setColorShow] = useState(false)
	const [filters, setFilters] = useState({ price: [0, 100000], dressStyle: [], clothesType: [], colorList: [], size: '' })


	function getEveryColor(){
		let copyFilter = []
		let finishedFilter = []
		data.forEach(el => {
			copyFilter.push(...el.colorList)
		})

		for (let i of copyFilter) {
			if (!finishedFilter.includes(i)) finishedFilter.push(i)
		}
		return finishedFilter
	}
	function getEverySize() {
		let copyFilter = []
		let finishedFilter = []

		data.forEach((el, ind) => {
			copyFilter.push(...el.sizeList)
		})

		for (let i of copyFilter) {
			if (!finishedFilter.includes(i)) finishedFilter.push(i)
		}
		return finishedFilter
	}
	getEveryColor()
	getEverySize()

	useEffect(() => {
		console.log(filters)
	}, [filters])

	return (
		<section className='w-[295px] min-h-[1000px] border border-[#0000001A] p-5 rounded-[20px] flex flex-col gap-6'>
			<div className='flex flex-col gap-6'>
				<div className='flex justify-between items-center'>
					<h2 className='text-[20px] font-[700]'>Filter</h2>

					<i className="fa-solid fa-sliders text-[#00000066] cursor-pointer text-[19px] -rotate-90"></i>
				</div>
				<hr className='border-[#0000001A]' />
				<ul className='flex flex-col gap-[14px] font-[400]'>
					{
						['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((el, ind) => (
							<li className={`cursor-pointer duration-200 hover:text-[#000000be] ${filters.clothesType == el ? 'text-black font-[600]' : 'text-[#00000099]'}`} key={ind} onClick={() => setFilters({ ...filters, clothesType: el })}>{el}</li>
						))
					}
				</ul>
			</div>
			<hr className='border-[#0000001A]' />
			<div>
				<h2>Price</h2>

				<div className='border border-black'>
					<input type="number" className='border border-[border-[#0000001A]]' />
					<input type="number" className='border border-[border-[#0000001A]]' />
				</div>
			</div>
			<hr className='border-[#0000001A]' />
			<div className='flex flex-col gap-3'>
				<div className='flex justify-between items-center'>
					<h2 className='font-[700]'>Colors</h2>

					<i className={`fa-solid ${!colorShow ? 'fa-angle-down' : 'fa-angle-up'} cursor-pointer active:rotate-180 duration-100`} onClick={() => setColorShow(prev => !prev)}></i>
				</div>
				<div className={`flex gap-4 flex-wrap overflow-y-hidden ${!colorShow ? 'max-h-[80px]' : 'max-h-[500px]'} duration-300`}>
					{getEveryColor().map((el, ind) => (
						<div 
							onClick={() => {
								if(filters.colorList.includes(el)){
									let list = [...filters.colorList]
									list.splice(filters.colorList.indexOf(el),1)
									setFilters({...filters,colorList:list})
								}
								else setFilters({...filters, colorList: [...filters.colorList, el]})
							}} 
							key={ind} 
							className={` min-w-[30px] h-[30px] rounded-full shadow cursor-pointer border border-black flex items-center justify-center`} 
							style={{ background: el }}
						>
							<i className={`fa-solid fa-check text-white ${filters.colorList.includes(el) ? 'opacity-100' : 'opacity-0'}`}></i>
						</div>
					))}
				</div>
			</div>
			<hr className='border-[#0000001A]' />
			<div className='flex flex-col gap-4'>
				<h2 className='font-[700]'>Size</h2>

				<div className='flex flex-wrap gap-2 items-start'>
					{
						getEverySize().map((el, ind) => (
							<p onClick={() => setFilters({ ...filters, size: el })} className={`${filters.size == el ? 'bg-black text-white' : 'bg-[#F0F0F0] text-[#00000099]'} px-[15px] py-[5px] rounded-full cursor-pointer duration-300`} key={ind}>{el}</p>
						))
					}
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h2 className='font-[700]'>Dress Style</h2>

				<div className='flex flex-col gap-2'>
					{
						['Casual', 'Formal', 'Party', 'Gym'].map((el, ind) => (
							<p key={ind} onClick={() => setFilters({ ...filters, dressStyle: el })} className={`${filters.dressStyle == el ? 'text-black' : 'text-[#00000099]'}  font-[400] cursor-pointer`}>{el}</p>
						))
					}
				</div>
			</div>

			<button className='bg-black text-white py-3 w-full rounded-full cursor-pointer'>Apply Filter</button>
		</section>
	)
}
