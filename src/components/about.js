import React from 'react';
import Button from './button.js';

class About extends React.Component {
	render(){
		return(
			<div className='about'>
				<div className='profile'>
					<img className='profile_photo' src='/media/profile_2018_square.jpg' />
					<div className='profile_intro'>
						<p>Hi, I'm Junwen. I'm a Web Developer and Experience Designer.</p>
						<p>I think design and development are both essential in delivering solutions to users, in which one could not exist without the other. I’m passionate about building empathy with people, and designing satisfying experiences for them. I also enjoy developing a lot as it makes things happen and brings design to life.</p>
						<p>My skills cross a broad range and I'm always up for learning new things.</p>
					</div>
					<div className='prifile_resume'>
						<a href='/media/resume_junwenchen.pdf' target='_blank'>
							<i className="fas fa-file-pdf"></i>
							View Resume
						</a>
					</div>
					<br />
					<Button link='/works' copy='My Works' />
				</div>
			</div>
		)
	}
}

export default About;