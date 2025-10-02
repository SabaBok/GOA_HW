import React, { useState, useEffect} from 'react'

export default function Heart({heartRate}) {
	const [animationDuration, setAnimationDuration] = useState('1s');

	useEffect(() => {
		// Convert BPM to seconds per beat
		// 1 beat = 60 / BPM seconds
		const secondsPerBeat = 120 / heartRate;
		setAnimationDuration(`${secondsPerBeat}s`);
	}, [heartRate]);

	return (
		<div className='flex flex-col gap-3 items-center text-white translate-y-[-30px]'>
			<img src='/heart.png' alt="" className='idk w-30 object-cover h-[50px]' style={{ animationDuration }}/>
			<p>{heartRate}</p>
		</div>
	)
}
