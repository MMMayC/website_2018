import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/main.less';

class Nav extends React.Component {
	render() {
		return(
			<div className={style.nav}>
				<ul>
					<li><Link to='/'></Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/works'>Works</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
				</ul>
			</div>
		)
	}
}

export default Nav;