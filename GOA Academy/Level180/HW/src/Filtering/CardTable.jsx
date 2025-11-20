import { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { DataInfo } from '../FullPage'
import { Link } from 'react-router-dom'

export default function CardTable() {
	const { filteredData } = useContext(DataInfo)

	const [pages, setPages] = useState([])
	const [curPage, setCurPage] = useState(0)

	function paginate(list) {
		if (!list) return []

		let result = []
		let temp = []

		for (let i = 0; i < list.length; i++) {
			temp.push(list[i])
			if (temp.length === 9) {
				result.push(temp)
				temp = []
			}
		}

		if (temp.length > 0) result.push(temp)

		return result
	}

	useEffect(() => {
		const p = paginate(filteredData)
		setPages(p)
		setCurPage(0)
	}, [filteredData])

	if (!pages[curPage]) return <p>Loading...</p>

	return (
		<section className='w-full flex flex-col gap-x-4 gap-y-7 items-center'>
			<div className='flex justify-between w-full'>
				<h3 className='text-[25px] font-[700]'>Casual</h3>
				<p className='text-[#00000099]'>Showing {filteredData.length} Products</p>
			</div>

			<div className='w-full grid grid-cols-3 gap-x-5 gap-y-7 max-lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-items-center'>
				{
					pages[curPage].map((el, ind) => (
						<Link key={ind} to={`/product/${el.id}`}>
							<Card prod={el} />
						</Link>
					))
				}
			</div>

			<div className='flex justify-between items-center gap-5'>
				<button
					onClick={() => setCurPage(prev => prev > 0 ? prev - 1 : 0)}
					className='duration-200 hover:bg-[#00000014] p-3 cursor-pointer rounded-lg'
				>
					Previous
				</button>

				<div className='flex gap-4'>
					{
						pages.map((_, ind) => (
							<p
								key={ind}
								className={`${ind === curPage ? 'bg-[#0000000F]' : ''} cursor-pointer px-3 py-1 flex justify-center items-center rounded-lg duration-200 hover:bg-[#00000014]`}
								onClick={() => setCurPage(ind)}
							>
								{ind + 1}
							</p>
						))
					}
				</div>

				<button
					onClick={() => setCurPage(prev => prev + 1 < pages.length ? prev + 1 : prev)}
					className='duration-200 hover:bg-[#00000014] p-3 cursor-pointer rounded-lg'
				>
					Next
				</button>
			</div>
		</section>
	)
}
