import React from "react";
import "./index.scss";

const skillGroups = [
	{
		title: "Frontend systems",
		items: ["React", "Design systems", "Sass", "Accessibility", "Responsive UI"],
	},
	{
		title: "Engineering practice",
		items: ["Technical direction", "Code review", "Testing", "CI/CD", "Mentorship"],
	},
	{
		title: "Product delivery",
		items: ["Discovery", "Scoping", "Iteration", "Stakeholder alignment"],
	},
];

export default function Skills() {
	return (
		<section className="skills section reveal" id="skills">
			<div className="section-heading">
				<p className="eyebrow">Capabilities</p>
				<h2>Tools are useful. Judgment is the multiplier.</h2>
				<p>
					I focus on the practices that keep teams shipping: clear interfaces,
					healthy feedback loops, and technical decisions that age well.
				</p>
			</div>

			<div className="skills__grid">
				{skillGroups.map((group) => (
					<article className="skill-card" key={group.title}>
						<h3>{group.title}</h3>
						<ul>
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}
