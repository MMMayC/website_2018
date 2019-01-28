import React from 'react';
import Button from './button.js';

class Design extends React.Component {
	render(){
		return(
			<div className='Design Grid-Item'>
				<div className='Grid-Item-Tag'>
					Design
				</div>
				<div className='Design-Content Grid-Item-Content'>
					<div className='Design-Content-Intro'>
						<p>As a designer, I have been involved in visual design, user experience and public installation projects. I see design as a problem solving process.</p>
					</div>					
					<Button link='/media/portfolio_junwenchen.pdf' copy='Portfolio' className='Design-Content-Link'>
						<i className="fas fa-file-pdf"></i>
					</Button>
				</div>
			</div>
		)
	}
}

export default Design;