import React from 'react';
import { Link } from 'react-router-dom';

class Works extends React.Component {
	render(){
		return(
			<div className='works'>
				<div className='portfolio'>
					<a href='/media/portfolio_junwenchen.pdf' target='_blank'><i className="fas fa-file-pdf"></i> View Portfolio</a>
				</div>
				<br />
				<div className='button'>
					<Link to='/contact' className='button_link'>Contact Me</Link>
				</div>
			</div>
		)
	}
}

export default Works;