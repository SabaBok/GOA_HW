import React, { useState, useEffect } from 'react'
import Heart from './Heart'
import Time from './Time'

export default function Watch({ color = "gray", showingTime }) {
	const [heartRate, setHeartRate] = useState(120)
	const [vis, setVis] = useState(false)
	const [manualOverride, setManualOverride] = useState(false)

	function forceHeartRate(value) {
		setHeartRate(value)
		setManualOverride(true)
	}

	useEffect(() => {
		const hrInterval = setInterval(() => {
			if (manualOverride) return

			const incOrDec = Math.random() < 0.5
			const bigOrSmall = Math.random() < 0.5 ? 2 : 1
			const randNumb = Math.floor(Math.random() * 15) + 1

			setHeartRate(prev => {
				let newHR = incOrDec ? prev + randNumb * bigOrSmall : prev - randNumb * bigOrSmall
				if (newHR >= 200) newHR = 185
				if (newHR <= 60) newHR = 75
				return newHR
			})
		}, 3000)

		return () => clearInterval(hrInterval)
	}, [manualOverride])

	return (
		<section className="flex flex-1 justify-center py-10">
			<div className="relative flex flex-col items-center">

				{/* Top strap */}
				<div className="bg-black w-[100px] h-[70px] rounded-t-[50px]"></div>

				{/* Watch body */}
				<div className={`relative bg-${color}-400 w-[190px] h-[200px] rounded-[35px] shadow-lg flex justify-center items-center`}>
					{/* Screen */}
					<div className="absolute inset-[10px] bg-black rounded-[25px] flex justify-center items-center">
						<div className={`transition-transform duration-300 ${showingTime ? '-translate-y-20' : '-translate-y-2'}`}>
							{showingTime ? (
								<Time />
							) : (
								<Heart
									heartRate={heartRate}
									vis={vis}
									setVis={setVis}
									forceHeartRate={forceHeartRate}
								/>
							)}
						</div>
					</div>

					{/* Side button (crown) */}
					<div className="absolute right-[-12px] top-1/2 -translate-y-1/2 bg-gray-400 w-[15px] h-[45px] rounded-full shadow-inner"></div>
				</div>

				{/* Bottom strap */}
				<div className="bg-black w-[100px] h-[70px] rounded-b-[50px]"></div>

			</div>
		</section>
	)
}
