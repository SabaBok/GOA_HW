import { Outlet } from 'react-router-dom'
import { createContext } from 'react'

export const FoodItems = createContext()
export function FullPage() {
	let food = [
		{ name: 'Burger', price: '7.99' },
		{ name: 'Khinkali', price: '2.10' },
		{ name: 'Shawarma', price: '9.50' },
		{ name: 'Coffee', price: '5.50' },
		{ name: 'Fried Fish', price: '7.99' },
		{ name: 'Fries', price: '4.20' },
		{ name: 'Khachapuri', price: '14.00' },
		{ name: 'Mwvadi', price: '9.30' },
		{ name: 'Popcorn', price: '3.00' },
		{ name: 'Soft drinks', price: '2.99' }
	]

	return (
		<FoodItems.Provider value={food}>
			<Outlet></Outlet>
		</FoodItems.Provider>
	)
}