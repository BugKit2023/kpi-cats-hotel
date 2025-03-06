import React from "react";
import {Gallery} from "./Gallery";

export const container: React.CSSProperties = {
    backgroundColor: '#18282E',
    padding: '30px',
    color: 'white',
    fontFamily: 'Roboto',
    textAlign: 'center'
}

export const WhyUs = () => {
    return (
        <>
            <div id="why-us" style={container}>
                <div style={{fontSize: '22px', marginBottom: '30px'}}>WHY US?</div>
                <div style={{fontSize: '18px', marginBottom: '30px'}}>
                    At our Cat Hotel, we pride ourselves on providing the highest quality care for your furry friends.
                    With over <span style={{fontWeight: 'bold'}}>1000 happy residents</span>, we have years of experience in making every stay a
                    comfortable and stress-free experience for your cat. Our professional team ensures that your pet
                    feels at home with us, offering personalized care, cozy accommodations, and plenty of playtime.
                    Choose us for peace of mind knowing your cat is in the best hands!
                </div>
                <div>
                    <Gallery/>
                </div>
            </div>
        </>
    )
}