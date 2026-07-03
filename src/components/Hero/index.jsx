import React from "react";
import "./index.scss";

export default function Hero() {
	return (
		<section className="hero section" id="home">
			<div className="hero__content reveal">
				<p className="eyebrow">Lead Engineer / Frontend Architecture</p>
				<h1>Building durable web experiences with product-minded engineering.</h1>
				<p className="hero__summary">
					I'm Andre Torrealba, a Lead Engineer focused on modern React
					interfaces, clean delivery systems, and pragmatic technical direction.
				</p>

				<div className="hero__actions" aria-label="Primary actions">
					<a className="button button--primary" href="#portfolio">
						View work
					</a>
					<a className="button button--secondary" href="#contact">
						Get in touch
					</a>
				</div>
			</div>

			<div className="hero__visual reveal reveal--delay">
				<div className="profile-card" aria-label="Andre Torrealba profile">
					<div className="profile-card__avatar" aria-hidden="true">
						AT
					</div>
					<div>
						<p className="profile-card__label">Currently focused on</p>
						<p className="profile-card__title">Design systems, React, delivery</p>
					</div>
				</div>

				<ul className="hero__stats" aria-label="Engineering strengths">
					<li>
						<strong>React</strong>
						<span>Modern UI systems</span>
					</li>
					<li>
						<strong>Lead</strong>
						<span>Technical direction</span>
					</li>
					<li>
						<strong>Ship</strong>
						<span>Reliable releases</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
