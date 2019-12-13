import React from "react";
import "./index.scss";

export default function Hero() {
	return (
		<div id="home">
			<header className="masthead bg-primary text-white text-center">
				<div className="container d-flex align-items-center flex-column">
					<img
						className="rounded-circle mb-5"
						src="https://media.licdn.com/dms/image/C4D03AQFLSBnuMM_v-w/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=9kVIX5e1dpWsCKLiD4QH1LrH0YPD5r1HrC_Drq9vu5o"
						alt=""
					/>

					<h1 className="masthead-heading text-uppercase mb-0">
						Andre F. Torrealba
					</h1>

					<p className="masthead-subheading font-weight-light mb-0">
						Road to Hire - Software Developer
					</p>
				</div>
			</header>
		</div>
	);
}
