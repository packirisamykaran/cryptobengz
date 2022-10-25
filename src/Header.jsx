import React from 'react'
import mainLogo from "./Assets/logoMain.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Header() {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const href = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1,
        );
        if (window.location.href.lastIndexOf('#') > 0) {
            document.getElementById(href)?.scrollIntoView();
        }
    });
    return (
        <>
            <div className="logo">
                <Link to="/"><img src={mainLogo} alt="logo" /></Link>
            </div>
            <div className="navbar">
                <a href="#roadmap">Roadmap</a>
                <a href="#about">about</a>
                <a href="#merchant">Merchant</a>
                <a href="#join">Join us</a>
                <button>Wallet</button>
            </div>
        </>
    )
}
