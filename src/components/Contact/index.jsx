import React, { Component } from "react";
import "./index.scss";

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: null,
			email: null,
			message: null,
			errors: {
				fullName: "",
				email: "",
				message: ""
			}
		};
	}

	validEmailRegex = RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	validateForm = errors => {
		let valid = true;
		// Set valid=false if a single error exists
		Object.values(errors).forEach(val => val.length > 0 && (valid = false));
		return valid;
	};

	handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case "fullName":
				errors.fullName =
					value.length < 5 ? "Full Name must be 5 characters long!" : "";
				break;
			case "email":
				errors.email = this.validEmailRegex.test(value)
					? ""
					: "Email is not valid!";
				break;
			case "message":
				errors.message =
					value.length < 8 ? "Message must be 8 characters long!" : "";
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });
	};

	handleSubmit = async event => {
		event.preventDefault();

		if (this.validateForm(this.state.errors)) {
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact-me", ...this.state })
			}).then(res => console.log(res.json()));

			console.info("Valid Form");
		} else {
			console.error("Invalid Form");
		}
	};

	render() {
		const { errors } = this.state;
		return (
			<div>
				<section className="hero">
					<div className="hero-inner">
						<h1>Contact us</h1>
					</div>
				</section>
				<div className="wrapper">
					<div className="form-wrapper">
						<form
							onSubmit={this.handleSubmit}
							noValidate
							className="subscribe-form"
						>
							<div className="fullName">
								<label htmlFor="fullName">Full Name</label>
								<input
									type="text"
									name="fullName"
									onChange={this.handleChange}
									noValidate
								/>
								{errors.fullName.length > 0 && (
									<span className="error">{errors.fullName}</span>
								)}
							</div>
							<div className="email">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									onChange={this.handleChange}
									noValidate
								/>
								{errors.email.length > 0 && (
									<span className="error">{errors.email}</span>
								)}
							</div>
							<div className="message">
								<label htmlFor="message">Message</label>
								<input
									type="text"
									name="message"
									onChange={this.handleChange}
									noValidate
								/>
								{errors.message.length > 0 && (
									<span className="error">{errors.message}</span>
								)}
							</div>
							<div className="info">
								<small>Message must be eight characters in length.</small>
							</div>
							<div className="submit">
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Contact;
