import React from 'react';
import Button from './button.js';

class Works extends React.Component {
	render(){
		return(
			<div className='works'>
				<div className='portfolio'>
					<a href='/media/portfolio_junwenchen.pdf' target='_blank'>
						<i className="fas fa-file-pdf"></i>
						View Portfolio
					</a>
				</div>
				<br />
				<Button link='/contact' copy='Contact Me' />
			</div>
		)
	}
}

export default Works;