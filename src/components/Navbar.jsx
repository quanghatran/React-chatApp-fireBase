import React from "react";

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='logo'>Lama Chat</div>
			<div className='user'>
				<img
					src='https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/273314263_1811078735768705_6740058871334642388_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X1-GXIcArw4AX9VdOZ0&_nc_ht=scontent.fhan14-3.fna&oh=00_AT-mw-MJubVKG5oDdZwsu_HEcb2_xfI2IKEqL4crfT4ArA&oe=6348711E'
					alt='avatar'
				/>
				<span>Quangg</span>
				<button>Logout</button>
			</div>
		</div>
	);
}
