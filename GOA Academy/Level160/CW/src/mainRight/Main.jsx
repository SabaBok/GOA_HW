import React, { useEffect, useState } from 'react'

export default function Main({ setInfo }) {	
	return (
		<section className='flex flex-col gap-6 p-5 items-start flex-1'>
			{/* top text */}
			<div>
				<h2>FitBit 19 - The Smartest Watch</h2>
				<span className='opacity-80 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</span>
			</div>
			{/* select colors */}
			<div className='flex flex-col gap-2'>
				<h1 className='font-[700]'>Select Colors</h1>
				<div className='flex gap-3'>
					<div className="w-10 h-6.5 bg-[#000000] rounded-[3px] cursor-pointer" onClick={() => setInfo(prev => ({ ...prev, color: 'black' }))}></div>
					<div className="w-10 h-6.5 bg-[#ca3d22] rounded-[3px] cursor-pointer" onClick={() => setInfo(prev => ({ ...prev, color: 'red' }))}></div>
					<div className="w-10 h-6.5 bg-[#565681] rounded-[3px] cursor-pointer" onClick={() => setInfo(prev => ({ ...prev, color: 'blue' }))}></div>
					<div className="w-10 h-6.5 bg-[#8a5362] rounded-[3px] cursor-pointer" onClick={() => setInfo(prev => ({ ...prev, color: 'purple' }))}></div>
					<div className="w-10 h-6.5 bg-[#c2a4ac] rounded-[3px] cursor-pointer" onClick={() => setInfo(prev => ({ ...prev, color: 'pink' }))}></div>
				</div>
			</div>
			{/* features */}
			<div className='flex flex-col gap-2'>
				<h1 className='font-[700]'>Features</h1>
				<div className='flex gap-3'>
					<button className='px-3 py-1 bg-[#edebeb] text-black rounded-[4px] cursor-pointer' onClick={() => setInfo(prev => ({ ...prev, showingTime: true }))}>Time</button>
					<button className='px-3 py-1 bg-[#edebeb] text-black rounded-[4px] cursor-pointer' onClick={() => setInfo(prev => ({ ...prev, showingTime: false }))}>Heart Rate</button>
				</div>
			</div>

			<button
				className='text-black cursor-pointer rounded-[4px] bg-amber-500 uppercase px-4 py-1.5 font-[600]'
				onClick={() => alert('bought')}>buy now</button>
		</section>
	)
}
