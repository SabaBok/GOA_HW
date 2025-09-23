import React, { useState } from 'react'

export default function TemperatureConverter() {
	const [selected, setSelected] = useState('cel')
	const [inputTemp, setInputTemp] = useState('')
	const [result, setResult] = useState(null)

	function changeTemp(e) {
		e.preventDefault()
		const tempNum = Number(inputTemp)
		setResult(selected=='cel'? (tempNum * 9 / 5) + 32 : (tempNum - 32) * 5 / 9)
	}
	const changeUnits = e => {setResult(selected=='cel'? (tempNum * 9 / 5) + 32 : (tempNum - 32) * 5 / 9); setSelected(e.target.value)}
	return (
		<section className='flex flex-col items-start gap-4'>
			<form className='flex flex-col gap-3 items-start' onSubmit={changeTemp}>
				<input type="number" placeholder='Temperature' className='border-2 border-white rounded-sm p-1' value={inputTemp} onChange={e => setInputTemp(e.target.value)}/>
				<div className='flex items-center gap-3'>
					<label htmlFor="cel">Celsius To Fahrenheit</label>
					<input type="radio" name='idk' value="cel" checked={selected === "cel"} id='cel' onChange={changeUnits} className='mt-[3px]'/>
				</div>
				<div className='flex items-center gap-3'>
					<label htmlFor="far">Fahrenheit To Celsius</label>
					<input type="radio" name='idk' value="far" checked={selected === "far"} id='far' onChange={changeUnits} className='mt-[3px]'/>
				</div>
				<button type='submit' className='px-3 py-1 rounded-sm bg-amber-600'>Submit</button>
			</form>
			{result !== null &&
				<div>
					<p>You Have Selected: {selected === 'cel' ? 'Celsius To Fahrenheit' : 'Fahrenheit To Celsius'}</p>
					<p>The Result is {result.toFixed(2)} {selected=='cel'? '°C' : '°F'}</p>
				</div>
			}
		</section>
	)
}


//5) შექმენით TemperatureConverter კომპონენტი
//შექმენით:
//-ერთი input ტეგი (type=number)
//-ორი ღილაკი ტექსტებით -> '1. Celsius To Fahrenheit' და '2. Fahrenheit To Celsius'
//-p ტეგი სადაც ეწერება -> 'You Have Selected: 1` ან `You Have Selected: 2`
//-submit ღილაკი
//--> მომხმარებელმა უნდა შემოიყვანოს რიცხვი, ამოირჩიოს გარდაქმნის ტიპი და დააწვეს submit
//--> თქვენ უნდა გამოინგარიშოთ და დაარენდეროთ შედეგი