import React from 'react'
import NavBar from '../Components/NavBar'
import Home from './Home'
import { Outlet } from 'react-router-dom'

export default function FullPage() {
	return (
		<section>
			<NavBar></NavBar>
			<Outlet></Outlet>
		</section>
	)
}
