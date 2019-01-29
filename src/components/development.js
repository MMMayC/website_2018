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
						<li>Large Projects - Good knowledge in software design patterns (SOLID / BEM), source control (Git), continuous integration, etc.</li>
						<li>Rapid Prototyping - Bringing the ideas to prototypes rapidly with React, Node.js and AWS tools. </li>
						<li>Creative Coding - Producing generative interactive artworks with p5.js and three.js.</li>
					</ul>
					<div className='Development-Content-Projects'>
						<Project 
						tag="Prototype"
						name="The Gnashes"
						tech="React / Node.js / Serverless"
						link="http://gnashes.junwenchen.com" />
						<Project
						tag="Creative"
						name="Birthday Girl"
						tech="p5.js"
						link="https://www.openprocessing.org/sketch/659537" />
						<Project
						tag="Creative"
						name="LOVE"
						tech="p5.js"
						link="https://www.openprocessing.org/sketch/478249" />
					</div>
				</div>
			</div>
		)
	}
}

export default Development;