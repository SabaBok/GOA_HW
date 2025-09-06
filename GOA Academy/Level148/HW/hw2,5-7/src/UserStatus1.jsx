export default function UserStatus({userName,status = false,profilePic=''}){
	return <p>{profilePic} {userName} Is {status?'Online':'Offline'}</p>
}
