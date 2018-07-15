import React from 'react';
import style from '../style/contact.less';

class Contact extends React.Component {
	render(){
		return(
			<div className='contact'>
				<a href='https://www.linkedin.com/in/junwenchen/' target='_blank'>
					<i className={style.social_icon + ' fab fa-linkedin fa-3x'}></i>
				</a>
				<a href='https://github.com/MMMayC' target='_blank'>
					<i className={style.social_icon + ' fab fa-github-square fa-3x'}></i>
				</a>
			</div>
		)
	}
}

export default Contact;