import React, { useState } from 'react'

export default function HW4() {
	const [text,setText] = useState('')
	return (
		<div>
			<form>
				<input type="text" value={text} onChange={e=> setText(e.target.value.trim())} placeholder='Enter Your Name' />
			</form>

			<p>text</p>
		</div>
	)
}

//4) შექმენით Greeting კომპონენტი.
//შექმენით form ერთი input ით
//--> მომხმარებელი წერს თავის სახელს, და ეკრანზე იმავე დროს გამოჩნდება შეტყობინება.
//--> ყოველ ახალ დაწერილ სიმბოლოზე ხელახლა უნდა დარენდერდეს - `Hello, {name}`