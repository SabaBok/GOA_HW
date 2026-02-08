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
		<section className='w-full h-full flex flex-col items-center gap-10'>
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
								['Date', 'Type', 'Category', 'Ammount'].map((el, ind) => (
									<th className='border-b border-[#7d7d7d77] py-3 text-center' key={ind}>{el}</th>
								))
							}
						</tr>
					</thead>

					<tbody>
						{
							showingTransactions.map((el, ind) => (
								<tr key={ind}>
									<td className='text-center border-b border-[#7d7d7d77] py-3'>{el.date}</td>
									<td className='text-center border-b border-[#7d7d7d77] py-3 flex items-center justify-center'><p className={`rounded-[10px] text-white w-max px-3 py-0.5 ${el.type =='income' ? 'bg-black' : 'bg-red-500'}`}>{el.type}</p></td>
									<td className='text-center border-b border-[#7d7d7d77] py-3'>{el.category}</td>
									<td className={`text-center border-b border-[#7d7d7d77] py-3 ${el.type == 'income' ? 'text-green-500' : 'text-red-500'}`}>${el.price}</td>
									<td className='text-center border-b border-[#7d7d7d77] py-3'>{el.id}</td>
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
