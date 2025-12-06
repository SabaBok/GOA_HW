import { useState, useCallback, useMemo, useReducer } from 'react'

function App() {
	const [filterMode, dispatch] = useReducer((s, action) => {
		switch (action.type) {
			case 'alphabetical': return 'alphabetical'
			case 'default': return 'default'
			default: return state
		}
	}, 'default')

	const [list] = useState([
		{ name: 'Laptop', price: 899 },
		{ name: 'Smartphone', price: 499 },
		{ name: 'Headphones', price: 79 },
		{ name: 'Monitor', price: 199 },
		{ name: 'Keyboard', price: 49 },
		{ name: 'Mouse', price: 29 },
		{ name: 'Speaker', price: 99 },
		{ name: 'Webcam', price: 59 },
		{ name: 'Charger', price: 25 },
		{ name: 'USB Cable', price: 10 },
		{ name: 'Backpack', price: 60 },
		{ name: 'Desk Lamp', price: 35 },
		{ name: 'Tablet', price: 299 },
		{ name: 'Smartwatch', price: 199 },
		{ name: 'Microphone', price: 120 },
		{ name: 'Router', price: 85 },
		{ name: 'Hard Drive', price: 110 },
		{ name: 'SSD', price: 150 },
		{ name: 'Graphics Card', price: 399 },
		{ name: 'Processor', price: 329 },
		{ name: 'Motherboard', price: 220 },
		{ name: 'RAM', price: 80 },
		{ name: 'Power Supply', price: 95 },
		{ name: 'Cooling Fan', price: 40 },
		{ name: 'Desk Chair', price: 150 },
		{ name: 'Office Desk', price: 250 },
		{ name: 'Mouse Pad', price: 15 },
		{ name: 'External HDD', price: 120 },
		{ name: 'Game Controller', price: 60 },
		{ name: 'VR Headset', price: 399 },
		{ name: 'Printer', price: 130 },
		{ name: 'Scanner', price: 90 },
		{ name: 'Smart Light', price: 45 },
		{ name: 'Electric Kettle', price: 35 },
		{ name: 'Coffee Maker', price: 80 },
		{ name: 'Blender', price: 60 },
		{ name: 'Toaster', price: 25 },
		{ name: 'Air Fryer', price: 120 },
		{ name: 'Vacuum Cleaner', price: 200 },
		{ name: 'Fan', price: 30 },
		{ name: 'Heater', price: 50 },
		{ name: 'Hair Dryer', price: 40 },
		{ name: 'Shaver', price: 60 },
		{ name: 'Toothbrush', price: 25 },
		{ name: 'Water Bottle', price: 15 },
		{ name: 'Sunglasses', price: 70 },
		{ name: 'Wallet', price: 45 },
		{ name: 'Belt', price: 35 },
		{ name: 'Shoes', price: 90 },
		{ name: 'Sneakers', price: 120 },
		{ name: 'Jacket', price: 150 },
		{ name: 'Jeans', price: 80 },
		{ name: 'T-shirt', price: 25 },
		{ name: 'Hat', price: 20 },
		{ name: 'Gloves', price: 25 },
		{ name: 'Scarf', price: 30 },
		{ name: 'Necklace', price: 75 },
		{ name: 'Ring', price: 100 },
		{ name: 'Bracelet', price: 50 },
		{ name: 'Earrings', price: 45 },
		{ name: 'Backpack', price: 65 },
		{ name: 'Suitcase', price: 150 },
		{ name: 'Watch', price: 200 },
		{ name: 'Camera', price: 500 },
		{ name: 'Tripod', price: 60 },
		{ name: 'Memory Card', price: 40 },
		{ name: 'Lens', price: 350 },
		{ name: 'Drone', price: 700 },
		{ name: 'Smart Lock', price: 130 },
		{ name: 'Doorbell', price: 100 },
		{ name: 'Router', price: 90 },
		{ name: 'Switch', price: 70 },
		{ name: 'Cable', price: 15 },
		{ name: 'Extension Cord', price: 20 },
		{ name: 'Power Strip', price: 25 },
		{ name: 'Lamp', price: 40 },
		{ name: 'Ceiling Light', price: 120 },
		{ name: 'LED Strip', price: 30 },
		{ name: 'Painting', price: 200 },
		{ name: 'Poster', price: 20 },
		{ name: 'Vase', price: 45 },
		{ name: 'Chair', price: 100 },
		{ name: 'Sofa', price: 500 },
		{ name: 'Table', price: 250 },
		{ name: 'Bookshelf', price: 150 },
		{ name: 'Mirror', price: 80 },
		{ name: 'Rug', price: 90 },
		{ name: 'Curtains', price: 60 },
		{ name: 'Pillow', price: 25 },
		{ name: 'Blanket', price: 50 },
		{ name: 'Bed', price: 400 },
		{ name: 'Mattress', price: 350 },
		{ name: 'Chair Cushion', price: 20 },
		{ name: 'Wall Clock', price: 40 },
		{ name: 'Alarm Clock', price: 30 },
		{ name: 'Thermostat', price: 120 },
		{ name: 'Smoke Detector', price: 35 },
		{ name: 'Fan', price: 50 },
		{ name: 'Heater', price: 75 },
		{ name: 'Air Conditioner', price: 400 },
		{ name: 'Dehumidifier', price: 150 },
		{ name: 'Humidifier', price: 60 },
		{ name: 'Router', price: 95 },
		{ name: 'Modem', price: 70 },
		{ name: 'Switch', price: 55 },
		{ name: 'Cable', price: 25 },
		{ name: 'Keyboard', price: 50 },
		{ name: 'Mouse', price: 35 },
		{ name: 'Monitor', price: 180 },
		{ name: 'Laptop Stand', price: 40 },
		{ name: 'Desk Organizer', price: 25 },
		{ name: 'Notebook', price: 10 },
		{ name: 'Pen', price: 5 }
	])

	const filterFunc = useCallback((mode) => {
		if(mode == 'alphabetical') return [...list].sort((a, b) => a.name.localeCompare(b.name))
		return list
	}, [list])

	const filteredList = useMemo(() => filterFunc(filterMode), [filterMode, filterFunc])

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex gap-5'>
				<button onClick={() => dispatch({ type: 'default' })}>Default</button>
				<button onClick={() => dispatch({ type: 'alphabetical' })}>Alphabetically</button>
			</div>

			<ol className='flex flex-wrap p-5 gap-5 h-[300px]'>
				{filteredList.map((el, ind) => (
					<li key={ind}>
						<p className='underline'>{el.name}</p>
						<span>${el.price}</span>
					</li>
				))}
			</ol>
		</div>
	)
}

export default App

//level 185 & 186:
//1) გექნებათ სია სადაც იქნება სხვადასხვა პროდუქტების სახელები მოთავსებული, მინიმუმ 100
//თქვენი მიზანია გააკეთოთ ფილტრაცია, როდესაც მომხამრებელი ჩაწერს ინფუთში რაიმეს შესაბამისად მიიღოთ სიიდან გაფილტრული მონაცემები ამაში გამოიყენეთ useMemo