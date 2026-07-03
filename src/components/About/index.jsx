import React from "react";
import "./index.scss";

export default function About() {
	return (
		<section className="about section section-card reveal" id="about">
			<div>
				<p className="eyebrow">About</p>
				<h2>Engineering leadership with a maker's bias.</h2>
			</div>

			<div className="about__grid">
				<div className="about__copy">
					<p>
						I connect product goals with maintainable frontend architecture,
						helping teams ship interfaces that are fast, accessible, and easy to
						iterate on.
					</p>
					<p>
						My background started with hands-on software development and grew
						into leading delivery, mentoring engineers, and bringing clarity to
						ambiguous product spaces.
					</p>
				</div>

				<div className="about__highlights" aria-label="Professional highlights">
					<article>
						<span>01</span>
						<strong>Modernize legacy interfaces</strong>
						<p>Upgrade aging tools while keeping production risk controlled.</p>
					</article>
					<article>
						<span>02</span>
						<strong>Raise delivery quality</strong>
						<p>Improve build, review, and release paths so teams move faster.</p>
					</article>
					<article>
						<span>03</span>
						<strong>Mentor through systems</strong>
						<p>Use standards, examples, and feedback loops to scale judgment.</p>
					</article>
				</div>
			</div>
		</section>
	);
}
