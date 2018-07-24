import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render(){
		return(
			<div className='home'>
				<h1>Junwen Chen</h1>
				<h2>A Passionate Web Developer & Experience Designer</h2>
				<div className='button_wrapper'>
					<Link to='/about' className='more_about_me'>More About Me</Link>
				</div>
			</div>
		)
	}
}

export default Home;