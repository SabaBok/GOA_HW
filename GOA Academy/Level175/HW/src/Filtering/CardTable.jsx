import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { DataInfo } from '../FullPage'
import { Link } from 'react-router-dom'

export default function CardTable() {
	const {data} = useContext(DataInfo)
	const [filterData, setFilterData] = useState(data)
	const [curPage, setCurPage] = useState(0)

	function getFilteredData() {
		if (!data) return

		let list = []
		let tempList = []

		for (let i = 0; i < data.length; i++) {
			tempList.push(data[i])
			if (tempList.length === 9) {
				list.push(tempList)
				tempList = []
			}
		}

		if (tempList.length > 0) list.push(tempList)

		setFilterData(list)
	}

	useEffect(() => {
		if (data) {
			getFilteredData()
		}
	}, [data])

	return (
		<section className='w-full flex flex-col gap-x-4 gap-y-7 items-center'>
			<div className='flex justify-between w-full'>
				<h3 className='text-[25px] font-[700]'>Casual</h3>

				<p className='text-[#00000099]'>Showing 1-10 of 100 Products <span>Sort By: <span className='font-[700] text-black'>Most Popular</span></span></p>
			</div>

			<div className='w-full grid grid-cols-3 gap-x-5 gap-y-7 max-lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-center justify-items-center'>
				{
					//console.log(filterData)
					filterData.length > 0 ?
						filterData[curPage].map((el, ind) => (
							<Link key={ind} to={`/product/${el.id}`}><Card prod={el} /></Link>
						))
						: null
				}
			</div>

			<div className='flex justify-between items-center gap-5'>
				<button onClick={()=> setCurPage(prev=> prev > 0 ? prev-1 : 0)} className='duration-200 hover:bg-[#00000014] p-3 cursor-pointer rounded-lg'>Previous</button>

				{
					<div className='flex gap-4'>
						{
							filterData.map((el,ind)=>{
								return <p 
									className={`${ind == curPage?'bg-[#0000000F]':null} cursor-pointer px-3 py-1 flex justify-center items-center rounded-lg duration-200 hover:bg-[#00000014]`}
									onClick={()=> setCurPage(ind)}
									key={ind}
									>{ind+1}</p>
							})
						}
					</div>
				}

				<button onClick={()=> setCurPage(prev=> prev+1 < filterData.length? prev+1 : prev)} className='duration-200 hover:bg-[#00000014] p-3 cursor-pointer rounded-lg'>Next</button>
			</div>
		</section>
	)
}
