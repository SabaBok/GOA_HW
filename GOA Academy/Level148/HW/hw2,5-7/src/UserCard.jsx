import React from 'react'
import UserFriends from './UserFriends'
import UserStatus1 from './UserStatus1'
export default function UserCard({firstName,lastName,age,gender,friends,isOnline}) {
	return (
		<div>
			<p>Full name: {firstName} {lastName}</p>
			<p>Age: {age}</p>
			<p>gender: {gender}</p>
			<UserStatus1 name={`${firstName} ${lastName}`} status={isOnline}></UserStatus1>
			<UserFriends friends={friends}></UserFriends>
		</div>
	)
}
