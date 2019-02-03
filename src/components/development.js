import React from 'react';
import Project from './project';
class Development extends React.Component {
	render(){
		return(
			<div className='Development Grid-Item'>
				<div className='Grid-Item-Tag'>
					Coding
				</div>
				<div className='Development-Content Grid-Item-Content'>
					<ul className='Development-Content-Intro'>
						<li>Large projects - Good knowledge in software design patterns (SOLID / BEM), source control (Git), continuous integration, etc.</li>
						<li>Rapid prototyping - Bringing the ideas to prototypes rapidly with React, Node.js and AWS tools. </li>
						<li>Creative coding - Producing generative interactive artworks with p5.js and three.js.</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Development;