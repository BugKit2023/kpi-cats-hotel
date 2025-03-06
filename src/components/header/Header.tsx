import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import {NavigationBar} from "./NavigationBar";
import React from "react";

const header: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: '#18282E',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '5px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const logo: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-start',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '20px'
}

export const Header = () => {
    return (
        <>
            <div style={header}>
                <div style={logo}>
                    <LogoIcon width={50} height={45} style={{'paddingRight': '5px'}}/>
                    <div>KOTEL</div>
                </div>
                <div>
                    <NavigationBar/>
                </div>
            </div>
        </>
    )
}