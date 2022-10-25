import React from 'react'
import mainLogo from "./Assets/logoMain.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="logoLinks">
                    <img src={mainLogo} alt="logo" className='logo' />
                    <div className="links">
                        {/* <a href="">mint</a> */}
                        <a href="#roadmap">roadmap</a>
                        <a href="#about">about</a>
                        <a href="#team">the team</a>

                        <a href="#merchant">merchant partners</a>
                    </div>
                    <div className="links">
                        <a href="https://opensea.io/collection/cryptobengz">opensea</a>
                        <a href="https://twitter.com/cryptobengs?lang=en">twitter</a>
                        <a href="https://www.instagram.com/cryptobengz/?hl=en">instagram</a>
                        <a href="https://discord.gg/n6EXBeAjby">discord</a>
                    </div>

                </div>
                <div className="trademark">
                    © 2022 CRYPTOBENGZ
                </div>
            </div>
        </div>
    )
}
