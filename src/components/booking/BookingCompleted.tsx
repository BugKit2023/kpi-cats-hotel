import React, {useEffect, useState} from "react";
import {rooms} from "../../content/rooms";

export const BookingCompleted = ({cats, checkInDate, checkOutDate, roomType, totalDays}) => {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const price: number = rooms
            .find(room => room.name == roomType).price;
        setTotalPrice(totalDays * price);
    }, [checkInDate, checkOutDate]);

    return (
        <div>
            <div style={{'marginBottom': '10px'}}>Step 4: Booking complete!</div>
            <div className="complete-booking-block">
                <div className="complete-booking-element">
                    <span className="complete-booking-element-key">Number of Cats:</span> {cats}</div>
                <div className="complete-booking-element">
                    <span className="complete-booking-element-key">Check In Date:</span> {checkInDate}
                </div>
                <div className="complete-booking-element">
                    <span className="complete-booking-element-key">Check Out Date:</span> {checkOutDate}
                </div>
                <div className="complete-booking-element">
                    <span className="complete-booking-element-key">Room:</span> {roomType}
                </div>
                <div className="complete-booking-element">
                    <span className="complete-booking-element-key">Total Price:</span> {totalPrice}$
                </div>
            </div>
        </div>
    )
}