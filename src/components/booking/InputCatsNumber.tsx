import React from "react";

export const InputCatsNumber = ({cats, setCatsNumber}) => {
    return (
        <div>
            <div style={{'marginBottom': '10px'}}>Step 1: Select the number of cats</div>
            <input
                className="input-booking"
                type="number"
                value={cats}
                onChange={(e) => setCatsNumber(Math.max(1, Math.min(10, parseInt(e.target.value, 10))))}
                min="1"
                max="10"
            />
        </div>
    )
}