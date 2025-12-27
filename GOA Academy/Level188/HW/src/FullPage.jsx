import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'

export const FoodItems = createContext()
export function FullPage() {
	let food = [
		// ===== MEAT =====
		{
			name: 'Beef Burger',
			price: '7.99',
			category: 'meat',
			description: 'Grilled beef patty, lettuce, tomato, pickles, cheddar cheese, and house sauce on a soft bun'
		},
		{
			name: 'Chicken Burger',
			price: '7.50',
			category: 'meat',
			description: 'Grilled chicken breast, lettuce, tomato, mayonnaise, and pickles on a toasted bun'
		},
		{
			name: 'Pork Mwvadi',
			price: '9.30',
			category: 'meat',
			description: 'Marinated pork chunks, garlic, onion, salt, pepper, and Georgian spices grilled on skewers'
		},
		{
			name: 'Chicken Mwvadi',
			price: '8.80',
			category: 'meat',
			description: 'Chicken pieces, onion, garlic, salt, pepper, and herbs grilled over charcoal'
		},
		{
			name: 'Fried Fish',
			price: '7.99',
			category: 'meat',
			description: 'Fresh fish fillet, flour, salt, pepper, and vegetable oil fried until golden'
		},

		// ===== KHINKALI (MEAT) =====
		{
			name: 'Beef Khinkali',
			price: '2.10',
			category: 'meat',
			description: 'Dough, minced beef, onion, garlic, salt, pepper, and water broth, shaped into traditional dumplings'
		},
		{
			name: 'Pork Khinkali',
			price: '2.20',
			category: 'meat',
			description: 'Dough, minced pork, onion, garlic, salt, pepper, and herbs in classic Georgian dumpling style'
		},

		// ===== KHACHAPURI =====
		{
			name: 'Imeruli Khachapuri',
			price: '12.50',
			category: 'khachapuri',
			description: 'Flour, water, yeast, Imeretian cheese, butter, and salt baked into a round cheese bread'
		},
		{
			name: 'Adjaruli Khachapuri',
			price: '14.00',
			category: 'khachapuri',
			description: 'Flour, water, yeast, cheese, egg, butter, and salt in a boat-shaped bread'
		},

		// ===== LOBIANI =====
		{
			name: 'Classic Lobiani',
			price: '8.50',
			category: 'lobiani',
			description: 'Flour, water, yeast, mashed beans, onions, and salt baked into traditional Georgian bread'
		},
		{
			name: 'Loriani Lobiani',
			price: '9.50',
			category: 'lobiani',
			description: 'Flour, water, yeast, mashed beans, smoked ham, onions, and salt baked into savory bread'
		},

		// ===== SOUP =====
		{
			name: 'Kharcho',
			price: '6.90',
			category: 'soup',
			description: 'Beef, rice, walnuts, garlic, onions, tomatoes, and Georgian spices cooked into a rich soup'
		},
		{
			name: 'Chikhirtma',
			price: '6.50',
			category: 'soup',
			description: 'Chicken, egg, lemon juice, flour, and herbs simmered into a creamy traditional soup'
		},

		// ===== PIZZA =====
		{
			name: 'Neopolitan Pizza',
			price: '11.00',
			category: 'pizza',
			description: 'Flour, yeast, tomato sauce, mozzarella cheese, olive oil, and fresh basil on thin crust'
		},
		{
			name: 'New York Pizza',
			price: '13.50',
			category: 'pizza',
			description: 'Flour, yeast, tomato sauce, mozzarella cheese, oregano, and garlic baked on large thin crust'
		},
		{
			name: 'Chicago Pizza',
			price: '12.00',
			category: 'pizza',
			description: 'Flour, cornmeal, mozzarella cheese, tomato sauce, sausage, and herbs in deep-dish style'
		},

		// ===== DESSERT =====
		{
			name: 'Popcorn',
			price: '3.00',
			category: 'dessert',
			description: 'Popcorn kernels, vegetable oil, salt, and butter lightly tossed for a crunchy snack'
		},
		{
			name: 'Chocolate Cake',
			price: '4.50',
			category: 'dessert',
			description: 'Flour, cocoa powder, sugar, eggs, butter, and chocolate layers for a rich cake slice'
		},
		{
			name: 'Honey Cake',
			price: '4.80',
			category: 'dessert',
			description: 'Flour, honey, sugar, eggs, cream, and butter layered into a soft traditional dessert'
		},
		{
			name: 'Fries',
			price: '4.20',
			category: 'dessert',
			description: 'Potatoes, vegetable oil, and salt cut into sticks and fried until golden and crispy'
		},

		// ===== DRINKS =====
		{
			name: 'Espresso',
			price: '4.00',
			category: 'drinks',
			description: 'Finely ground coffee beans brewed into a strong concentrated shot'
		},
		{
			name: 'Soft Drinks',
			price: '2.99',
			category: 'drinks',
			description: 'Carbonated water, sugar, flavorings, and natural or artificial flavors served chilled'
		}
	]
	const [cart,setCart] = useState([])

	return (
		<FoodItems.Provider value={{food,cart,setCart}}>
			<Outlet></Outlet>
		</FoodItems.Provider>
	)
}