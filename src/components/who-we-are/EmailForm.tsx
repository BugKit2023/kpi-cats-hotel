import React, {ChangeEvent, FormEvent, useState} from "react";

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
            <div id="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="label">Enter your email:</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Email"
                            id="form-input"
                        />
                    </div>

                    <div id="button-container">
                        <button type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}