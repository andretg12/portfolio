import React, { useState } from "react";
import "./index.scss";

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Work", href: "#portfolio" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="site-header">
			<nav className="site-nav" aria-label="Primary navigation">
				<a className="brand" href="#home" onClick={() => setIsOpen(false)}>
					<span className="brand-mark" aria-hidden="true">
						AT
					</span>
					<span>Andre Torrealba</span>
				</a>

				<button
					className="nav-toggle"
					type="button"
					aria-expanded={isOpen}
					aria-controls="primary-navigation"
					onClick={() => setIsOpen((open) => !open)}
				>
					<span className="sr-only">Toggle navigation</span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>

				<ul
					className={`nav-links${isOpen ? " nav-links--open" : ""}`}
					id="primary-navigation"
				>
					{navItems.map((item) => (
						<li key={item.href}>
							<a href={item.href} onClick={() => setIsOpen(false)}>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
