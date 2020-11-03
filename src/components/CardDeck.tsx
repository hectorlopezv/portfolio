import React from 'react'
import Card from './Card';
import Nexter from '../assets/pictures/Nexter.png';
import Trillo from '../assets/pictures/Trillo.png';
import Outdoor from '../assets/pictures/Outdoor.png';
import Agencia from '../assets/pictures/Agencia.png';
import Tribe from '../assets/pictures/Tribe.png';
import Cripto from '../assets/pictures/Cripto.png';

export interface CardDeckProps {
    
}
 
const CardDeck: React.FunctionComponent<CardDeckProps> = () => {
    return ( 
        <div className="container container-card">
            <div className="card-deck card-deck__1">
                <Card
                    src={Nexter}
                    title={"Nexter Inc."}
                    info={"Realtors Website Using Grid Layout Only with Sass"}
                    git={"https://github.com/hectorlopezv/css-Grid-project"}
                    demo={"https://css-grid-project.vercel.app/"}
                />
                <Card
                    src={Trillo}
                    title={"Trillo Inc."}
                    info={"Hotel Website using flex-box as a backbone with Sass"}
                    git={"https://github.com/hectorlopezv/trillo_flex_box_project"}
                    demo={"https://trillo-flex-box-project.vercel.app/"}
                />
                <Card
                    src={Outdoor}
                    title={"OutDoor Inc."}
                    info={"Website focused on outdoor tourism using cool css animations"}
                    git={"https://github.com/hectorlopezv/Advanced-CSS-Sass-Flexbox-Grid-Animations-More-"}
                    demo={"https://advanced-css-sass-flexbox-grid-animations-more.vercel.app/"}
                />
                
            </div>

            <div className="card-deck card-deck__2">
                <Card
                    src={Agencia}
                    title={"Agency Inc."}
                    info={"Travel agency Website monolith using Node.js, Express.js, Pug, Javascript"}
                    git={"https://github.com/hectorlopezv/javascript-from-zero-to-hero/tree/master/intro-nodejs"}
                    demo={"https://quiet-temple-27244.herokuapp.com/"}
                />
                <Card
                    src={Tribe}
                    title={"Tribe Labs Inc."}
                    info={"npm Package developed with typeScript using Bodypix as a Backone for the tribeTeam."}
                    git={"https://github.com/hectorlopezv/tribe_lib_package"}
                    demo={"https://tribedemo.vercel.app/"}
                />
                <Card
                    src={Cripto}
                    title={"Cripto Inc."}
                    info={"Website that shows the users the latest prices on the most popular virtual currencies, Using the CryptoCompare API"}
                    git={"https://github.com/hectorlopezv/javascript-from-zero-to-hero/tree/master/PROYECTO-COTIZADOR-CRIPTOMONEDA-FETCH"}
                    demo={"https://criptomondeas.vercel.app/"}
                />

            </div>


        </div>

        
     );
}
 
export default CardDeck;