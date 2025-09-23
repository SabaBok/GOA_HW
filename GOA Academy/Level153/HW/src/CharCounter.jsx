import React, { useState } from "react";

export default function CharCounter() {
	const [text, setText] = useState("");

	return (
		<section className="flex flex-col items-start">
			<textarea value={text} onChange={e=> e.target.value.length <= 100?setText(e.target.value):null} rows="5" cols="40" placeholder="Type something..." className="p-1 border border-white rounded-sm"/>

			<p>Total Characters: {text.length}</p>
			
			{text.length === 100?(<p className="text-red-600">You Reached Character Limit</p>):null}
			
			<button onClick={()=> setText("")} className="bg-amber-600 rounded-sm py-1 px-3">Reset</button>
		</section>
	);
}



//4) შექმენით CharCounter კომპონენტი
//შექმენით textarea ტეგი და reset ღილაკი. თქვენი დავალებაა დაითვალოთ შემოყვანილი ტექსტის სიგრძე
//--> ყოველ ახალ შემოყვანით სიმბოლოზე ეკრანზე უნდა განახლდეს - `Total Characters: {characterCount}`
//--> თუ სიმბოლოების რაოდენობა გაუტოლდება 100 - აღარ მისცეთ მომხმარებელს იმის საშუალება, რომ კიდევ რაიმე დაწეროს, და სადმე დაარენდერეთ `You Reached Character Limit`
//--> reset ღილაკზე დაჭერით textarea ში დაწერილი ტექსტი უნდა გასუფთავდეს/წაიშალოს