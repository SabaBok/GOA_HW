import { Link } from "react-router-dom"
import Filter from "./Filter"
import CardTable from "./CardTable"
import { useState } from "react"

export default function Filtering() {

	return (
		<main className="flex flex-col items-start gap-10 w-full pb-[200px] px-[150px]">
			<div className='flex gap-[15px] items-center font-400'>
				<p className='text-[#00000099]'>Home</p>
				<i className="text-[#00000099] fa-solid fa-chevron-right text-[13px]"></i>
				<p className='text-[#00000099]'>Shop</p>
				<i className="text-[#00000099] fa-solid fa-chevron-right text-[13px]"></i>
				<p>Explore</p>
			</div>

			<div className="flex items-start gap-15 w-full">
				<Filter />
				<CardTable />
			</div>
		</main>
	)
}
