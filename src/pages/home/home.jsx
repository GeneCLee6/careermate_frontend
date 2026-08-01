import React from "react";
import logoIcon from "../../assets/logo-icon.png";
import logoText from "../../assets/logo-text.png";

const Home = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img
                        src={logoIcon}
                        alt="CareerMate AI Logo"
                        className="logo-icon"
                    />
                    <img
                        src={logoText}
                        alt="CareerMate AI text"
                        className="logo-text"
                    />
                </div>
                <div className="nav-links">
                    <a href="#features" className="nav-link">
                        Features
                    </a>
                    <a href="#demo" className="nav-link">
                        Demo
                    </a>
                </div>
                <div className="nav-buttons">
                    <a href="#signin" className="btn-signin">
                        Sign In
                    </a>
                    <a href="#start" className="btn-start">
                        Start for Free
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Home;
