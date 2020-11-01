import * as React from 'react';

export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return (  
        <header className="header_home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-auto h1_home">
                        <h1 className="h1_home">Junior Software Developer</h1>
                        <h2>Hello Folks, Welcome to the Oficial Website Of 
                            Hector Lopez</h2> 
                        <button type="button" className="btn btn-success">Success</button>   
                    </div>
                </div>
            </div>
        </header>


    );
}
 
export default Home;