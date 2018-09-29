import React from 'react';
import Button from './button.js';

class Home extends React.Component {
	render(){
		return(
			<div className='Home'>
				<h1 className='Home-Title'>Junwen Chen</h1>
				<h2 className='Home-Subtitle'>A Passionate Full-Stack Developer & Experience Designer</h2>
				<Button link='/about' copy='More About Me' />
			</div>
		)
	}
}

export default Home;