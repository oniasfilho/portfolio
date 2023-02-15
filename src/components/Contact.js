import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [invalidFields, setInvalidFields] = useState([])

	const handleChangeForm = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value
		}));
	}

	const handleSendMessage = () => {
		const invalidFields = [];
		if (!form.name) {
			invalidFields.push("name");
		}
		if (!form.email) {
			invalidFields.push("email");
		}
		if (!/\S+@\S+\.\S+/.test(form.email)) {
			invalidFields.push("email");
		}
		if (!form.message) {
			invalidFields.push("message");
		}
		setInvalidFields(invalidFields);
		if (invalidFields.length === 0) {
			// If all fields are valid, submit the form
			console.log("Form submitted:", form);
		}
	}

	return (
		<div className="contact-wrapper">
			<div className="inner-contact-wrapper">
				<div className="contact-upper-section">
					<div className="contact-left-column">
						<p className="contact-text">Contact</p>
						<p className="contact-message">
							I would love to hear about your project and how I
							could help. Please fill in the form, and I'll get back to
							you as soon as possible.
						</p>
					</div>
					<div className="contact-right-column">
						<div className="form-wrapper">
							<form action="/submit-form" method="post">
								<div className="form-input">
									<input
										type="text"
										id="name"
										name="name"
										placeholder='Name'
										onChange={handleChangeForm}
										value={form.name}
										className={invalidFields.includes("name") ? "invalid-field" : ""}
									/>
									{invalidFields.includes("name") && (
										<p className="error-message">Sorry, invalid format here</p>
									)}
									<input
										type="email"
										id="email"
										name="email"
										placeholder='Email'
										onChange={handleChangeForm}
										value={form.email}
										className={invalidFields.includes("email") ? "invalid-field" : ""}
									/>
									{invalidFields.includes("email") && (
										<p className="error-message">Sorry, invalid format here</p>
									)}
									<textarea
										id="message"
										name="message"
										placeholder='Message'
										onChange={handleChangeForm}
										value={form.message}
										className={invalidFields.includes("message") ? "invalid-field" : ""}
										required
									>

										{invalidFields.includes("message") && (
											<p className="error-message">Sorry, invalid format here</p>
										)}
									</textarea>
								</div>
							</form>
						</div>
						<div className="submit-button-wrapper">
							<div className='message-me-button'>
								<span onClick={handleSendMessage} className='underlined-portion-sm'>send message</span>
							</div>
						</div>
					</div>
				</div>
				<div className="contact-lower-section">
					<div className="footer-logo">oniasfilho</div>
					<div className="footer-socials"><p>
						<FontAwesomeIcon icon={faGithub} size='xl' />
					</p>
						<p>
							<FontAwesomeIcon icon={faLinkedinIn} size='xl' />
						</p>
						<p>
							<FontAwesomeIcon icon={faTwitter} size='xl' />
						</p></div>
				</div>
			</div>
		</div>
	)
}

export default Contact