import React, { useState } from 'react'
import { createContext } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'


export const InfoData = createContext()
export default function HW2() {
	const [data,setData] = useState('idk')
	
	return (
		<InfoData.Provider value={[data,setData]}>
			<Comp1></Comp1>
			<Comp2></Comp2>
		</InfoData.Provider>
	)
}
//2) შექმენით რამოდენიმე  კომპონენტი და ერთმანეთთან გადააგზავნეთ ბევრი სთეითები(რომ გადააგზავნით, როგორ გამოიყენებთ უკვე მიღებულ 
// სთეითებს თქვენს კრეატიულობაზე იყოს) რათქმა უნდა useContextის გამოყენებით