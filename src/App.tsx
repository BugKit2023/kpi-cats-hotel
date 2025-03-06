import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {WhyWe} from "./components/why-we/WhyWe";
import {WhatWeOffer} from "./components/what-we-offer/WhatWeOffer";
import {Booking} from "./components/booking/Booking";
import {WhoWeAre} from "./components/who-we-are/WhoWeAre";

function App() {
    return (
        <>
            <Header/>
            <div>
                <WhoWeAre/>
                <WhyWe/>
                <WhatWeOffer/>
                <Booking/>
            </div>
        </>
    );
}

export default App;
