import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
	render(){
		return(
			<Link to={this.props.link} className={`CTAButton ${this.props.className}`} target='_blank'>
				{this.props.children} {this.props.copy}
			</Link>
		)
	}
}

export default Button;