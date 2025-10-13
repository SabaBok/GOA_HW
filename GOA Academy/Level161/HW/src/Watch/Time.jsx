import React, { useState, useEffect } from 'react'

export default function Time() {
	const [time, setTime] = useState(new Date())

	const hh = time.getHours() * 30 + time.getMinutes() / 2
	const mm = time.getMinutes() * 6
	const ss = time.getSeconds() * 6

	useEffect(() => {
		const timeInterval = setInterval(() => setTime(new Date()), 1000)
		return () => clearInterval(timeInterval)
	}, [])

	return (
		<div className="relative flex justify-center items-center w-[130px] h-[130px] rounded-full border-[4px] border-gray-300 bg-gray-900">
			{/* Center Dot */}
			<div className="absolute w-3 h-3 bg-green-200 rounded-full z-10"></div>

			{/* Hour hand */}
			<div
				className="absolute w-[6px] h-[35px] bg-orange-500 rounded-t-[6px] origin-bottom"
				style={{ transform: `rotate(${hh}deg)` }}
			/>
			{/* Minute hand */}
			<div
				className="absolute w-[4px] h-[55px] bg-yellow-400 rounded-t-[6px] origin-bottom"
				style={{ transform: `rotate(${mm}deg)` }}
			/>
			{/* Second hand */}
			<div
				className="absolute w-[2px] h-[60px] bg-red-400 rounded-t-[6px] origin-bottom"
				style={{ transform: `rotate(${ss}deg)` }}
			/>
		</div>
	)
}
