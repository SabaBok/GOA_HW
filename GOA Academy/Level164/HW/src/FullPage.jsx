import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header/Header'

export default function FullPage() {
	return (
		<section>
			<Header></Header>
			
			<Outlet></Outlet>

			<footer></footer>
		</section>
	)
}
