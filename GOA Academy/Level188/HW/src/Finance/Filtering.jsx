import { useState, useEffect, useContext } from 'react'
import { FoodItems } from '../FullPage'

export default function FIltering() {
	const [filter, setFilter] = useState('All')
	const { accs } = useContext(FoodItems)
	const admin = accs.find(el => el.title === 'admin')

	const income = admin.finances.income.reduce((acc, el) => acc + el.price, 0)
	const expense = admin.finances.expense.reduce((acc, el) => acc + el.price, 0)
	const [showingTransactions, setShowingTransactions] = useState([])

	useEffect(() => {
		if (filter === 'All') setShowingTransactions([...admin.finances.income, ...admin.finances.expense])
		else if (filter === 'Income') setShowingTransactions(admin.finances.income)
		else if (filter === 'Expense') setShowingTransactions(admin.finances.expense)
	}, [filter])

	return (
		<section className='w-full h-full flex flex-col items-center gap-10 text-white'>
			<div className='flex items-center gap-4 w-full'>
				{
					["All", 'Income', "Expense"].map((el, ind) => (
						<button key={ind} onClick={() => setFilter(el)} className={`${filter == el ? 'bg-[#3a3a3a] text-white hover:bg-[#4a4a4a]' : 'bg-[#2a2a2a] text-[#d1d1d1] hover:bg-[#3a3a3a]'} px-3 py-1 rounded-lg border border-[#4a4a4a] duration-250 cursor-pointer`}>{el}</button>
					))
				}
			</div>

			<div className='flex flex-col gap-13 w-full border border-[#4a4a4a] p-3 rounded-lg bg-[#1e1e1e]'>
				<p>Recent Transactions</p>

				<table className="table-auto w-full border-collapse text-[#d1d1d1]">
					<thead>
						<tr>
							{
								['Date', 'Type', 'Category', 'Ammount'].map((el, ind) => (
									<th className='border-b border-[#4a4a4a] py-3 text-center' key={ind}>{el}</th>
								))
							}
						</tr>
					</thead>

					<tbody>
						{
							showingTransactions.map((el, ind) => (
								<tr key={ind}>
									<td className='text-center border-b border-[#4a4a4a] py-3'>{el.date}</td>
									<td className='text-center border-b border-[#4a4a4a] py-3 flex items-center justify-center'><p className={`rounded-[10px] text-white w-max px-3 py-0.5 ${el.type =='income' ? 'bg-[#3a3a3a]' : 'bg-red-600'}`}>{el.type}</p></td>
									<td className='text-center border-b border-[#4a4a4a] py-3'>{el.category}</td>
									<td className={`text-center border-b border-[#4a4a4a] py-3 ${el.type == 'income' ? 'text-green-400' : 'text-red-400'}`}>${el.price}</td>
									<td className='text-center border-b border-[#4a4a4a] py-3'>{el.id}</td>
								</tr>
							))
						}
						<tr>

						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}
