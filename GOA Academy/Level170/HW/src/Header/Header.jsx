import React from 'react'
import NavBar from './NavBar'
import SignUpNow from './SignUpNow'

export default function Header() {
	return (
		<header className='flex flex-col items-center'>
			<SignUpNow></SignUpNow>
			<NavBar></NavBar>
		</header>
	)
}
