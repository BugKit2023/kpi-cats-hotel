import React, {ChangeEvent, FormEvent, useState} from "react";

export const formContainer = {
    maxWidth: '200px',
    margin: 'auto',
    padding: '20px'
}
export const formInput = {
    width: '100%',
    padding: '8px'
}
export const label = {
    color: '#18282E',
    fontFamily: 'Roboto',
    marginBottom: '5px',
    fontSize: '12px'
}
export const buttonContainer: React.CSSProperties = {
    margin: '5px',
    textAlign: 'center'
}
export const button = {
    color: 'white',
    fontFamily: 'Roboto',
    padding: '10px 15px',
    backgroundColor: '#18282E',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px'
}

export const EmailForm = ({onModalWindowOpen}) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmail('');
        onModalWindowOpen('Thanks! We will contact you.');
    };

    return (
        <>
            <div style={formContainer}>
                <form onSubmit={handleSubmit}>
                    <div style={label}>
                        <label htmlFor="email">Enter your email:</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Email"
                            style={formInput}
                        />
                    </div>

                    <div style={buttonContainer}>
                        <button
                            type="submit"
                            style={button}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}