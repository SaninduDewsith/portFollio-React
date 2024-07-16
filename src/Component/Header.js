import React from 'react';
import './style.css'; 

const Header = ({ logoText }) => {
    return (
        <header className="header">
            <a href="#" className="logo">{logoText}</a>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
