import { Link } from "react-router-dom"
import Filter from "./Filter"
import CardTable from "./CardTable"
import { useState } from "react"

export default function Filtering() {
	
	return (
		<main className="flex items-start gap-15 w-full pb-[200px] px-[150px]">
			<Filter/>
			<CardTable/>
		</main>
	)
}
