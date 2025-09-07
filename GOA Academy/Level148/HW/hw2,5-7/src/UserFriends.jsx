import UserStatus1 from "./UserStatus1";
export default function UserFriends({ friends }) {
	return (
		<div>
			{friends.length > 0 ? (
				<>
					<p>This is Your Friends list:</p>
					<ul>
						{friends.map((el, index) => (
							<li key={index}>
								<UserStatus1 userName={el.name} status={el.status} profilePic={el.profilePic}/>
							</li>
						))}
					</ul>
				</>
			):(<p>You Don't Have Friends Yet.</p>)}
		</div>
	);
}
