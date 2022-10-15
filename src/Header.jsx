import React from 'react'
import mainLogo from "./Assets/logoMain.png";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <div className="logo">
                <img src={mainLogo} alt="logo" />
            </div>
            <div className="navbar">
                <div className="linkContainer">
                    <a href="#roadmap">roadmap</a>
                    <a href="#roadmap">about</a>
                </div>
                <div className="linkContainer">
                    <a href="#roadmap">MERCHANTS</a>
                    <button>mint</button>
                </div>
            </div>
        </>
    )
}
