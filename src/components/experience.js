import React from 'react';

class Experience extends React.Component {
	render(){
		return(
			<div className='Experience Grid-Item'>
				<div className='Grid-Item-Tag'>
					Experience
				</div>
				<div className='Experience-Content'>
					<div className='Experience-Content-Section'>
						<p><i class="fas fa-briefcase"></i> Full-Stack Developer</p>
						<div>Pacific Magazines, Mar 2018 - Present</div>
					</div>
					<div className='Experience-Content-Section'>
						<p><i class="fas fa-graduation-cap"></i> Master of Interaction Design</p>
						<div>University of Sydney, 2016 - 2018</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience;