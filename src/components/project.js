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
				<div className="Project-Detail-Problem">{this.props.problem}</div>
				<div className="Project-Detail-Solution">{this.props.solution}</div>
			</div>
		}
		return(
			<a href={this.props.link} className={`Project Project-${this.props.order}`} target='_blank'>
				<div className="Project-Info">
					<div className="Project-Info-Tag">{this.props.tag}</div>
					<div className="Project-Info-Name">{this.props.name}</div>
					{/* <img src={this.props.thumbnail} alt={this.props.thumbnail} className="Project-Thumbnail" /> */}
					<div className='Project-Info-Tech'>{this.props.tech}</div>
				</div>
				{projectDetail}
			</a>
		)
	}
}

export default Project;