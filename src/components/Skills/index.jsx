import React from "react";
import "./index.scss";

export default function Skills() {
	return (
		<section className="resume-section  p-lg-5 d-flex flex-column" id="skills">
			<div className="my-auto">
				<h2 className="mb-5">Programming Languages & Tools</h2>
				<ul className="list-inline dev-icons">
					<li className="list-inline-item">
						<i className="fab fa-apple"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-bootstrap"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-css3-alt"></i>
					</li>

					<li className="list-inline-item">
						<i className="fab fa-git-square"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-github"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-gitlab"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-html5"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-js"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-linux"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-microsoft"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-node"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-npm"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-react"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-sass"></i>
					</li>
					<li className="list-inline-item">
						<i className="fab fa-slack"></i>
					</li>
					<li className="list-inline-item">
						<img
							src="https://img.icons8.com/ios-filled/50/000000/mysql.png"
							alt="mysql icon"
						></img>
					</li>
				</ul>
				<article>
					<p className="lead">
						All of these languages and tools I have learned how to use them in 6
						months during my time in the Road to Hire program. If you're looking
						for someone who can learn fast then look no further.
					</p>
				</article>
			</div>
		</section>
	);
}
