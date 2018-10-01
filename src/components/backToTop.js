import React from 'react';

class BackToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHide: true
        }
        this.hideBackToTop = this.hideBackToTop.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    hideBackToTop() {
        window.scrollY > 200 ? this.setState({isHide: false}) : this.setState({isHide: true});
    }
    componentDidMount() {
        window.addEventListener('scroll',this.hideBackToTop);
    }
    componentWillUnmount() {
         window.removeEventListener('scroll',this.hideBackToTop);
    }
    scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
	render() {
        return(
            <a className='BackToTop'>
                <i className={`fas fa-arrow-up${this.state.isHide ? ' Hide' : ''}`} onClick={this.scrollToTop}></i>
            </a>
        )
	}
}

export default BackToTop;