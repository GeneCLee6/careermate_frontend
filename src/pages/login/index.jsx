import React from "react";
import "./index.css";
import { useState } from "react";
import TextInput from "../../components/TextInput";
import useEmail from "../../hooks/useEmail";

const Login = () => {
    const { email, emailError, emailChange } = useEmail();
    const [password, setPassword] = useState("");
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
                    <TextInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={emailChange}
                        error={emailError}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={passwordChange}
                        error={passwordError}
                    />
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
                    <p>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
