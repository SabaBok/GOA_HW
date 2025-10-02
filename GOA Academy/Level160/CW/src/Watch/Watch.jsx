import React, { useState, useEffect } from 'react'
import Heart from './Heart'
export default function Watch({ color, showingTime }) {
	const [heartRate, setHeartRate] = useState('120')
	const [vis, setVis] = useState(false)
	const [time, setTime] = useState(new Date());
	const [manualOverride, setManualOverride] = useState(false);

	const hh = time.getHours() * 30 + time.getMinutes() / 2 // 360/12 = 30deg per hour
	const mm = time.getMinutes() * 6 // 360/60 = 6deg per minute
	const ss = time.getSeconds() * 6 // 360/60 = 6deg per second
	function forceHeartRate(value) {
		setHeartRate(value)
		setManualOverride(true)
	}
	useEffect(() => {
		const timeInterval = setInterval(() => setTime(new Date()), 1000);

		const hrInterval = setInterval(() => {
			if (manualOverride) return

			const incOrDec = Math.floor(Math.random() * 2) == 1 ? true : false
			const bigOrSmall = Math.floor(Math.random() * 2) == 1 ? 2 : 1
			const randNumb = Math.floor(Math.random() * 15) + 1
			setHeartRate(prev => {
				let newHR = incOrDec ? prev + randNumb * bigOrSmall : prev - randNumb * bigOrSmall

				// Clamp to realistic bounds
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
						<div className="clock relative flex justify-center items-center w-[150px] mr-[5px] h-[250px] bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('/clock.png')` }}>
							<div className="absolute w-3 h-3 z-3 rounded-[50%] translate-x-[1px] bg-green-100"></div>
							<div className="absolute w-[6px] h-[50px] bg-orange-500 rounded-t-[50px] origin-bottom" style={{ transform: `translateY(-50%) rotate(${hh}deg)` }} />
							<div className="absolute w-[4px] h-[68px] bg-yellow-400 rounded-t-[50px] origin-bottom" style={{ transform: `translateY(-50%) rotate(${mm}deg)` }} />
							<div className="absolute w-[2.5px] h-[60px] bg-red-400 rounded-t-[50px] origin-bottom" style={{ transform: `translateY(-50%) rotate(${ss}deg)` }} />
						</div> :
						<Heart heartRate={heartRate} vis={vis} setVis={setVis} forceHeartRate={forceHeartRate}></Heart>}
				</div>

			</div>
		</section>
	)
}
