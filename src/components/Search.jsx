import React from "react";

export default function Search() {
	return (
		<div className='search'>
			<div className='searchForm'>
				<input type='text' placeholder='Find a user' />
			</div>
			<div className='userChat'>
				<img
					src='https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg'
					alt='johnDoe'
				/>
				<div className='userChatInfo'>
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
}
