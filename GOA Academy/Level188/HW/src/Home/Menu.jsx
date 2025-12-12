import { useState, useEffect, useContext, memo } from "react"
import {FoodItems} from '../FullPage'

const FoodItem = memo(({ el }) => (
	<div className="group bg-[#ffffff21] p-5 rounded-2xl flex flex-col justify-between items-center gap-3 h-[360px] hover:h-[400px] duration-300 overflow-hidden">
		<img src={`/images/Foods/${el.name}.jpg`} alt={el.name} className="w-[200px] h-[290px] rounded-lg flex-none"/>
		<p className="text-center">{el.name}</p>
		<p className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">{el.price}₾</p>
	</div>
))

export default function Menu() {
	const food = useContext(FoodItems)

	const [curPage, setCurPage] = useState(1)
	const [finalList, setFinalList] = useState([])

	function paginate(list) {
		if (!list) return []

		let result = []
		let temp = []

		for (let i = 0; i < list.length; i++) {
			temp.push(list[i])
			if (temp.length === 4) {
				result.push(temp)
				temp = []
			}
		}

		if (temp.length > 0) result.push(temp)

		return result
	}

	useEffect(() => {
		const p = paginate(food)
		setFinalList(p)
		setCurPage(0)
	}, [])

	if (!finalList[curPage]) return <p className="text-center">Loading...</p>

	return (
		<section className='w-full flex flex-col gap-10 items-center text-center'>
			<h2 className="font-bold text-[40px]">Menu</h2>

			<div id='menu' className="flex gap-20 h-[400px]">{finalList[curPage].map((el,ind) => <FoodItem key={ind} el={el} />)}</div>

			<div className="flex gap-2 justify-between items-center w-full max-w-[200px]">
				<i className="fa-solid fa-arrow-left cursor-pointer" onClick={() => setCurPage(prev => prev - 1 >= 0 ? prev - 1 : prev)}></i>
				<div className="flex gap-4" >
					{
						finalList.map((_, ind) => (
							<div key={ind} className={`${ind == curPage ? 'bg-gray-100' : 'bg-gray-400'} rounded-full w-2.5 h-2.5`}></div>
						))
					}
				</div>
				<i className="fa-solid fa-arrow-right cursor-pointer" onClick={() => setCurPage(prev => prev + 1 < finalList.length ? prev + 1 : prev)}></i>
			</div>
		</section>
	)
}
