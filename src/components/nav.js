import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.toggleMenuMobile = this.toggleMenuMobile.bind(this);
		this.toggleMenuItemActiveDesktop = this.toggleMenuItemActiveDesktop.bind(this);
		this.toggleMenuItemActiveMobile = this.toggleMenuItemActiveMobile.bind(this);
	}
	toggleMenuMobile() {
		// let menuItems = document.getElementsByClassName('Menu-Mobile-List-Item');
		// [...menuItems].forEach((menuItem) => {
		// 	menuItem.classList.toggle('Display--block');
		// });
		document.getElementsByClassName('Menu-Mobile-Toggle')[0].classList.toggle('Display--none');
		document.getElementsByClassName('Menu-Mobile-List')[0].classList.toggle('Display--block');
		document.getElementsByClassName('Menu-Mobile-Close')[0].classList.toggle('Display--block');
	}
	toggleMenuItemActiveDesktop = (e) => {
		let currentActive = document.getElementsByClassName('Menu-Desktop-List-Item--active');
		currentActive[0].classList.remove('Menu-Desktop-List-Item--active');
		e.target.classList.add('Menu-Desktop-List-Item--active');
	}
	toggleMenuItemActiveMobile = (e) => {
		let currentActive = document.getElementsByClassName('Menu-Mobile-List-Item--active');
		currentActive[0].classList.remove('Menu-Mobile-List-Item--active');
		e.target.classList.add('Menu-Mobile-List-Item--active');
		this.toggleMenuMobile();
	}

	render() {
		return(
			<div className='Nav'>
				<Link to='/'><img src='media/jc_logo.svg' className='Nav-Logo' /></Link>
				<div className='Menu-Mobile'>
					<div className='Menu-Mobile-Toggle' id='MenuMobileToggle' onClick={this.toggleMenuMobile}>
						<i className="fas fa-bars"></i>
					</div>
					<div className='Menu-Mobile-Close' id='MenuMobileClose' onClick={this.toggleMenuMobile}>
						<i className="fas fa-times"></i>
					</div>
					<ul className='Menu-Mobile-List'>
						<li><Link className='Menu-Mobile-List-Item Menu-Mobile-List-Item--active' onClick={this.toggleMenuItemActiveMobile} to='/'>Home</Link></li>
						<li><Link className='Menu-Mobile-List-Item' onClick={this.toggleMenuItemActiveMobile} to='/about'>About</Link></li>
						<li><Link className='Menu-Mobile-List-Item' onClick={this.toggleMenuItemActiveMobile} to='/works'>Works</Link></li>
						<li><Link className='Menu-Mobile-List-Item' onClick={this.toggleMenuItemActiveMobile} to='/contact'>Contact</Link></li>
					</ul>
				</div>
				<div className='Menu-Desktop'>
					<ul className='Menu-Desktop-List'>
						<li><Link className='Menu-Desktop-List-Item Menu-Desktop-List-Item--active' onClick={this.toggleMenuItemActiveDesktop} to='/'>Home</Link></li>
						<li><Link className='Menu-Desktop-List-Item' onClick={this.toggleMenuItemActiveDesktop} to='/about'>About</Link></li>
						<li><Link className='Menu-Desktop-List-Item' onClick={this.toggleMenuItemActiveDesktop} to='/works'>Works</Link></li>
						<li><Link className='Menu-Desktop-List-Item' onClick={this.toggleMenuItemActiveDesktop} to='/contact'>Contact</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;