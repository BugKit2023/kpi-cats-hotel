import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import {NavigationBar} from "./NavigationBar";
import React from "react";
import './Header.css';

export const Header = () => {
    return (
        <>
            <div id="header">
                <div id="logo">
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