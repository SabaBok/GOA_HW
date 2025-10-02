import React, { useState, useEffect } from 'react'
import Heart from './Heart'
export default function Watch({ color, showingTime }) {
	const [time, setTime] = useState(() => new Date().toLocaleTimeString())
	const [heartRate, setHeartRate] = useState('120')

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)

		const hrInterval = setInterval(() => {
			const incOrDec = Math.floor(Math.random() * 2) == 1 ? true : false
			const randNumb = Math.floor(Math.random() * 15) + 1

			setHeartRate(prev => {
				let newHR = incOrDec ? prev + randNumb : prev - randNumb

				// Clamp to realistic bounds
				if (newHR > 150) newHR = 150
				if (newHR < 60) newHR = 60

				return newHR
			})
		}, 3000)

		return () => {
			clearInterval(timeInterval)
			clearInterval(hrInterval)
		}
	}, [])
	return (
		<section className='flex flex-1 justify-center'>
			<div className='relative w-[190px] h-full bg-cover bg-center' style={{ backgroundImage: `url('/${color}.png')` }}>
				<div className='absolute top-1/2 bot-1/2 w-full text-center flex justify-center translate-y-[-15px]'>
					{showingTime ? <p className='text-white'>{time}</p> : <Heart heartRate={heartRate}></Heart>}
				</div>
			</div>
		</section>
	)
}
