import React, {useEffect} from 'react'

import Cara from '../assets/pictures/Cara.png';
import AOS from 'aos';
export interface AboutProps {
    
}
 
const About: React.FunctionComponent<AboutProps> = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return ( 
        <div id="about" className="container about" data-aos="fade-right">
            <div className="row title-about">
                <div className="col">
                    <h2 className="about-title">
                        About
                    </h2>
                    <p className="p_about_1">
                    Just A Dude Born In Colombia That Loves Web Development, System Design And
                     All The Stuff Related With It.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img src={Cara} className="img-fluid rounded border" alt="Responsive "/>
                </div>

                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Electronic Engineer &amp; Software Developer</h3>
                    <p className="font-italic">
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="icofont-rounded-right"><strong>Birthday: </strong>22 December 1995</i></li>
                                <li><i className="icofont-rounded-right"><strong>Website: </strong>www.demo.com</i></li>
                                <li><i className="icofont-rounded-right"><strong>Phone: </strong>+57 3205552871</i></li>
                                <li><i className="icofont-rounded-right"><strong>City: </strong>Barranquilla</i></li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <ul>
                                <li><i className="icofont-rounded-right"><strong>Age: </strong>24</i></li>
                                <li><i className="icofont-rounded-right"><strong>Degree: </strong>Bachelor</i></li>
                                <li><i className="icofont-rounded-right"><strong>Email: </strong>hectorvmlopez@gmail.com</i></li>
                                <li><i className="icofont-rounded-right"><strong>Position: </strong>Software Developer</i></li>
                            </ul>
                        </div>

                    </div>
                    <p className="p_about_2">Full-Stack Software Developer with 1 year of experience in software Development, 
                            that follows the following set of rules 2/4 Learning , 1/4 Sleeping, 1/4 Coding in addition to be a fast-learner, considered to be an Adaptable, 
                            innovative, conservative and ambitious Person, choosen Software Development as main path due to fact that this kind of job offers
                            flexibility and freedom and last but not least the fame and respect it brings to the table. 

                    </p> 
                </div>
            
            </div>

        </div>
    
     );
}
 
export default About;