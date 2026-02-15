import React from 'react'
import Header from '../Components/Header'
import LeftOrder from './LeftOrder'
import RightOrder from './RightOrder'

export default function Orders() {
	return (
		<section className='text-white'>
			<Header />
			
			<main className='mt-[120px]'>
				<LeftOrder/>
				
				<RightOrder/>
			</main>
		</section>
	)
}
