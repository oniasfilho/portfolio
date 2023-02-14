import React from 'react'

const Contact = () => {
	return (
		<div className="contact-wrapper">
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
								<input type="text" id="name" name="name" placeholder='Name' required/>
								<input type="email" id="email" name="email" placeholder='Email' required/>
								<textarea id="message" name="message" placeholder='Message' required></textarea>
							</div>
						</form>
					</div>
					<div className="submit-button-wrapper">
						<div className='message-me-button'>
						<span className='underlined-portion-sm'>send message</span>
					</div>
					</div>
				</div>
			</div>
			<div className="contact-lower-section">
				<div className="footer-logo">oniasfilho</div>
				<div className="footer-socials">github linkedin blablabla</div>
			</div>
		</div>
	)
}

export default Contact