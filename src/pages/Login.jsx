import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Lama Chat</span>
				<span className='title'>Login</span>

				<form>
					<input type='text' placeholder='display name' />
					<input type='email' placeholder='email' />

					<button>Sign In</button>
				</form>

				<p>
					You don`t have an account?
					{/* <Link to='/register'>Register</Link> */}
				</p>
			</div>
		</div>
	);
}
