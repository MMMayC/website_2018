import React from 'react';
import './style/index.less';
import Home from './components/home.js';
import About from './components/about.js';
import Development from './components/development.js';
import Design from './components/design.js';
import Experience from './components/experience.js';
import BackToTop from './components/backToTop.js';

class Main extends React.Component {
	render(){
		return(
			<div className='Grid'>
				<Home />
				<Experience />
				<About />
				<Design />
				<Development />
				<BackToTop />
			</div>
		)
	}
}

export default Main;