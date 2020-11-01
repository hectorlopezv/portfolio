import React from 'react'

import Im12 from '../assets/pictures/Im12.png';
export interface AboutProps {
    
}
 
const About: React.FunctionComponent<AboutProps> = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">

                    <h2 className="h2_home">Hello Im A Junior Software Engineer Aiming To Become A 
                            Full Stack Developer In The Near Future, With A Strong Liking 
                            To System Design And Databases And Affinity With Front End Development</h2> 
                </div>
                <div className="col">
                    <img src={Im12} className="img-fluid" alt="Responsive "/>
                </div>
            </div>
        </div>
    
     );
}
 
export default About;