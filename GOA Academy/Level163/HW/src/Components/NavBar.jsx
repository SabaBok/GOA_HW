import { Link } from "react-router-dom"
function NavBar(){
    return(
        <nav className="navbar w-full flex flex-col items-center gap-2 text-center bg-gray-400">
            <div className="navbar-links flex gap-10">
				<Link to='/'>Home</Link>
				<Link to='/favourites'>Favourites</Link>
            </div>
        </nav>
    )
}
export default NavBar