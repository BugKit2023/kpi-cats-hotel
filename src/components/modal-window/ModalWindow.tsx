import React from "react";
import './ModalWindow.css';

export const ModalWindow = ({message, onClose}) => {
    return (
        <div id="modal-window-overlay">
            <div id="modal-window-content">
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}