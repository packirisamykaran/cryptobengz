import React from 'react'
import "./style/Home.css"
import cloud1 from "./Assets/3 CLOUD1.png"
import cloud2 from "./Assets/4 CLOUD2.png"
import title from "./Assets/5 _CRYPTOBENGZ_ TITLE.png"
import game from "./Assets/6 _ARE YOU GAME_.png";
import v from "./Assets/7 _V_.png"
import sun from "./Assets/2SUN.png";

import gp from "./Assets/8 GACHAPON VIDEO.mp4";

export default function Home() {

    const playGP = () => {
        const video = document.getElementById("gp");
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    }

    return (
        <div className="home">
            <div className="mintSection">
                <div className="bg">
                    <img src={cloud2} alt="" className='right' />
                    <img src={cloud1} alt="" className='left' />
                    <img src={cloud1} alt="" className='right' />
                    <img src={cloud2} alt="" className='left bottom' />
                    <img src={cloud2} alt="" className='right bottom' />
                    <img src={cloud1} alt="" className='left bottom' />
                </div>
                <div className="hero">
                    <img src={sun} alt="" className="sun" />
                    <img src={title} alt="" className="title" />
                    <img src={game} alt="" className="game" />
                    <img src={v} alt="" className="v" />
                    <img src={v} alt="" className="v" />
                    <p>Pixel by pixel, we celebrate everything Singaporean. The CryptoBengz collection is an NFT project that forever holds the beauty of the Lion City's diverse personalities on the blockchain.</p>
                    <br />
                    <p>U in a not, cb kia?</p>

                    <video id='gp' onClick={playGP} className='gp' >
                        <source src={gp} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* <div className="left">
                <img src={cloud1} alt="" />
                <img src={cloud2} alt="" />
                <img src={cloud1} alt="" />
            </div>
            <div className="right">
                <img src={cloud2} alt="" />
                <img src={cloud1} alt="" />
                <img src={cloud2} alt="" />
            </div> */}


            <div className="collection_LB">
                {/* <div className="bg">
                    <div className="left"><div className="container">CRYPTOBENGZ V2 CRYPTOBENGZ V2</div></div>
                    <div className="right"><div className="container">CRYPTOBENGZ V2 CRYPTOBENGZ V2</div></div>
                </div> */}
                <div className="collection">
                    <div className="heading">
                        THE COLLECTION
                    </div>
                    <div className="nfts">
                        <img src={require("./Assets/9 PIC1.png")} alt="" />
                        <img src={require("./Assets/10 PIC2.png")} alt="" />
                        <img src={require("./Assets/11 PIC3.jpg")} alt="" />
                        <img src={require("./Assets/12 PIC4.png")} alt="" />
                    </div>
                    <p>A - ??? [error error] - supply of generative CryptoBengz Is here! Representing our little red dot, the CryptoBengz collection boasts a variety of Singaporean traits and backgrounds. The utility based NFT allows holders early access to launches, exclusive events to IRL events, discounts at all our partner merchants, and many more! </p>
                </div>

                <div className="LB">
                    <div className="heading">
                        LEGENDARY BENGZ
                    </div>
                    <div className="legends">
                        {[...Array(10).keys()].map((x, index) => {
                            return <img key={index + "img"} src={require(`./Assets/${x + 13} LEGENDARY${index + 1}.png`)} alt="" className="legend" />
                        })}
                    </div>
                    <p>10 legendary 1/1 Bengz are hiding in the collection. Will you be the lucky one? Wear a pair of red underwear and get minting!</p>
                </div>
            </div>



            <div className="loreLoot">
                <div className="heading"><span>&#183;</span>  <p>CRYPTOBENGZ LORE</p> <span>&#183;</span> </div>
                <img src={require("./Assets/Narrator.PNG")} alt="" className='nar1' />
                <img src={require("./Assets/Narrator2.PNG")} alt="" className='nar2' />
                <div className="heading"><span>&#183;</span> <p>CB KIA’S UNLOCKABLE LOOT</p> <span>&#183;</span> </div>

                <div className="perks">
                    <div className="perk">
                        <img src={require("./Assets/26 LETTER.png")} alt="" />
                        <p>EXCLUSIVE INVITES TO IRL EVENTS</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/27 TICKET.png")} alt="" />
                        <p>DISCOUNTS FROM MANY PARTNER MERCHANTS</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/28 KEY.png")} alt="" />
                        <p>EARLY ACCESS TO FUTURE LAUNCHES</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/29 MERCH.png")} alt="" />
                        <p>MERCH DROPS AND MANY MORE!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
