import * as React from 'react';

export interface NavBarProps {
    
}
 
const NavBar: React.FunctionComponent<NavBarProps> = () => {
    return ( 
        <nav className="navbar  navbar-expand-l d-flex">
            <a className="name-bar" href="#Home">Hector Lopez</a>  
            <a href="#About">About </a>  
            <a href="#Demos">Demos</a>  
            <a href="#Contact">Contact</a>  
        </nav>
    );
}
 
export default NavBar;