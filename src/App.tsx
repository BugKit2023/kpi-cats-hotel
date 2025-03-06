import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {WhyWe} from "./components/why-we/WhyWe";
import {WhatWeOffer} from "./components/what-we-offer/WhatWeOffer";
import {Booking} from "./components/booking/Booking";
import {WhoWeAre} from "./components/who-we-are/WhoWeAre";
import {ModalWindow} from "./components/modal-window/ModalWindow";

function App() {

    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
    const [modalWindowMessage, setModalWindowMessage] = useState("");

    const handleShowModalWindow = (message: string) => {
        setIsModalWindowOpen(true);
        setModalWindowMessage(message);
    };

    const handleCloseModalWindow = () => {
        setIsModalWindowOpen(false);
    };

    return (
        <>
            <Header/>
            <div>
                {isModalWindowOpen && (
                    <ModalWindow message={modalWindowMessage} onClose={handleCloseModalWindow} />
                )}
                <WhoWeAre onModalWindowOpen={handleShowModalWindow}/>
                <WhyWe/>
                <WhatWeOffer/>
                <Booking/>
            </div>
        </>
    );
}

export default App;
