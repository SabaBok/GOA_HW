import {useState} from 'react'
import KitchenLeft from './KitchenLeft'
import KitchenRight from './KitchenRight'
import Header from '../Components/Header'
import AlertModal from '../Components/AlertModal'

export default function Kitchen() {
	return (
		<section className='text-white'>
			<Header />
			
			<main className='mt-[120px] flex justify-between'>
				<KitchenLeft />
				
				<KitchenRight/>
			</main>
		</section>
	)
}
