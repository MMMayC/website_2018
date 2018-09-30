import React from 'react';

class Home extends React.Component {
	render(){
		return(
			<div className='Home Grid-Item'>
				<img src='media/jc_logo.svg' className='Home-Logo' />
				<div className='Home-Copy'>
					<h1 className='Home-Title'>Junwen Chen</h1>
					<p className='Home-Subtitle'>Code for life / Design for fun</p>
				</div>
			</div>
		)
	}
}

export default Home;