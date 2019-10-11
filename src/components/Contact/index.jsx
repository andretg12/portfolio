import React from "react";

export default function Contact() {
	return (
		<div>
			<form name="contact" method="post" data-netlify="true">
				<p>
					<label>
						Your Name: <input type="text" name="name" />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type="email" name="email" />
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name="message"></textarea>
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	);
}
