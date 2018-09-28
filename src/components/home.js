import React from 'react';
import Button from './button.js';

class Home extends React.Component {
	render(){
		return(
			<div className='Home'>
				<h1>Junwen Chen</h1>
				<h2>A Passionate Web Developer & Experience Designer</h2>
				<Button link='/about' copy='More About Me' />
			</div>
		)
	}
}

export default Home;