import React from 'react';

class Home extends React.Component {
	render(){
		return(
			<div className='Home Grid-Item'>
				<img src='media/jc_logo.svg' className='Home-Logo' />
				<div className='Home-Copy'>
					<h1 className='Home-Title'>Junwen Chen</h1>
					<p className='Home-Subtitle'>Developer / Designer</p>
					<p className='Home-Contact-Email'>
						<a href='mailto:mayjunwenchen@gmail.com' className='Home-Contact-Link'> mayjunwenchen@gmail.com</a>
					</p>
					<p className='Home-Contact-Social'>
						<a className='Home-Contact-Link' href='https://www.linkedin.com/in/junwenchen/' target='_blank'>
							<i className='fab fa-linkedin'></i>
						</a>
						<a className='Home-Contact-Link' href='https://github.com/MMMayC' target='_blank'>
							<i className='fab fa-github-square'></i>
						</a>
					</p>
				</div>
			</div>
		)
	}
}

export default Home;