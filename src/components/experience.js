import React from 'react';
import Button from './button.js';

class Experience extends React.Component {
	render(){
		return(
			<div className='Experience Grid-Item'>
				<div className='Grid-Item-Tag'>
					Experience
				</div>
				<div className='Experience-Content Grid-Item-Content'>
					<div className='Experience-Content-Section'>
						<p className='Experience-Content-Section-Title'><i className="fas fa-briefcase"></i>Full-Stack Engineer</p>
						<p className='Experience-Content-Section-Subtitle'>
							<i className="fas fa-building"></i>
							<a href='https://www.linkedin.com/company/pacific-magazines/' target='_blank'>Pacific Magazines</a>
							<i className="fas fa-calendar-alt"></i>Mar 2018 - Present
						</p>
						<ul className='Experience-Content-Section-Description'>
							<li>Building content management and E-commerce platform with several languages and frameworks across front-end and back-end (ASP.Net MVC / Node.js / React, etc.)</li>
							<li>Working collaboratively with developers and designers in an Agile team</li>
						</ul>
					</div>
					<div className='Experience-Content-Section'>
						<p className='Experience-Content-Section-Title'><i className="fas fa-graduation-cap"></i>Master of Interaction Design</p>
						<p className='Experience-Content-Section-Subtitle'>
							<i className="fas fa-building"></i>
							<a href='https://www.linkedin.com/school/university-of-sydney/' target='_blank'>University of Sydney</a>
							<i className="fas fa-calendar-alt"></i>Jul 2016 - Jun 2018
						</p>
						<ul className='Experience-Content-Section-Description'>
							<li>Designed solutions with user-centred methods</li>
							<li>Prototyped rapidly with programming languages</li>
							<li>Prensented visually with storytelling techniques</li>
						</ul>
					</div>
					<Button link='/media/resume_junwenchen.pdf' copy='Resume' className='About-Content-Resume'>
						<i className="fas fa-file-pdf"></i>
					</Button>
				</div>
			</div>
		)
	}
}

export default Experience;