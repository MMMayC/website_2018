import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
	render(){
		return(
            <div className='CTAButton'>
                <Link to={this.props.link} className='CTAButton--Link'>{this.props.copy}</Link>
            </div>
		)
	}
}

export default Button;