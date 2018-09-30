import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Portfolio from './components/portfolio.js';
import Experience from './components/experience.js';
import style from './style/index.less';

class Main extends React.Component {
	render(){
		return(
			<div className='Grid'>
				<Home />
				<About />
				<Experience />
				<Portfolio />
				<Contact />
			</div>
		)
	}
}

export default Main;