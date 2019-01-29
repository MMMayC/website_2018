import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {
	render(){
		return(
			<a href={this.props.link} className='Project' target='_blank'>
                <div className="Project-Tag">{this.props.tag}</div>
                <div className="Project-Name">{this.props.name}</div>
                <div className='Project-Tech'>{this.props.tech}</div>
			</a>
		)
	}
}

export default Project;