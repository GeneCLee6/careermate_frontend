import React, { useEffect, useRef } from "react";
import "./css/TextInput.css";

const TextInput = ({ label, type, value, onChange, error, autoFocus }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <div className="form-item-container">
            <div className="form-item">
                <label htmlFor={label.toLowerCase()}>{label}</label>
                <input
                    ref={inputRef}
                    type={type}
                    id={label.toLowerCase()}
                    name={label.toLowerCase()}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default TextInput;
