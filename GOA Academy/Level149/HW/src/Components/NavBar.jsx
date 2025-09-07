function NavBar(){
    return(
        <nav className="navbar w-full flex flex-col items-center gap-2 text-center bg-gray-400">
            <div className="navbar-links flex gap-10">
				<a href="#">Home</a>
				<a href="#">Favourites</a>
            </div>
        </nav>
    )
}
export default NavBar