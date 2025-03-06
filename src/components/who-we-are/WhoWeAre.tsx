import React from "react";
import catImage from '../../assets/cat-background.png'
import {EmailForm} from "./EmailForm";
import './WhoWeAre.css';

export const WhoWeAre = ({onModalWindowOpen}) => {
    return (
        <>
            <section id="who-we-are">
                <div style={{'width': '50%'}}>
                    <div id="text" >
                        <div>KOTEL</div>
                        <div>Where comfort and luxury meet for your furry friends!</div>
                    </div>
                    <EmailForm onModalWindowOpen={onModalWindowOpen}/>
                </div>
                <div style={{'width': '50%'}}>
                    <img src={catImage} width='100%'/>
                </div>
            </section>
        </>
    )
}