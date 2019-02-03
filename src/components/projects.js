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
                    "At work, we have an award called The Gnashes which recognises people's contribution in our team. Every two weeks, a trophy is presented to the person who receives the most nominations.", 
                    "However, an unispired Google form was used for the nomination process, and the data used was poorly stored and therefore was difficult to sorted and presented badly. This meant that the manager regularly spent ~30 minutes just putting slides together for an announcement."
                ]}
                solution={[
                    "Simple and beautiful interface for a better nominating experience.", 
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