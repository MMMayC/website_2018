import React from 'react';
import style from '../style/contact.less';

class Contact extends React.Component {
	render(){
		return(
			<div className='contact'>
				<i className={style.social_icon + ' fab fa-linkedin fa-3x'}></i>
				<i className={style.social_icon + ' fab fa-github-square fa-3x'}></i>
			</div>
		)
	}
}

export default Contact;