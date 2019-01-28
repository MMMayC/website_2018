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
						<p>My passion is in building beautiful user experience with high-quality code. I have experience across the board and always up to learn new technologies. With experience in design, I have a keen eye for details and can work collaboratively with designers. In a team, I’m dedicated to Agile methodology and I value clear and open communication.</p>
						<p>My side husstle is to coach design students coding. I enjoy it because I like helping them to make their cool ideas happen. </p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;