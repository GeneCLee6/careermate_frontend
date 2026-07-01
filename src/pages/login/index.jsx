import React from "react";
import "./index.css";
import { useState } from "react";
import TextInput from "../../components/TextInput";
import useEmail from "../../hooks/useEmail";
import usePassword from "../../hooks/usePassword";
import { validateLogin } from "../../utils/validators";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { email, emailError, emailChange } = useEmail();
    const { password, passwordError, passwordChange } = usePassword();

    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const navigate = useNavigate();

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

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const errMsg = validateLogin(email, password);

        if (errMsg) {
            setStatus("error");
            setError(errMsg);
            return;
        }

        try {
            setStatus("loading");
            await mockLogin(email, password);
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <form className="submit-form" onSubmit={handleSubmit}>
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
                    <button className="submit">
                        {status === "loading" ? "Logging in..." : "Login"}
                    </button>
                    {status === "error" && (
                        <p className="error-message">{error}</p>
                    )}
                    {status === "success" && (
                        <p className="success-message">Login Success</p>
                    )}
                    <p className="auth-link">
                        Don't have an account?{" "}
                        <span onClick={() => navigate("/register")}>
                            Register
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
