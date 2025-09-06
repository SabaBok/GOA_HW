import Hw2 from "./Hw2"
import UserStatus1 from "./UserStatus1"
import UserFriends from "./UserFriends"
import UserCard from "./UserCard"
function App() {
	const friendList = [
		{name:'saba',status:'offline',profilePic:'😎'},
		{name:'gio',status:'online',profilePic:'🤗'}
	]

	return (
		<>
			{/* HW2 */}
			<Hw2>
				<button>the child</button>
			</Hw2>

			{/* HW5 */}
			<UserStatus1 userName='saba1' isOnline={true}></UserStatus1>
			<UserStatus1 userName='gio1' isOnline={false}></UserStatus1>

			<UserStatus2 userName='saba2' isOnline={false}></UserStatus2>
			<UserStatus2 userName='gio2' isOnline={false}></UserStatus2>

			{/* HW6 */}
			<UserFriends friends={friendList} ></UserFriends>

			{/* HW7 */}
			<UserCard firstName='saba' lastName='bokuchava' age={17} friends={friendList} isOnline={true}></UserCard>
			<UserCard firstName='tornike' lastName='beruchashvili' age={17} friends={friendList} isOnline={false}></UserCard>
			<UserCard firstName='john' lastName='doe' age={20} friends={friendList} isOnline={true}></UserCard>
		</>
	)
}

export default App
