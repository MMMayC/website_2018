import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.toggleMenuMobile = this.toggleMenuMobile.bind(this);
		this.toggleMenuItemActive = this.toggleMenuItemActive.bind(this);
	}
	toggleMenuMobile() {
		let menuItems = document.getElementsByClassName('Menu-List-Item');
		[...menuItems].forEach((menuItem) => {
			menuItem.classList.toggle('Display--block');
		});
		document.getElementById('MenuMobile').classList.toggle('Display--none');
		document.getElementsByClassName('Menu-List')[0].classList.toggle('Display--block');
		document.getElementById('MenuMobileClose').classList.toggle('Display--block');
	}
	toggleMenuItemActive = (e) => {
		let currentActive = document.getElementsByClassName('Menu-List-Item--active');
		currentActive[0].classList.remove('Menu-List-Item--active');
		e.target.classList.add('Menu-List-Item--active');
	}

	render() {
		return(
			<div className='Nav'>
				<Link to='/'><img src='media/jc_logo.svg' className='logo' /></Link>
				<div className='Menu'>
					<div className='Menu-Mobile' id='MenuMobile' onClick={this.toggleMenuMobile}>
						<i className="fas fa-bars"></i>
					</div>
					<div className='Menu-Mobile Menu-Mobile-Close' id='MenuMobileClose' onClick={this.toggleMenuMobile}>
						<i className="fas fa-times"></i>
					</div>
					<ul className='Menu-List'>
						<li><Link className='Menu-List-Item Menu-List-Item--active' onClick={this.toggleMenuItemActive} to='/'>Home</Link></li>
						<li><Link className='Menu-List-Item' onClick={this.toggleMenuItemActive} to='/about'>About</Link></li>
						<li><Link className='Menu-List-Item' onClick={this.toggleMenuItemActive} to='/works'>Works</Link></li>
						<li><Link className='Menu-List-Item' onClick={this.toggleMenuItemActive} to='/contact'>Contact</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;