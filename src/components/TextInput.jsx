import React, { forwardRef } from "react";
import "./css/TextInput.css";

const TextInput = forwardRef(({ label, type, value, onChange, error }, ref) => {
    return (
        <div className="form-item-container">
            <div className="form-item">
                <label htmlFor={label.toLowerCase()}>{label}</label>
                <input
                    ref={ref}
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
});

export default TextInput;
