import React, {useEffect} from 'react'

import Foto from '../assets/pictures/Foto.png';
import Typing2 from './Typing2';
import AOS from 'aos';
export interface ContactProps {
    
}
 
const Contact: React.FunctionComponent<ContactProps> = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return ( 
        <div className="container mt-x contact" data-aos="fade-right">
            <h2 className="about-title">
                Contact
            </h2>
            <div className="row">
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <div className="info d-flex justify-content-center align-items-center">
                        
                        <div className="location d-flex">
                            <i className="icofont-location-pin"></i>
                                <div className="info-text ">   
                                    <h4 className="d-block">Location:</h4>
                                    <p>Barranquilla, Colombia</p>
                                </div>
                        </div>

                        <div className="Email d-flex mt-x mr-x">
                                <i className="icofont-email"></i>
                                <div className="info-text">   
                                    <h4 className="d-block">Email:</h4>
                                    <p>hectorvmlopez@gmail.com</p>
                                </div>
                        </div>


                        <div className="Call d-flex mt-x mb-x">
                                <i className="icofont-ui-cell-phone"></i>
                                <div className="info-text">   
                                    <h4 className="d-block">Call:</h4>
                                    <p>+57 3205552871</p>
                                </div>
                        </div>

                    </div>
                        


                </div>

                <div className="col-lg-4">
                    <img src={Foto} className="img-fluid border rounded-circle mx-auto d-block" alt="Responsive "/>
                    <div className="Resume">
                        <Typing2/>
                        
                    </div>
                    
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