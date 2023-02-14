import React, { useEffect } from 'react';
import projects from './auxFiles/projects';

const Projects = () => {
	return (
		<div className='projects-section-wrapper'>
			<div className='projects-header-section'>
				<div className='grid-item'>
					<p className='project-section-title'>Projects</p>
				</div>
				<div className='grid-item'>
					<div className='contact-me-button'>
						<span className='underlined-portion-sm'>contact me</span>
					</div>
				</div>
			</div>
			<div className='projects-content-section'>
				{projects.map((each, id) => {
					return (
						<div className='single-project-wrapper' key={id}>
							<div
								className={`project-image-section project-1 ${each.className}`}
							></div>
							<p className='project-title'>{each.projectTitle}</p>
							<div className={`project-technologies-tags`}>
								{each.tags.map((tag, tagId) => {
									return <span key={tagId}>{`${tag} `}</span>;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
