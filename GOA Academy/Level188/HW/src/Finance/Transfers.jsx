import {useState,useContext,useEffect} from 'react'
import { FoodItems } from '../FullPage'

export default function Transfers() {
	const { accs } = useContext(FoodItems)
	const admin = accs.find(el => el.title === 'admin')

	const income = admin.finances.income.reduce((acc, el) => acc + el.price, 0)
	const expense = admin.finances.expense.reduce((acc, el) => acc + el.price, 0)
	const profit = income - expense

	return (
		<section className='w-full h-full flex flex-col items-center gap-10 font-sansita-swashed'>
			<div className='flex flex-col items-center'>
				<h2 className='font-bold text-[30px] text-center'>Financial Dashboard</h2>
				<p className='opacity-70 text-center'>Track income, expenses, and restaurant performance</p>
			</div>

			<div className='flex items-center gap-7 w-full flex-wrap min-w-[300px]'>
				<div className='flex flex-col gap-4 border border-[#31313119] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#3131315e] hover:scale-[1.01]'>
					<div className='flex items-center justify-between'>
						<p>Total Income</p>
						<i className="fa-solid fa-arrow-trend-up text-green-500 text-[20px]"></i>
					</div>

					<h1 className='text-green-500 text-[30px] font-bold'>${income}</h1>
				</div>

				<div className='flex flex-col gap-4 border border-[#31313119] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#3131315e] hover:scale-[1.01]'>
					<div className='flex items-center justify-between'>
						<p>Total Expense</p>
						<i className="fa-solid fa-arrow-trend-down text-red-500 text-[20px]"></i>
					</div>

					<h1 className='text-red-500 text-[30px] font-bold'>${expense}</h1>
				</div>

				<div className='flex flex-col gap-4 border border-[#31313119] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#3131315e] hover:scale-[1.01]'>
					<div className='flex items-center justify-between'>
						<p>Net Profit</p>
						<i className="fa-solid fa-dollar-sign text-[20px]"></i>
					</div>

					<h1 className={`${profit < 0 ? 'text-red-500' : 'text-green-500'} text-[30px] font-bold`}>${profit}</h1>
				</div>
			</div>
		</section>
	)
}
