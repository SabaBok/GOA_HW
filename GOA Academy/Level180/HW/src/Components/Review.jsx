import React from 'react'

export default function Review({info}) {
	function getStars() {
		const fullStars = Math.floor(info.rating)
		const hasHalfStar = info.rating % 1 >= 0.5
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

		const stars = []

		for (let i = 0; i < fullStars; i++) {
			stars.push(<i key={`full-${i}`} className="fa-solid fa-star text-yellow-400"></i>)
		}

		if (hasHalfStar) {
			stars.push(<i key="half" className="fa-solid fa-star-half-stroke text-yellow-400"></i>)
		}

		for (let i = 0; i < emptyStars; i++) {
			stars.push(<i key={`empty-${i}`} className="fa-regular fa-star text-yellow-400"></i>)
		}

		return <div className="flex items-center gap-1">{stars}</div>
	}
	function getTime(){
		const time = info.tim.split('.')
		const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		return `Posted On ${allMonths[parseInt(time[1])-1]}, ${time[0]} , ${time[2]}`
	}
	return (
		<div className='review-card md:w-[610px] min-w-[360px] w-[360px] h-[200px] rounded-[20px] border border-[#0000001A] py-7 px-8 flex flex-col justify-between'>
			<div className='flex justify-between'>
				{getStars()}

				<i className="fa-solid fa-ellipsis text-[23px] text-[#00000066] cursor-pointer"></i>
			</div>

			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<h2 className='text-[20px] font-[600]'>{info.name}</h2>
					<i className="fa-solid fa-circle-check text-green-600"></i>
				</div>

				<p className='text-[#00000099] font-[400]'>"{info.desc}"</p>
			</div>

			<p className='text-[#00000099]'>{getTime()}</p>
		</div>
	)
}
