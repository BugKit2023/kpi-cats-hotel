import React from "react";
import {rooms} from "../../content/rooms";

export const SelectRooms = ({roomType, setRoomType}) => {
    return (
        <div>
            <div style={{'marginBottom': '10px'}}>Step 3: Select a room</div>
            <select
                className="input-booking"
                style={{'width': '310px'}}
                onChange={(e) => setRoomType(e.target.value)} value={roomType}>
                {rooms.map((room, index) => (
                    <option key={index} value={room.name}>{room.name}</option>
                ))}
            </select>
        </div>
    )
}