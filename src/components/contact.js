import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<div className='Contact'>
				<div>
					<h3>EMAIL</h3>
					<div className='Email'><a href='mailto:mayjunwenchen@gmail.com' className='Email--Link'>mayjunwenchen@gmail.com</a></div>
				</div>
				<div>
					<h4>or</h4>
					<h3>FIND ME ON</h3>
					<div className='Social'>
						<a className='Social--Link' href='https://www.linkedin.com/in/junwenchen/' target='_blank'>
							<i className='fab fa-linkedin fa-3x'></i>
						</a>
						<a className='Social--Link' href='https://github.com/MMMayC' target='_blank'>
							<i className='fab fa-github-square fa-3x'></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;