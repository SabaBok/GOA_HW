export default function UserStatus({userName,isOnline = false}) {
	if(isOnline) return <p>{userName} Is Online</p>
	else return <p>{userName} Is Offline</p>
}
