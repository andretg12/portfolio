import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
