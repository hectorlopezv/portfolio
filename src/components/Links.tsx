import React from 'react'


export interface LinksProps {
    
}
 
const Links: React.FunctionComponent<LinksProps> = () => {
    return (  
        <div className="d-flex social-links">
            <a href="https://twitter.com/CurlyGalactic"  rel="noreferrer" target="_blank"><i className="bx bxl-twitter"></i><span></span></a>
            <a href="#instragram" rel="noreferrer" target="_blank"><i className="bx bxl-instagram"></i><span></span></a>
            <a href="https://www.linkedin.com/in/hector-lopez-258097137" rel="noreferrer" target="_blank"><i className="bx bxl-linkedin"></i><span></span></a>
            <a href="https://github.com/hectorlopezv" rel="noreferrer" target="_blank"><i className="bx bxl-github"></i><span></span></a>
        </div>
    );
}
 
export default Links;