import React from 'react'


export interface CardProps {
    src: string;
    title: string;
    info: string;
    demo: string;
    git: string;
}
 
const Card: React.SFC<CardProps> = (props) => {
    const {src, title, info, demo, git} = props
    return ( 
        <div className="card">
            <img className="card-img-top img-fluid" src={src} alt="Card  cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{info}</p>
            </div>
            <div className="container d-flex">
                <div className="row">
                    <div className="col card-link__1 ">
                        <a href={git}  
                            rel="noreferrer" target="_blank">
                            <i className="bx bxl-github">
                            </i>  
                        </a>
                      
                    </div>
                    <div className="col">
                        <a href={demo}  
                            rel="noreferrer" target="_blank">
                            <i className='bx bx-camera-movie'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;