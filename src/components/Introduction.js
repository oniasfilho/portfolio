import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Introduction = () => {
	return (
		<div className='introduction-wrapper'>
			<div className='header-section'>
				<div className='header-left-column'>
					<div className='logo-section'>oniasfilho</div>
				</div>
				<div className='header-right-column'>
					<div className='socials-header-wrapper'>
						<div className='empty-space'></div>
						<div className='socials-header-section'>
							<p>
								<FontAwesomeIcon icon={faGithub} size='xl' />
							</p>
							<p>
								<FontAwesomeIcon icon={faLinkedinIn} size='xl' />
							</p>
							<p>
								<FontAwesomeIcon icon={faTwitter} size='xl' />
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='introduction-content-section'>
				<div className='introduction-left-column'>
					<div className='greeting-text'>
						<p className='greeting-paragraph'>
							Nice to meet you! I'm{' '}
							<span className='underlined-portion'>Onias Filho.</span>
						</p>
					</div>
					<div className='description-text'>
						Based in Brazil, I'm a full-stack developer passionate about
						building accessible web apps that users love.
					</div>
					<div className='contact-me-button'>
						<span className='underlined-portion-sm'>contact-me</span>
					</div>
				</div>
				<div className='introduction-right-column'>
					<div className='my-picture-section'></div>
				</div>
			</div>
		</div>
	);
}

export default Introduction