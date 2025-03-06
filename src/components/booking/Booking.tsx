import React, {useState} from "react";
import './Booking.css';
import {rooms} from "../../content/rooms";
import {InputCatsNumber} from "./InputCatsNumber";
import {InputDates} from "./InputDates";
import {SelectRooms} from "./SelectRooms";
import {BookingCompleted} from "./BookingCompleted";
import catImage from '../../assets/cat-sitting.svg'
import mouseImage from '../../assets/mouse.svg'
import birdImage from '../../assets/bird.svg'
import heartImage from '../../assets/heart.svg'

const getDate = (date: Date): string => {
    const year: number = date.getFullYear();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const Booking = ({onModalWindowOpen}) => {
    const today: Date = new Date();
    const tomorrow: Date = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [currentStep, setCurrentStep] = useState(1);
    const [cats, setCats] = useState(1);
    const [checkInDate, setCheckInDate] = useState(getDate(today));
    const [checkOutDate, setCheckOutDate] = useState(getDate(tomorrow));
    const [roomType, setRoomType] = useState(rooms[0].name);
    const [totalDays, setDays] = useState(1);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (event) => {
        onModalWindowOpen('Thanks! Your booking is ready.');
        setCurrentStep(1);
    };

    return (
        <>
            <div id="booking" className="booking-container">
                <h1 style={{fontSize: '22px', marginBottom: '30px'}}>BOOKING</h1>
                {currentStep === 1 && (
                    <div className="step">
                        <InputCatsNumber cats={cats} setCatsNumber={setCats}/>
                        <button onClick={nextStep}>Next</button>
                        <div style={{'marginTop': '30px'}}>
                            <img src={catImage} height={150}/>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="step">
                        <InputDates checkInDate={checkInDate}
                                    checkOutDate={checkOutDate}
                                    nextButtonDisabled={nextButtonDisabled}
                                    setDays={setDays}
                                    setCheckInDate={setCheckInDate}
                                    setCheckOutDate={setCheckOutDate}
                                    setNextButtonDisabled={setNextButtonDisabled}/>
                        <div className='back-next-buttons-container'>
                            <div>
                                <button onClick={prevStep}>Back</button>
                            </div>
                            <div>
                                <button disabled={nextButtonDisabled} onClick={nextStep}>Next</button>
                            </div>
                        </div>
                        <div style={{'marginTop': '30px'}}>
                            <img src={mouseImage} height={80}/>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="step">
                        <SelectRooms roomType={roomType}
                                     setRoomType={setRoomType}/>
                        <div className='back-next-buttons-container'>
                            <div>
                                <button onClick={prevStep}>Back</button>
                            </div>
                            <div>
                                <button onClick={nextStep}>Next</button>
                            </div>
                        </div>
                        <div style={{'marginTop': '30px'}}>
                            <img src={birdImage} height={120}/>
                        </div>
                    </div>

                )}

                {currentStep === 4 && (
                    <div className="step">
                        <BookingCompleted cats={cats}
                                          checkInDate={checkInDate}
                                          checkOutDate={checkOutDate}
                                          roomType={roomType}
                                          totalDays={totalDays}/>
                        <button onClick={handleSubmit}>Confirm Booking</button>
                        <div style={{'marginTop': '20px'}}>
                            <img src={heartImage} height={50}/>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}