import React from 'react'
import Cara from '../assets/pictures/Cara.png';
export interface ContactProps {
    
}
 
const Contact: React.FunctionComponent<ContactProps> = () => {
    return ( 
        <div className="container">
            <h2 className="about-title">
                About
            </h2>
            <div className="row">
                <div className="col-lg-4">
                    <img src={Cara} className="img-fluid rounded border" alt="Responsive "/>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">

                </div>
            </div>
        </div>
     );
}
 
export default Contact;