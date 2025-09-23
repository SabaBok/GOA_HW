import React, { useState } from 'react'

export default function ColorPicker() {
	const [color,setColor] = useState('#000')

	function randomColor(){
		let code = [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
		setColor(`#${code}`)
	}
	return (
		<section className='flex flex-col gap-10 items-start'>
			<div>
				<input type="color" name='color' placeholder='Put In A Color' value={color} onChange={e=> setColor(e.target.value)}/>
				<div style={{backgroundColor:color}} className={`rounded-sm w-50 h-25`}>You Selected: {color}</div>
			</div>

			<button className='py-1 px-3 border-2 border-white bg-gray-500 rounded-sm cursor-pointer'
				onClick={randomColor}
			>Random Color</button>
		</section>
	)
}

//2) შექმენით ColorPicker კომპონენტი
//მომხმარებელს მოთხოვეთ შემოიყვანოს რაიმე ფერი HEX სისტემაში. onSubmit ზე:
//--> შეღებეთ ვებსაიტის(ან რაიმე div) Background ფერი, მომხმარებლის მიერ შემოყვანილ HEX კოდით.
//--> დაარენდერეთ მსგავსი ტექსტი: `You selected: {hex}`
//--> დაამატეთ randomColor ღილაკი