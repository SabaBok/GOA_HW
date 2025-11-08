import React, { useState } from 'react'
import { createContext } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'


const InfoData = createContext()
function HW2() {
	const [data,setData] = useState('idk')
	
	return (
		<InfoData.Provider value={[data,setData]}>
			<Comp1></Comp1>
			<Comp2></Comp2>
		</InfoData.Provider>
	)
}

export {InfoData,HW2}
//2) შექმენით რამოდენიმე  კომპონენტი და ერთმანეთთან გადააგზავნეთ ბევრი სთეითები(რომ გადააგზავნით, როგორ გამოიყენებთ უკვე მიღებულ 
// სთეითებს თქვენს კრეატიულობაზე იყოს) რათქმა უნდა useContextის გამოყენებით