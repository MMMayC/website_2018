import React from 'react';
import Button from './button.js';

class Portfolio extends React.Component {
	render(){
		return(
			<div className='Portfolio Grid-Item'>
				<div className='Grid-Item-Tag'>
					Portfolio
				</div>
				<div className='Portfolio-Content'>
					<Button link='/media/portfolio_junwenchen.pdf' copy='Portfolio' className='Portfolio-Content-Link'>
						<i className="fas fa-file-pdf"></i>
					</Button>
				</div>
			</div>
		)
	}
}

export default Portfolio;