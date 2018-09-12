import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.toggle_menu_mobile = this.toggle_menu_mobile.bind(this);
	}
	toggle_menu_mobile(){
		let menu_items = document.getElementsByClassName('menu_list_item');
		[...menu_items].forEach((menu_item) => {
			menu_item.classList.toggle('display_block');
		});
		document.getElementById('menu_mobile').classList.toggle('display_none');
		document.getElementById('menu_mobile_close').classList.toggle('display_block');
	}
	render() {
		return(
			<div className='Nav'>
				<Link to='/'><img src='media/jc_logo.svg' className='logo' /></Link>
				<div className='menu'>
					<div className='menu_mobile' id='menu_mobile' onClick={this.toggle_menu_mobile}>
						<i className="fas fa-bars"></i>
					</div>
					<div className='menu_mobile menu_mobile_close' id='menu_mobile_close' onClick={this.toggle_menu_mobile}>
						<i className="fas fa-times"></i>
					</div>
					<ul className='menu_list'>
						<li className='menu_list_item'><Link to='/about'>About</Link></li>
						<li className='menu_list_item'><Link to='/works'>Works</Link></li>
						<li className='menu_list_item'><Link to='/contact'>Contact</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;