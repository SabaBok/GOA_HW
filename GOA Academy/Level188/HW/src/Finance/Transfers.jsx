import { useState, useContext, useEffect } from 'react'
import { FoodItems } from '../FullPage'

export default function Transfers() {
	const { accs } = useContext(FoodItems)
	const admin = accs.find(el => el.title === 'admin')

	const income = admin.finances.income.reduce((acc, el) => acc + el.price, 0)
	const expense = admin.finances.expense.reduce((acc, el) => acc + el.price, 0)
	const profit = income - expense

	return (
		<section className='w-full h-full flex flex-col items-center gap-10 font-sansita-swashed text-white'>
			<div className='flex flex-col items-center'>
				<h2 className='font-bold text-[30px] text-center'>Financial Dashboard</h2>
				<p className='opacity-70 text-center'>Track income, expenses, and restaurant performance</p>
			</div>

			<div className='flex items-center gap-7 w-full flex-wrap min-w-[300px]'>
				<div className='flex flex-col gap-4 border border-[#4a4a4a] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#5a5a5a] hover:scale-[1.01] bg-[#2a2a2a]'>
					<div className='flex items-center justify-between'>
						<p className='text-white'>Total Income</p>
						<i className="fa-solid fa-arrow-trend-up text-green-400 text-[20px]"></i>
					</div>

					<h1 className='text-green-400 text-[30px] font-bold'>${income}</h1>
				</div>

				<div className='flex flex-col gap-4 border border-[#4a4a4a] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#5a5a5a] hover:scale-[1.01] bg-[#2a2a2a]'>
					<div className='flex items-center justify-between'>
						<p className='text-white'>Total Expense</p>
						<i className="fa-solid fa-arrow-trend-down text-red-400 text-[20px]"></i>
					</div>

					<h1 className='text-red-400 text-[30px] font-bold'>${expense}</h1>
				</div>

				<div className='flex flex-col gap-4 border border-[#4a4a4a] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#5a5a5a] hover:scale-[1.01] bg-[#2a2a2a]'>
					<div className='flex items-center justify-between'>
						<p className='text-white'>Net Profit</p>
						<i className="fa-solid fa-dollar-sign text-[20px] text-blue-400"></i>
					</div>

					<h1 className={`${profit < 0 ? 'text-red-400' : 'text-green-400'} text-[30px] font-bold`}>${profit}</h1>
				</div>
			</div>
		</section>
	)
}
