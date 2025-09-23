import React, { useState } from 'react'

export default function PasswordInput() {
	const [show,setShow] = useState(false)
	return (
		<section className='border border-white rounded-lg flex w-max p-2 flex-col items-start'>
			<form action="" className='flex flex-col items-start gap-2' onSubmit={e=> {e.preventDefault(); !show?setShow(true):setShow(false)}}>
				<input type={!show?'password':'text'} name='pass' placeholder='Password' className='border border-white p-1 rounded-sm'/>
				<button type='submit' className='py-1 px-3 bg-amber-600 rounded-sm cursor-pointer' >Show</button>
			</form>
		</section>
	)
}

//3) შექმენით PasswordInput კომპონენტი
//ამ კომპონენტმა უნდა დაარენდეროს input ტეგი და ღილაკი
//--> მომხმარებელს უნდა შეეძლოს ამ input ტეგში ჩაწეროს თავისი პაროლი
//--> ღილაკზე დაჭერით: 
//    -თუ ტექსტი ჩანს უნდა დაიფაროს(ჩანაცვლდეს ფიფქებით)
//    -თუ ტექსტი არ ჩანს(ანუ ფიფქებია), კვლავ უნდა გამოჩნდეს ტექსტი
//P.S ფიფქების რაოდენობა input ტეგში უნდა უდრიდეს მომხმარებლის მიერ შემოყვანილი პაროლის სიგრძეს