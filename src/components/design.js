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
					<Button link='/media/portfolio_junwenchen.pdf' copy='Portfolio' className='Design-Content-Link'>
						<i className="fas fa-file-pdf"></i>
					</Button>
				</div>
			</div>
		)
	}
}

export default Design;