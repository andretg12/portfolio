import React from "react";
import "./index.scss";

export default function Navbar() {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
				id="mainNav"
			>
				<div className="container">
					<a className="navbar-brand" href="#home">
						Andre Torrealba
					</a>
					<button
						className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						Menu
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
									About
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a
									className="nav-link py-3 px-0 px-lg-3 rounded"
									href="#portfolio"
								>
									Portfolio
								</a>
							</li>

							<li className="nav-item mx-0 mx-lg-1">
								<a
									className="nav-link py-3 px-0 px-lg-3 rounded"
									href="#contact"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
