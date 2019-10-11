import React from "react";
import "./index.scss";

export default function About() {
	return (
		<div id="about">
			<div className="jumbotron">
				<h1 className="display-4">About Me</h1>
				<article className="row">
					<div className="col-sm-12 col-md-6">
						{/* <img
						className="abt-img"
						src="https://images.unsplash.com/photo-1517353334933-3365be5c8ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
						alt="soundboard"
					/> */}
						<span role="img" aria-label="Venezuela Flag" className="vzla">
							🇻🇪
						</span>
					</div>
					<div className="col-sm-12 col-md-6">
						<p className="lead">
							Ambitious and passionate developer looking to develop his skills
							gathered in the Road to Hire program. My passion for tech began
							very early with the influence of my father, but I did not pursue
							this passion more deeply until the Road to Hire program where I
							developed myself profesionally and technically. The technologies I
							learned are going to be listed below this section.
						</p>
						<p className="lead">
							Another thing I am really passionate about too is music. I've
							always loved music, coming from a very musical family I always
							heard how difficult it was to set up music events, and that's what
							gave me the idea for my eCommerce website which is the project I'm
							most proud about.
						</p>
						<p className="lead"></p>
					</div>
				</article>
			</div>
		</div>
	);
}
