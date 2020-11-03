import React from 'react'

export interface LinkProps {
    link?: string;
    name_icon?: string;

}
 /*uses BoxIcon*/
const Link: React.SFC<LinkProps> = (props) => {
    const {link, name_icon, } = props;
    return (
        <a  href={link}  rel="noreferrer" target="_blank"><i className={`bx bxl-${name_icon}`}></i><span></span></a>
     );
}
 
export default Link;