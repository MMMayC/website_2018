import React from 'react';

class Home extends React.Component {
	render(){
		return(
			<div className='Home Grid-Item'>
				<img src='media/jc_logo.svg' className='Home-Logo' />
				<div className='Home-Content'>
					<h1 className='Home-Content-Title'>Junwen Chen</h1>
					<p className='Home-Content-Subtitle'>Developer / Designer</p>
					<p className='Home-Content-Email'>
						<a href='mailto:mayjunwenchen@gmail.com' className='Home-Content-Link'> mayjunwenchen@gmail.com</a>
					</p>
					<p className='Home-Content-Social'>
						<a className='Home-Content-Link' href='https://www.linkedin.com/in/junwenchen/' target='_blank'>
							<i className='fab fa-linkedin'></i>
						</a>
						<a className='Home-Content-Link' href='https://github.com/MMMayC' target='_blank'>
							<i className='fab fa-github-square'></i>
						</a>
					</p>
				</div>
			</div>
		)
	}
}

export default Home;