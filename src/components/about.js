import React from 'react';
import Button from './button.js';

class About extends React.Component {
	render(){
		return(
			<div className='About Grid-Item'>
				<div className='Grid-Item-Tag'>
					About
				</div>
				<div className='About-Content'>
					<img className='About-Content-Photo' src='/media/profile_2018_square.jpg' />
					<Button link='/media/resume_junwenchen.pdf' copy='Resume' className='About-Content-Resume'>
						<i className="fas fa-file-pdf"></i>
					</Button>
					<div className='About-Content-Intro'>
						<p>Hey, I'm Junwen. I'm a full-stack Web developer and UX designer.</p>
						<p>I think design and development are both essential in delivering solutions to users, in which one could not exist without the other. I’m passionate about building empathy with people, and designing satisfying experiences for them. I also enjoy developing a lot as it makes things happen and brings design to life.</p>
					</div>				
				</div>
			</div>
		)
	}
}

export default About;