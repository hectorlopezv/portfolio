import React from 'react'

import Foto from '../assets/pictures/Foto.png';
export interface ContactProps {
    
}
 
const Contact: React.FunctionComponent<ContactProps> = () => {
    return ( 
        <div className="container">
            <h2 className="about-title">
                About
            </h2>
            <div className="row">
                <div className="col-lg-8 mt-5 mt-lg-0">
                </div>
                <div className="col-lg-4">
                    <img src={Foto} className="img-fluid rounded border rounded-circle" alt="Responsive "/>
                </div>
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
        </div>
     );
}
 
export default Contact;