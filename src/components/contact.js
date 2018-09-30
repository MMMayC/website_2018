import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<div className='Contact Grid-Item'>
				<div className='Grid-Item-Tag'>
					Contact
				</div>
				<div className='Contact-Content'>
					<div className='Contact-Content-Email'>
						<i class="fas fa-envelope"></i>
						<a href='mailto:mayjunwenchen@gmail.com' className='Email--Link'> mayjunwenchen@gmail.com</a>
					</div>
					<div className='Contact-Content-Social'>
						<a className='Contact-Content-Social-Link' href='https://www.linkedin.com/in/junwenchen/' target='_blank'>
							<i className='fab fa-linkedin fa-2x'></i>
						</a>
						<a className='Contact-Content-Social-Link' href='https://github.com/MMMayC' target='_blank'>
							<i className='fab fa-github-square fa-2x'></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;