import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">MNTN</div>

            <nav className="nav">
                <a href="#equipment">Equipment</a>
                <a href="#about">About us</a>
                <a href="#blog">Blog</a>
            </nav>

            <button className="account-btn">Account</button>
        </header>
    );
}

export default Header;