import React, { useState, useEffect } from 'react'

export default function Time() {
	const [time, setTime] = useState(new Date())

	const hh = time.getHours() * 30 + time.getMinutes() / 2
	const mm = time.getMinutes() * 6
	const ss = time.getSeconds() * 6

	useEffect(() => {
		const timeInterval = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timeInterval)
	}, [])
	return (
		<div className="clock relative flex justify-center items-center w-[150px] mr-[5px] h-[250px] bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('/clock.png')` }}>
			<div className="absolute w-3 h-3 z-3 rounded-[50%] translate-x-[1px] bg-green-100"></div>
			<div className="absolute w-[6px] h-[50px] bg-orange-500 rounded-t-[50px] origin-bottom" style={{ transform: `translateY(-50%) rotate(${hh}deg)` }} />
			<div className="absolute w-[4px] h-[68px] bg-yellow-400 rounded-t-[50px] origin-bottom" style={{ transform: `translateY(-50%) rotate(${mm}deg)` }} />
			<div className="absolute w-[2.5px] h-[60px] bg-red-400 rounded-t-[50px] origin-bottom" style={{ transform: `translateY(-50%) rotate(${ss}deg)` }} />
		</div>
	)
}
