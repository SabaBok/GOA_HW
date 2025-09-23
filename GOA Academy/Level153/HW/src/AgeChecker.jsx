import React, { useState } from 'react'

export default function AgeChecker() {
	const [toastText, setToastText] = useState('')
	const [toastVis, setToastVis] = useState(false)
	const [toastLock, setToastLock] = useState(false)
	const [toastColor, setToastColor] = useState('')
	function toastFunc(e){
		e.preventDefault()
		let text = e.target.age.value

		Number(text)<18?
			toastAppear('you are not allowed','bg-red-400'):
			toastAppear('you are allowed','bg-green-400')
	}
	const toastAppear = (text,color)=> !toastLock? (setToastText(text), setToastLock(true), setToastVis(true), setToastColor(color)):null
	function reset(){
		setToastVis(false)
		setToastLock(false)
	}
	return (
		<section className='px-3 py-1 relative flex flex-col gap-2 items-start'>
			<form className='flex flex-col gap-2.5 items-start' onSubmit={toastFunc}>
				<input type="number" placeholder='Age' name='age' 
				className='border-2 border-white p-1 rounded-sm' id='age'/>
				<button type='submit' className='px-3 py-1 text-white bg-amber-600 rounded-lg cursor-pointer'>Submit</button>
			</form>
			<button onClick={reset} className='px-3 py-1 text-white bg-blue-600 cursor-pointer rounded-lg'>Reset</button>
			<div id="toast" 
				className={`${toastVis?'opacity-100':'opacity-0'} flex transition-all duration-300 absolute top-[10px] right-[20px] ${toastColor} w-70 h-15 rounded-lg border-2 border-white text-white
				items-center justify-center`}
			>
				<p className='capitalize'>{toastText}</p>
			</div>
		</section>
	)
}


//1) შექმენით AgeChecker კომპონენტი
//მომხმარებელს მოთხოვეთ თავისი ასაკი, onSubmit ზე:
//--> თუ არასრულწლოვანია გამოჩნდეს Toast(ვინც არ იცის დასერჩეთ Toast Ui) ის მსგავსი ელემენტი წითელი Background და ტექსტით - 'You Are Not Allowed`
//--> თუ სრულწლოვანია გამოჩნდეს Toast ის მსგავსი ელემენტი მწვანე Background და ტექსტით - `You Are Allowed`
//ასევე დაამატეთ reset ღილაკი, რათა მომხმარებელმა შეძლოს თავისი ასაკის ხელახლა შემოყვანა