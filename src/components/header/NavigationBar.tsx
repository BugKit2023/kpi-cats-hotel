import React from "react";

const navigation = {
    display: 'flex',
    justifyContent: 'space-end',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '16px'
}
const navItem = {
    marginRight: '25px',
    cursor: 'pointer'
}

export const NavigationBar = () => {
    return (
        <div style={navigation}>
            <a href="#why-us" className="nav-link" style={navItem}>Why Us</a>
            <a href="#what-we-offer" className="nav-link" style={navItem}>What We Offer</a>
            <a href="#booking" className="nav-link" style={navItem}>Booking</a>
        </div>
    )
}