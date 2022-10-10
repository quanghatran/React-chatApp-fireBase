import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

export default function Input() {
	return (
		<div className='input'>
			<input type='text' placeholder='Type something...' />

			<div className='send'>
				<img src={Attach} alt='attach_file' />
				<input type='file' style={{ display: "none" }} id='file' />

				<label htmlFor='file'>
					<img src={Img} alt='image_icon' />
				</label>
				<button>Send</button>
			</div>
		</div>
	);
}
