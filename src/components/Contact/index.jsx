import React from "react";
import "./index.scss";

const links = [
	{
		label: "GitHub",
		href: "https://github.com/andretg12",
		shortLabel: "GH",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/andre-torrealba-garcia-52baa2187/",
		shortLabel: "IN",
	},
	{
		label: "Email",
		href: "mailto:andre.torrealba@icloud.com?subject=Contact%20from%20Portfolio",
		shortLabel: "@",
	},
];

const Contact = () => {
	return (
		<footer className="contact section reveal" id="contact">
			<div className="contact__panel">
				<div>
					<p className="eyebrow">Contact</p>
					<h2>Have a product or platform problem worth untangling?</h2>
					<p>
						Reach out if you want to talk about frontend architecture,
						engineering leadership, or modernizing a web experience.
					</p>
				</div>

				<div className="contact__links" aria-label="Contact links">
					{links.map((link) => (
						<a
							href={link.href}
							key={link.label}
							rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
							target={link.href.startsWith("http") ? "_blank" : undefined}
							aria-label={`${link.label}${link.href.startsWith("http") ? " opens in a new tab" : ""}`}
						>
							<span aria-hidden="true">{link.shortLabel}</span>
							{link.label}
						</a>
					))}
				</div>
			</div>

			<p className="contact__meta">
				Designed and built by Andre Torrealba. Updated for a modern static
				deploy pipeline.
			</p>
		</footer>
	);
};
export default Contact;
