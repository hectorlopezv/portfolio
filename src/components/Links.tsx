import React from 'react'


export interface LinksProps {
    links: any;
    css_class: any;
}
 
const Links: React.FunctionComponent<LinksProps> = (props) => {

    return (  
        <div className={props.css_class}>
            {props.links}
        </div>
    );
}
 
export default Links;