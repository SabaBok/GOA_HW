import { useEffect, useState } from 'react'

function App() {
	const [name,setName] = useState('')
	const [age,setAge] = useState(0)
	useEffect(()=>{
		name.length>=12? console.log('corect name'):console.log('invgalid name')
		age>=18? console.log('correct age'):console.log('invalid age')
	},[name,age])

	return (
		<>
			<form action="" onSubmit={e=>{setName(e.target.name.value); setAge(e.target.age.value)}}>
				<input type="text" placeholder='name' name='name'/>
				<input type="number" placeholder='age' name='age'/>
			</form>
			<b>{name}</b>
			<b>{age}</b>
		</>
	)
}

export default App
//შექმენით ორი state ერთი, name და age
//მომხმარებელს მოთხოვეთ შემოიყვანოს თავისი სახელი და ასაკი
//შექმენით ერთი useEffect და ორივე state უთვალთვალეთ
//თუ name შეიცავს მინიმუმ 12 სიმბოლოს დააკონსოლოგეთ correct Name
//თუ age მეტია ან ტოლი 18 დააკონსოლოგეთ correct age
//სხვა შემთხვევაში invalid name or value