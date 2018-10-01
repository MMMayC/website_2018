import React from 'react';

class Experience extends React.Component {
	render(){
		return(
			<div className='Experience Grid-Item'>
				<div className='Grid-Item-Tag'>
					Experience
				</div>
				<div className='Experience-Content Grid-Item-Content'>
					<div className='Experience-Content-Section'>
						<p className='Experience-Content-Section-Title'><i className="fas fa-briefcase"></i>Full-Stack Developer</p>
						<p className='Experience-Content-Section-Subtitle'>
							<i className="fas fa-building"></i>
							<a href='https://www.pacificmags.com.au/' target='_blank'>Pacific Magazines</a>
						</p>
						<p className='Experience-Content-Section-Subtitle'><i className="fas fa-calendar-alt"></i>Mar 2018 - Present</p>
						<ul className='Experience-Content-Section-Description'>
							<li>Working across front-end and back-end</li>
							<li>Writing qualified code that passes design/coding review</li>
							<li>Agile & Scrum environment</li>
							<li>Less.js / React / .Net</li>
						</ul>
					</div>
					<div className='Experience-Content-Section'>
						<p className='Experience-Content-Section-Title'><i className="fas fa-graduation-cap"></i>Master of Interaction Design</p>
						<p className='Experience-Content-Section-Subtitle'>
							<i className="fas fa-building"></i>
							<a href='https://en.wikipedia.org/wiki/University_of_Sydney' target='_blank'>University of Sydney</a>
						</p>
						<p className='Experience-Content-Section-Subtitle'><i className="fas fa-calendar-alt"></i>Jul 2016 - Jun 2018</p>
						<ul className='Experience-Content-Section-Description'>
							<li>Designed solutions with user-centred methods</li>
							<li>Prototyped rapidly with programming languages</li>
							<li>Prensented visually with storytelling techniques</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience;