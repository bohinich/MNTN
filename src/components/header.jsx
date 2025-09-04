import React from "react";
import "header.css";

export default function header() {
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