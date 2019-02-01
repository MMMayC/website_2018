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
                intro="The Gnashes is an application that makes team nomination and award announcement easier."
                problem={[
                    "At work, we have an award called The Gnashes which recognises people's contribution in our team. Basically, the nomination runs every two weeks and the person receives the most nominations gets a trophy.", 
                    "However we use a very plain google form for nomination, also the data is in poor format so it's hard to sort (e.g. the candidate name might be 'Alex' or 'alex'), the manager needs to spend ~30 mins to put together a slides for announcement."
                ]}
                solution={[
                    "Simple and beautiful interface for better nominating experience.", 
                    "Sort the nominations by a click to reduce the time spent."
                ]}
                stack= "React / Node.js / Express / Serverless / AWS DynamoDB / S3"
                />
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