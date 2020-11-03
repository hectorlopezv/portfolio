import React, {useEffect} from 'react'

import CardDeck from './CardDeck';
import AOS from 'aos';
export interface ProjectsProps {
    
}
 
const Projects: React.FunctionComponent<ProjectsProps> = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return ( 
        <div id="portfolio" className="container Portfolio" data-aos="fade-right">
            <h2 className="about-title">
                PORTFOLIO
            </h2>
            <CardDeck/>
        </div>
    );
}
 
export default Projects;