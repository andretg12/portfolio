import React from "react";
import "./index.scss";

export default function About() {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">About Me</h1>
				<div className="half">
					<img
						className="abt-img"
						src="https://static1.squarespace.com/static/59bff878e9bfdf14c20dc183/t/5a5936b153450a1dce284eea/1568132017911/?format=1500w"
					/>
					<span role="img" aria-label="Venezuela Flag" className="vzla">
						🇻🇪
					</span>
				</div>
				<div className="half">
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
						amet metus mi. Nulla vel urna condimentum mi faucibus porttitor.
						Fusce eleifend purus in sem bibendum, eget vehicula dolor rhoncus.
						Sed quam metus, rutrum non maximus vitae, aliquam ac ante. Sed
						euismod lectus quis scelerisque sagittis. Pellentesque sed lorem
						gravida, dapibus urna in, euismod dolor. Nunc rhoncus placerat
						scelerisque. Nullam quis mollis quam, dictum pretium mi. Vestibulum
						at ante sit amet nisl vestibulum viverra quis tincidunt quam. Mauris
						iaculis feugiat nulla, a luctus sapien feugiat sit amet. Mauris sed
						feugiat odio. Mauris sed dignissim mi. Aliquam eget consectetur
						libero. Vestibulum vehicula justo ante, ut vehicula lorem
						condimentum nec. Curabitur id luctus nulla. Mauris ullamcorper, elit
						a bibendum ullamcorper, nunc urna vehicula dolor, quis lacinia lacus
						felis sit amet mauris. Aenean quis lorem condimentum, commodo ligula
						eu, bibendum massa. Vivamus vitae dui in velit suscipit convallis.
						Phasellus viverra eleifend mollis. Aliquam consequat augue pretium
						dictum scelerisque. Mauris ut molestie ipsum, a egestas dolor.
					</p>
					<p className="lead"></p>
				</div>
			</div>
		</div>
	);
}
