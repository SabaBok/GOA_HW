import { useState, useEffect } from "react"
import Card from "../Components/Card"
let fetchedOnce = false

function Home() {
	const [searchText, setSearchText] = useState('')
	const [movies, setMovies] = useState([])
	const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('movie-app-liked')) || [])
	function onFavourite(movie){
		for (let i of liked) {
			if (i['#TITLE'] === movie["#TITLE"]){
				setLiked(liked.splice(i,1))	
				localStorage.setItem('movie-app-liked', JSON.stringify(liked))
				return
			}
		}
		const updatedLiked = [movie, ...liked]
		setLiked(updatedLiked)
		localStorage.setItem('movie-app-liked', JSON.stringify(updatedLiked))
	}
	let initialMovies = [
		{ title: 'Terminator', release_date: '2023-01-01', url: 'https://picsum.photos/230/260' },
		{ title: 'John Wick', release_date: '2023-02-01', url: 'https://picsum.photos/230/260' },
		{ title: 'Star Wars Revenge Of The Sith', release_date: '2023-03-01', url: 'https://picsum.photos/230/260' },
		{ title: 'The Matrix', release_date: '2023-05-01', url: 'https://picsum.photos/230/260' },
		{ title: 'Avatar', release_date: '2023-06-01', url: 'https://picsum.photos/230/260' },
		{ title: 'Inception', release_date: '2023-07-01', url: 'https://picsum.photos/230/260' },
		{ title: 'Interstellar', release_date: '2023-08-01', url: 'https://picsum.photos/230/260' },
		{ title: 'The Dark Knight', release_date: '2023-09-01', url: 'https://picsum.photos/230/260' },
	]
	useEffect(() => {
		const getMovies = async () => {
			let allMovies = []
			for (let i of initialMovies) {
				const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${i.title}`)
				const data = await res.json()
				allMovies.push(...data.description)
			}

			// Shuffle
			for (let i = allMovies.length - 1; i > 0; i--) {
				const rand = Math.floor(Math.random() * (i + 1))
					;[allMovies[i], allMovies[rand]] = [allMovies[rand], allMovies[i]]
			}

			setMovies(allMovies)
		}

		getMovies()
	}, [])
	return (
		<div className="home p-10 flex flex-col items-center gap-20 justify-center">
			<form action="" onChange={e => setSearchText(e.target.value)} className="search-form flex items-center gap-5 w-[70%] justify-center">
				<input type="text" placeholder="Search Up Movies 🔎" className="clear-none bg-white ml-10 flex-1 text-center rounded-lg placeholder:text-center placeholder:text-gray-500 outline-none" />
				<button className="bg-[#444] py-1 px-3 rounded-lg cursor-pointer hover:bg-[#555] transition-all">Search</button>
			</form>

			<div className="movies-grid w-full h-full items-center gap-x-[10px] gap-y-[50px] justify-items-center grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
				{movies
					.filter(movie => movie["#TITLE"].toLowerCase().startsWith(searchText.toLowerCase()))
					.map((movie, id) => (
						<Card movie={movie} liked={false} onFavourite={onFavourite} key={id} />
					))
				}
			</div>
		</div>
	)
}
export default Home