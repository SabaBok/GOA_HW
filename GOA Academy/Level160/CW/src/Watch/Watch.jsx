import React, { useState, useEffect } from 'react'
import Heart from './Heart'
import Time from './Time'
export default function Watch({ color, showingTime }) {
	const [heartRate, setHeartRate] = useState('120')
	const [vis, setVis] = useState(false)
	const [manualOverride, setManualOverride] = useState(false)


	function forceHeartRate(value) {
		setHeartRate(value)
		setManualOverride(true)
	}
	useEffect(() => {

		const hrInterval = setInterval(() => {
			if (manualOverride) return

			const incOrDec = Math.floor(Math.random() * 2) == 1 ? true : false
			const bigOrSmall = Math.floor(Math.random() * 2) == 1 ? 2 : 1
			const randNumb = Math.floor(Math.random() * 15) + 1
			setHeartRate(prev => {
				let newHR = incOrDec ? prev + randNumb * bigOrSmall : prev - randNumb * bigOrSmall

				if (newHR >= 200) newHR = 185
				if (newHR <= 60) newHR = 75

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
			<div className='relative w-[190px] h-[410px] bg-cover bg-center' style={{ backgroundImage: `url('/${color}.png')` }}>
				<div className={`absolute top-1/2 bot-1/2 w-full text-center flex justify-center ${showingTime ? 'translate-y-[-130px]' : 'translate-y-[-15px]'} `}>
					{showingTime ?
						<Time></Time>:
						<Heart heartRate={heartRate} vis={vis} setVis={setVis} forceHeartRate={forceHeartRate}></Heart>}
				</div>

			</div>
		</section>
	)
}
