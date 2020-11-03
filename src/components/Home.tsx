import * as React from 'react';
import Links from './Links';
import Typing from './Typing';
import Link from './Link';
export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return (  
            <div id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-auto h1_home">
                        <h1>Hector Vinicio Lopez Molinares</h1>
                        <Typing/>
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
                    </div>
                </div>
            </div>
    );
}
 
export default Home;