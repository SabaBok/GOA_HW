import React from 'react'
import UserStatus1 from './UserStatus1'
export default function UserFriends({ friends }) {
	return (
		<div>
			{friends && friends.length > 0 ? (
				<>
					<p>This is Your Friends list:</p>
					<ul>
						{friends.map((el, index) => (
							<li key={index}>
								<UserStatus name={el.name} status={el.status} profilePic={el.profilePic}/>
							</li>
						))}
					</ul>
				</>
			):(<p>You Don't Have Friends Yet.</p>)}
		</div>
	);
}
