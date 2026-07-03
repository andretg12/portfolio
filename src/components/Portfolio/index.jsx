import React from "react";
import "./index.scss";
import projects from "../../data/portfolio.json";

export default function Portfolio() {
	return (
		<section className="portfolio section section-card reveal" id="portfolio">
			<div className="section-heading">
				<p className="eyebrow">Selected work</p>
				<h2>Projects with clearer framing and stronger presentation.</h2>
				<p>
					A refreshed view of public work, emphasizing the product thinking,
					technical care, and user experience behind each project.
				</p>
			</div>

			<div className="project-grid">
				{projects.map((project) => (
					<article className="project-card" key={project.link}>
						<a
							className="project-card__link"
							href={project.link}
							rel="noopener noreferrer"
							target="_blank"
							aria-label={`Open ${project.name} in a new tab`}
						>
							<span className="project-card__index" aria-hidden="true">
								{project.name.slice(0, 2)}
							</span>
							<h3>{project.name}</h3>
							<p>{project.summary}</p>
							<ul aria-label={`${project.name} technologies`}>
								{project.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
							<span className="project-card__cta">Open project</span>
						</a>
					</article>
				))}
			</div>
		</section>
	);
}
