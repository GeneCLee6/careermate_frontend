import React from "react";
import "./index.css";

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Careermate Register</h1>
                <form className="submit-form">
                    <div className="form-item-container">
                        <div className="form-item">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                        </div>
                        <button type="submit" className="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
