
import React from 'react';
import logoImg from '../assets/logo-img.jpg';
export default function Header() {
    return (
        <header>
            <img src={logoImg} alt="logo" />
            <h1>React-Quiz-App</h1>
        </header>
    )
}
