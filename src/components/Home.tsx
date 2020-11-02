import * as React from 'react';
import Links from './Links';
export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return (  
            <div id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-auto h1_home">
                        <h1>Hector Vinicio Lopez Molinares</h1>
                        <h2>Hello Folks, Welcome To The Oficial Website Of 
                            Hector Lopez</h2> 
                        <Links/>
                    </div>
                </div>
            </div>
    );
}
 
export default Home;