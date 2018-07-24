import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<div className='contact'>
				<div>
					<h4>If anything here interests you, I'd love to hear from you.</h4>
					<h3>EMAIL</h3>
					<div className='email_wrapper'><a href='mailto:mayjunwenchen@gmail.com' className='email'>mayjunwenchen@gmail.com</a></div>
				</div>
				<div>
					<h4>or</h4>
					<h3>FIND ME ON</h3>
					<div className='social_link_wrapper'>
						<a className='social_link' href='https://www.linkedin.com/in/junwenchen/' target='_blank'>
							<i className='fab fa-linkedin fa-3x'></i>
						</a>
						<a className='social_link' href='https://github.com/MMMayC' target='_blank'>
							<i className='fab fa-github-square fa-3x'></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;