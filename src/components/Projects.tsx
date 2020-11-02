import * as React from 'react';
import CardDeck from './CardDeck';
export interface ProjectsProps {
    
}
 
const Projects: React.FunctionComponent<ProjectsProps> = () => {
    return ( 
        <div className="container Portfolio">
            <h2 className="about-title">
                PORTFOLIO
            </h2>
            <CardDeck/>
        </div>
    );
}
 
export default Projects;