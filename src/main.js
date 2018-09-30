import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Works from './components/works.js';
import Experience from './components/experience.js';
import style from './style/index.less';

class Main extends React.Component {
	render(){
		return(
			<div className='Container'>
				{/* <Nav />
					<div className='Content'>
					    <Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/about' component={About}/>
							<Route path='/works' component={Works}/>
							<Route path='/contact' component={Contact}/>
					    </Switch>
				    </div>
				<Footer /> */}
				<Home />
				<About />
				<Experience />
				<Works />
				<Contact />
			</div>
		)
	}
}

export default Main;