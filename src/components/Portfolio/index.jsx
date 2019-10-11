import React from "react";
import "./index.scss";
import data from "../../data/portfolio.json";

export default function Portfolio() {
	return (
		<div className="portfolio">
			<div className="skills-maintitle">
				<h2 className="mb-5">Work Projects</h2>
			</div>
			<div className="wrapper">
				<div className="main-container">
					{data.map((e, index) => (
						<div key={index} className="container">
							<a
								href={e.link}
								rel="noopener noreferrer"
								target="_blank"
								id="link"
							>
								{e.name}
								<img className="project-img" src={e.img} alt={e.name} />
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
