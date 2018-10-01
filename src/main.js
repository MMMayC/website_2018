import React from 'react';
import Home from './components/home.js';
import About from './components/about.js';
import Development from './components/development.js';
import Design from './components/design.js';
import Experience from './components/experience.js';
import './style/index.less';

class Main extends React.Component {
	render(){
		return(
			<div className='Grid'>
				<Home />
				<About />
				<Experience />
				<Design />
				<Development />
			</div>
		)
	}
}

export default Main;