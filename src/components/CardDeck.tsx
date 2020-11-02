import React from 'react'
import Card from './Card';
import Im1 from '../assets/pictures/Im1.png';
export interface CardDeckProps {
    
}
 
const CardDeck: React.FunctionComponent<CardDeckProps> = () => {
    return ( 
        <div className="container container-card">
        <div className="card-deck card-deck__1">
            <Card
                src={Im1}
                title={"Nexter Inc."}
                info={"Realtors Website Using Grid Layout Only."}
                git={"xd"}
                demo={"xd"}
            />
            <Card
                src={Im1}
                title={"Nexter Inc."}
                info={"Realtors Website Using Grid Layout Only."}
            />
            <Card
                src={Im1}
                title={"Nexter Inc."}
                info={"Realtors Website Using Grid Layout Only."}
            />
            
        </div>

        <div className="card-deck card-deck__2">
        <Card
            src={Im1}
            title={"Nexter Inc."}
            info={"Realtors Website Using Grid Layout Only."}
            git={"xd"}
            demo={"xd"}
        />
        <Card
            src={Im1}
            title={"Nexter Inc."}
            info={"Realtors Website Using Grid Layout Only."}
        />
        <Card
            src={Im1}
            title={"Nexter Inc."}
            info={"Realtors Website Using Grid Layout Only."}
        />

        </div>

        </div>
     );
}
 
export default CardDeck;