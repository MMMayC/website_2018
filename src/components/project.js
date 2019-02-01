import React from 'react';

class Project extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		let projectDetail;
		if (this.props.problem) {
			projectDetail = 
			<div className="Project-Detail">
				<div className="Project-Detail-Header">The Problem</div>
				<div className="Project-Detail-Problem">
					{this.props.problem.map(each => {
						return <p>{each}</p>
					})}
				</div>
				<div className="Project-Detail-Header">The Solution</div>
				<ul className="Project-Detail-Solution">
					{this.props.solution.map(each => {
						return <li>{each}</li>
					})}
				</ul>
				<div className="Project-Detail-Header">Tech Stack</div>
				<div className="Project-Detail-Tech"><p>{this.props.stack}</p></div>
			</div>
		}
		return(
			<a href={this.props.link} className={`Project Project-${this.props.order}`} target='_blank'>
				<div className="Project-Info">
					<div className="Project-Info-Tag">{this.props.tag}</div>
					<div className="Project-Info-Name">{this.props.name}</div>
					<div className="Project-Info-Intro">{this.props.intro}</div>
					<div className='Project-Info-Tech'>{this.props.tech}</div>
				</div>
				{projectDetail}
			</a>
		)
	}
}

export default Project;