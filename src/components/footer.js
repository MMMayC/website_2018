import React from 'react';

class Footer extends React.Component {
	render() {
		return(
			<div className='Footer'>
				&copy; {new Date().getFullYear()} Junwen Chen
			</div>
		)
	}
}

export default Footer;