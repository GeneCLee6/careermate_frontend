import React from "react";
import "./index.css";
import { useState } from "react";
import TextInput from "../../components/TextInput";
import useEmail from "../../hooks/useEmail";
import usePassword from "../../hooks/usePassword";
import { useNavigate } from "react-router-dom";
import { validateRegister } from "../../utils/validators";

const Register = () => {
    const [name, setName] = useState("");
    const { email, emailError, emailChange } = useEmail();
    const { password, passwordError, passwordChange } = usePassword();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function mockRegister(name, email, password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

    function nameChange(e) {
        const value = e.target.value;
        setName(value);
        if (!value.trim()) {
            setNameError("Name is required");
        } else {
            setNameError("");
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

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const errMsg = validateRegister(name, email, password, confirmPassword);
        if (errMsg) {
            setStatus("error");
            setError(errMsg);
            return;
        }
        try {
            setStatus("loading");

            await mockRegister(name, email, password);
            setStatus("success");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    }

    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Careermate Register</h1>
                <form className="submit-form" onSubmit={handleSubmit}>
                    <TextInput
                        label="Name"
                        type="text"
                        value={name}
                        onChange={nameChange}
                        error={nameError}
                    />
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
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={confirmPasswordChange}
                        error={confirmPasswordError}
                    />
                    <button className="submit">Register</button>
                    {status === "error" && (
                        <p className="error-message">{error}</p>
                    )}
                    {status === "success" && (
                        <p className="success-message">Register Success</p>
                    )}
                    <p className="auth-link">
                        Already have an account?{" "}
                        <span onClick={() => navigate("/login")}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
