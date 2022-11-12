import React from 'react'
import mainLogo from "./Assets/logoMain.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Wallet from './Wallet';
import { useState } from 'react';


export default function Header({ provider }) {

    const [address, setaddress] = useState();

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

    async function connect() {
        try {
            if (address) {
                setaddress("");
            } else {
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                setaddress(await signer.getAddress());

            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="logo">
                <Link to="/"><img src={mainLogo} alt="logo" /></Link>
            </div>
            <div className="navbar">
                <a href="#roadmap">Roadmap</a>
                <a href="#about">about</a>
                <a href="#merchant">Merchants</a>
                <a href="#join">Join us</a>
                {/* <div className="wallet">
                    {address ? <div className='active' onClick={connect}>{address.slice(2, 8)}</div> : <div onClick={connect} className="btn">Connect</div>}
                </div> */}
            </div>
        </>
    )
}
