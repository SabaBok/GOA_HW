import { useState,useContext } from 'react'
import { FoodItems } from '../FullPage'

export default function Finance() {
	const [filter, setFilter] = useState('All')
	const {admin} = useContext(FoodItems)

	return (
		<main className='mt-30 flex flex-col items-center gap-10 max-sm:px-3 px-20'>
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

					<h1 className='text-green-500 text-[30px] font-bold'>$200</h1>
				</div>

				<div className='flex flex-col gap-4 border border-[#31313119] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#3131315e] hover:scale-[1.01]'>
					<div className='flex items-center justify-between'>
						<p>Total Expense</p>
						<i className="fa-solid fa-arrow-trend-down text-red-500 text-[20px]"></i>
					</div>

					<h1 className='text-red-500 text-[30px] font-bold'>$500</h1>
				</div>

				<div className='flex flex-col gap-4 border border-[#31313119] shadow-md min-w-[300px] py-7 px-8 rounded-lg flex-1 duration-200 hover:border-[#3131315e] hover:scale-[1.01]'>
					<div className='flex items-center justify-between'>
						<p>Net Profit</p>
						<i className="fa-solid fa-dollar-sign text-[20px]"></i>
					</div>

					<h1 className='text-red-500 text-[30px] font-bold'>$300</h1>
				</div>
			</div>

			<div className='flex items-center gap-4 w-full'>
				{
					["All", 'Income', "Expense"].map((el, ind) => (
						<button key={ind} onClick={() => setFilter(el)} className={`${filter == el ? 'bg-black text-white hover:bg-[#121212]' : 'bg-white text-black hover:bg-[#9797976b]'} px-3 py-1 rounded-lg border border-[#3f3f3f8f] duration-250 cursor-pointer`}>{el}</button>
					))
				}
			</div>

			<div className='flex flex-col gap-13 w-full border border-[#77777754] p-3 rounded-lg'>
				<p>Recent Transactions</p>

				<table className="table-auto w-full border-collapse">
					<thead>
						<tr>
							{
								['Date', 'Type', 'Category', 'Ammount','ID'].map((el, ind) => (
									<th className='border-b border-[#7d7d7d77] py-3 text-center' key={ind}>{el}</th>
								))
							}
						</tr>
					</thead>

					<tbody>
						<tr>
							{
								//admin.financess
							}
							<td className='text-center border-b border-[#7d7d7d77] py-3'>2025-01-14</td>
							<td className='text-center border-b border-[#7d7d7d77] py-3 flex items-center justify-center'><p className='rounded-[10px] bg-black text-white w-max px-3 py-0.5'>income</p></td>
							<td className='text-center border-b border-[#7d7d7d77] py-3'>$125</td>
							<td className='text-center border-b border-[#7d7d7d77] py-3'>$125</td>
							<td className='text-center border-b border-[#7d7d7d77] py-3'>$125</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	)
}
