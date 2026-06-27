import React from "react";
import "./index.css";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    function nameChange(e) {
        const value = e.target.value;
        setName(value);
        if (!value.trim()) {
            setNameError("Name is required");
        } else {
            setNameError("");
        }
    }

    function emailChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (!value.trim()) {
            setEmailError("Email is required");
        } else if (!value.includes("@")) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    }

    function passwordChange(e) {
        const value = e.target.value;
        setPassword(value);
        if (!value.trim()) {
            setPasswordError("Password is required");
        } else if (value.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }
    }

    function confirmPasswordChange(e) {
        const value = e.target.value;
        setConfirmPassword(value);
        if (!value.trim()) {
            setConfirmPasswordError("Please confirm your password");
        } else if (value !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Careermate Register</h1>
                <form className="submit-form">
                    <div className="form-item-container">
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={nameChange}
                            />
                        </div>
                        {nameError && (
                            <p className="error-message">{nameError}</p>
                        )}
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={emailChange}
                            />
                        </div>
                        {emailError && (
                            <p className="error-message">{emailError}</p>
                        )}
                    </div>
                    <div className="form-item-container">
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={passwordChange}
                            />
                        </div>
                        {passwordError && (
                            <p className="error-message">{passwordError}</p>
                        )}
                    </div>
                    <div className="form-item-container">
                        <div className="form-item">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={confirmPasswordChange}
                            />
                        </div>
                        {confirmPasswordError && (
                            <p className="error-message">
                                {confirmPasswordError}
                            </p>
                        )}
                    </div>
                    <button type="submit" className="submit">
                        Register
                    </button>
                    <p>
                        Already have an account? <a href="/">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
