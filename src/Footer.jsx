import React from 'react'
import mainLogo from "./Assets/logoMain.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="logoLinks">
                    <img src={mainLogo} alt="logo" className='logo' />
                    <div className="links">
                        <a href=""> mint</a>
                        <a href="">about</a>
                        <a href="">the team</a>
                        <a href="">roadmap</a>
                        <a href="">merchant partners</a>
                    </div>
                    <div className="links">
                        <a href=""> openser</a>
                        <a href="">twitter</a>
                        <a href="">instagram</a>
                        <a href="">discord</a>
                    </div>
                    <div className="links">
                        <a href="">join the team!</a>
                    </div>
                </div>
                <div className="trademark">
                    © 2022 CRYPTOBENGZ
                </div>
            </div>
        </div>
    )
}
