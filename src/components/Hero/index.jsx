import React from "react";
import "./index.scss";

export default function Hero() {
	return (
		<div>
			<header className="masthead bg-primary text-white text-center">
				<div className="container d-flex align-items-center flex-column">
					<img
						className="rounded-circle mb-5"
						src="https://media.licdn.com/dms/image/C4D03AQFLSBnuMM_v-w/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=58qdKXmQoTe0rmJRy85sUcZXAanSIwMXoU-afx6vd7k"
						alt=""
					/>

					<h1 className="masthead-heading text-uppercase mb-0">
						Andre F. Torrealba
					</h1>

					<p className="masthead-subheading font-weight-light mb-0">
						Road to Hire Student - Aspiring Software Engineer
					</p>
				</div>
			</header>
		</div>
	);
}
