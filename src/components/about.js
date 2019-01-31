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
						<p>At work, I'm a full-stack developer with a passion writing high-quality code. I have a wide range of skills (.NET / Javascript / Node.js / React / AWS, etc.) and can pick up new technologies quickly. And thanks to my experience in design, I always keep end-users in mind and have a keen eye for detail.</p>
						<p>As a UX designer, I believe technology cannot make a difference if it doesn't solve a problem. I love finding problems in real life and coming up with solutions using Design Thinking methods. Then I implement the solutions with technologies. Check out my projects below.</p>
						<p>My side husstle is to coach design students creative coding. I enjoy it because I like helping people to make their cool ideas happen. </p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;