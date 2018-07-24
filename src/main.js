import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Works from './components/works.js';
import style from './style/main.less';

class Main extends React.Component {
	render(){
		return(
			<div className={style.container}>
				<Nav />
					<div className='content'>
					    <Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/about' component={About}/>
							<Route path='/works' component={Works}/>
							<Route path='/contact' component={Contact}/>
					    </Switch>
				    </div>
				<Footer />
			</div>
		)
	}
}

export default Main;