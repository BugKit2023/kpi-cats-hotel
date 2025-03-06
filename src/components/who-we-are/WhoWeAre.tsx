import React from "react";
import catImage from '../../assets/cat-background.png'
import {EmailForm} from "./EmailForm";

const container = {
    backgroundColor: '#5BE3A8',
    display: 'flex',
    alignItems: 'center'
}

const text: React.CSSProperties = {
    color: '#18282E',
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: 'bold'
}

export const WhoWeAre = () => {
    return (
        <>
            <div id="who-we-are" style={container}>
                <div style={{'width': '50%'}}>
                    <div style={text} >
                        <div>KOTEL</div>
                        <div>Where comfort and luxury meet for your furry friends!</div>
                    </div>
                    <EmailForm/>
                </div>
                <div style={{'width': '50%'}}>
                    <img src={catImage} width='100%'/>
                </div>
            </div>
        </>
    )
}