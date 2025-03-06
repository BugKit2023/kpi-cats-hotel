import React from "react";

const modalWindowOverlay: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalWindowContent: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '300px',
    color: '#18282E',
    fontFamily: 'Roboto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const button: React.CSSProperties = {
    backgroundColor: '#18282E',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

export const ModalWindow = ({message, onClose}) => {
    return (
        <div style={modalWindowOverlay}>
            <div style={modalWindowContent}>
                <p>{message}</p>
                <button onClick={onClose} style={button}>OK</button>
            </div>
        </div>
    );
}