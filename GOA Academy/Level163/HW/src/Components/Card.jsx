import { motion } from "framer-motion"
import { useState } from "react"

function Card({ movie, liked, onFavourite }) {
	const [likedList,setLikedList] = useState(JSON.parse(localStorage.getItem('movie-app-liked')) || [])
	for (let i in likedList) {
		if (movie['#TITLE'] === i['#TITLE']) {
			liked = true
		}else{
			//liked = false
		}
	}

	return (
		<motion.div
		layout
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		transition={{ duration: 0.3 }}
		className="movie-card rounded-lg w-[280px] h-[500px] flex flex-col items-start pb-3 text-left gap-5 bg-gray-800 text-white cursor-pointer"
		>
			<div className="movie-poster relative rounded-lg group w-full ">
				<img
					src={movie["#IMG_POSTER"] || "https://picsum.photos/230/260"}
					alt={movie.title}
					className="rounded-t-lg object-cover w-full h-[400px] transition hover:blur-[2px] relative z-3" />
				<div className="movie-overlay flex justify-end gap-2 items-start w-full h-full absolute top-[5px] right-[8px]">
					<button
					className="relative z-4 favourite-btn hover:text-red-400 bg-gray-500 hidden opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-200 px-1 rounded-[50%]"
					onClick={()=> onFavourite(movie)}
					>
						{liked?<i className="fa-solid fa-heart text-base relative z-4 top-[1px] text-red-500 cursor-pointer"></i>: <i className="fa-solid fa-heart text-base relative z-4 top-[1px] cursor-pointer"></i>}
					</button>
				</div>
			</div>

			<div className="movie-poster ml-3 flex flex-col justify-between h-full gap-1">
				<h3>{movie['#TITLE']}</h3>
				<p>{movie['#YEAR']}</p>
			</div>
		</motion.div>
	)
}

export default Card