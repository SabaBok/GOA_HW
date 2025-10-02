import React, { useState, useEffect } from 'react'

export default function Heart({ heartRate, vis, setVis,forceHeartRate }) {
	const [animationDuration, setAnimationDuration] = useState('1s')
	const [prevBeats, setPrevBeats] = useState(heartRate)
	const [change, setChange] = useState(0)
	const [warning, setWarning] = useState(heartRate >= 160 ? true : false)

	useEffect(() => {
		setWarning(heartRate >= 160)

		const secondsPerBeat = 120 / heartRate
		setAnimationDuration(`${secondsPerBeat}s`)

		const diff = heartRate - prevBeats
		if (diff !== 0) {
			setChange(diff)
			setVis(true)
			setTimeout(() => setVis(false), 500)
		}

		setPrevBeats(heartRate)
	}, [heartRate])
	useEffect(() => {
		if (!warning) return // no warning = no timer

		const timer = setTimeout(() => {
			alert('rate slower injected')
			forceHeartRate(145)
		}, 6500)

		// cleanup: cancel timer if warning changes or component unmounts
		return () => clearTimeout(timer)
	}, [warning])
	return (
		<div className='flex flex-col gap-3 items-center text-white translate-y-[-60px]'>
			<i className={`${warning ? 'opacity-100' : 'opacity-0'} fa-solid fa-triangle-exclamation text-yellow-400`}></i>
			<img src='/heart.png' alt="" className='idk w-30 object-cover h-[50px]' style={{ animationDuration }} />
			<div className='flex flex-col items-center'>
				<p>{heartRate}</p>
				<span className={`${vis ? 'opacity-90' : 'opacity-0'} duration-500 ${change > 0 ? 'text-green-400' : 'text-red-400'} text-[13px]`}>{change > 0 ? `+${change}` : change}</span>
				<p className={`${warning ? 'opacity-100' : 'opacity-0'} uppercase text-[10px] text-yellow-400`}>high heart rate warning</p>
			</div>
		</div>
	)
}
