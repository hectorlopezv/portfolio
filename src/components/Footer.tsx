import React, {useEffect} from 'react'
import Link from './Link';
import Links from './Links';
import AOS from 'aos';
export interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return ( 
        <footer id="footer" data-aos="fade-right">
            <div className="container">
                <h3>
                    Hector Vinicio Lopez Molinares
                </h3>
                <p>Software Developer From Colombia with 1 year of experience</p>
                <Links
                            css_class={"d-flex social-links justify-content-center"}
                            links={[
                            <Link
                                key={1}
                                link={"https://twitter.com/CurlyGalactic"}
                                name_icon={"twitter"}
                            />,
                            <Link
                                key={2}
                                link={"https://www.linkedin.com/in/hvmlopez"}
                                name_icon={"linkedin"}
                            />,
                            <Link
                                key={3}
                                link={"https://github.com/hectorlopezv"}
                                name_icon={"github"}
                            />
                            ]
                                }      
                        />

                <div className="copyright">
                    &copy; Copyright <strong><span>Hector Vinicio Lopez Molinares</span></strong>. All Rights Reserved
                </div>

            </div>


        </footer>
     );
}
 
export default Footer;