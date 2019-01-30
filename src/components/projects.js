import React from 'react';
import Project from './project';
class Projects extends React.Component {
	render(){
		return(
            <div className='Projects Grid-Item'>
                <Project 
                order="1"
                tag="Prototype"
                name="The Gnashes"
                tech="React / Node.js / Serverless"
                link="http://gnashes.junwenchen.com"
                thumbnail="media/project_gnashes.jpg"
                problem="Problem" />
                <Project
                order="2"
                tag="Creative"
                name="Birthday Girl"
                tech="p5.js"
                link="https://www.openprocessing.org/sketch/659537"
                thumbnail="media/project_birthdaygirl.jpg" />
                <Project
                order="3"
                tag="Creative"
                name="LOVE"
                tech="p5.js"
                link="https://www.openprocessing.org/sketch/478249"
                thumbnail="media/project_love.jpg" />
            </div>
		)
	}
}

export default Projects;