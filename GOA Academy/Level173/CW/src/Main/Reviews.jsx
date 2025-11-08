import { useState, useEffect } from 'react'
import Review from '../Components/Review'

export default function Reviews({ data }) {
	const [scrollX, setScrollX] = useState(0)
	const [reviews, setReviews] = useState([])
	useEffect(() => {
		const el = document.querySelector("#scroll")
		const max = el.scrollWidth - el.clientWidth

		if (scrollX < 0) setScrollX(0)
		else if (scrollX > max) setScrollX(max)

		el.scrollTo({ left: scrollX, behavior: "smooth" })
	}, [scrollX])
	useEffect(() => {
		async function getData() {
			let allRevs = [...data]
				.filter(el => el.reviews.length ? el.reviews : null)
				.map(el => el.reviews)
				.reduce((acc, arr) => acc.concat(arr), [])

			let randNumb = Math.floor(Math.random() * 10) + 1
			setReviews(allRevs.slice(randNumb, randNumb + 10))
		}
		getData()
	}, [])

	return (
		<section className='flex flex-col gap-10 w-[90%] max-w-[1500px] justify-center'>
			<div className='w-full flex justify-between max-sm:flex-col max-sm:items-center max-sm:text-center'>
				<h1 className='font-[800] text-[36px]'>OUR HAPPY CUSTOMERS</h1>

				<div className='flex gap-6 items-center text-[20px]'>
					<i className="fa-solid fa-arrow-left cursor-pointer" onClick={() => setScrollX(prev => prev - 700)}></i>
					<i className="fa-solid fa-arrow-right cursor-pointer" onClick={() => setScrollX(prev => prev + 700)}></i>
				</div>
			</div>

			<div id='scroll' className='flex justify-start gap-5 p-5 overflow-x-scroll'>
				{reviews.map((el, id) => (<Review key={id} info={el} />))}
			</div>
		</section>
	)
}
