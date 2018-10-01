import React from 'react';

class Development extends React.Component {
	render(){
		return(
			<div className='Development Grid-Item'>
				<div className='Grid-Item-Tag'>
					Development
				</div>
				<div className='Development-Content Grid-Item-Content'>
					<ul className='Development-Content-Section-Description'>
						<li>Front-end: Javascript / Less.js / React</li>
						<li>Back-end: Node.js / .Net</li>
						<li>Version Control: Git / VSO</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Development;