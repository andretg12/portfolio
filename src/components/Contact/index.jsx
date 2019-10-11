import React from "react";
import "./index.scss";

const Contact = () => {
	return (
		<div id="contact">
			<h1 id="c_title">Contact Me</h1>
			<p id="text">
				You can use my social media links below to contact me or you can just
				send me an email with the button
			</p>
			<div className="footer mt-auto py-3 text-center d-flex justify-content-around">
				<a href="https://github.com/andretg12">
					<i className="fab fa-github fa-5x"></i>
				</a>
				<a href="https://www.linkedin.com/in/andre-torrealba-garcia-52baa2187/">
					<i className="fab fa-linkedin fa-5x"></i>
				</a>
				<a href="mailto:andre.torrealba@icloud.com?subject=Contact%20from%20Portfolio">
					<i className="fas fa-envelope-open-text fa-5x"></i>
				</a>
			</div>
			<p id="update">Last updated: 2019-10-11</p>
		</div>
	);
};
export default Contact;
