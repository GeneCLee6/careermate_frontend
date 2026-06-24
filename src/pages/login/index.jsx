import React from "react";
import "./index.css";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    function mockLogin(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "test@test.com" && password === "123456") {
                    resolve();
                } else {
                    reject(new Error("Incorrect email or password"));
                }
            }, 1000);
        });
    }

    async function handleLogin() {
        setError("");
        setStatus("loading");
        try {
            await mockLogin(email, password);
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    }

    function emailChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (!value.trim()) {
            setEmailError("Email is required");
        } else if (!value.includes("@")) {
            setEmailError("Invalid email format");
        } else if (value.length > 50) {
            setEmailError("Email must be less than 50 characters");
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
            setPasswordError("Password must be at least 6 characters");
        } else if (value.length > 20) {
            setPasswordError("Password must be less than 20 characters");
        } else {
            setPasswordError("");
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <form className="submit-form">
                    <div className="form-item-container">
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
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
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={passwordChange}
                            />
                        </div>
                        {passwordError && (
                            <p className="error-message">{passwordError}</p>
                        )}
                    </div>
                    <button
                        onClick={handleLogin}
                        className="submit"
                        type="button"
                    >
                        {status === "loading" ? "Logging in..." : "Login"}
                    </button>
                    {status === "error" && (
                        <p className="error-message">{error}</p>
                    )}
                    {status === "success" && (
                        <p className="success-message">Login Success</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
