import React from 'react';

class About extends React.Component {
	render(){
		return(
			<div className='About Grid-Item'>
				<div className='Grid-Item-Tag'>
					About
				</div>
				<div className='About-Content Grid-Item-Content'>
					<img className='About-Content-Photo' src='/media/profile_2018_square.jpg' />
					<div className='About-Content-Intro'>
						<p>Hey, I'm Junwen. I'm a full-stack developer and UX designer.</p>
						<p>I'm passionate about writing high-quality code. I have a wide range of skills (.NET / Javascript / Node.js / React / AWS, etc.) and can quickly pick up new technologies. Thanks to my experience in design, I always keep end-users in mind and have a keen eye for detail.</p>
						<p>I believe technology only makes a difference when it solves a problem. I love finding problems in real life, coming up with solutions using Design Thinking methods and then implementing the solutions with technologies.</p>
						<p>My side hustle is coaching design students creative coding. I enjoy it because I like helping people to make their cool ideas happen. </p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;