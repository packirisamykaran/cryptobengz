import React from 'react'
import "./style/Home.css"
import cloud1 from "./Assets/3 CLOUD1.png"
import cloud2 from "./Assets/4 CLOUD2.png"
import title from "./Assets/5 _CRYPTOBENGZ_ TITLE.png"
import game from "./Assets/huat.PNG";
import v from "./Assets/7 _V_.png"
import sun from "./Assets/2SUN.png";
import cloud1btm from "./Assets/3 CLOUD1btm.png"
import cloud2btm from "./Assets/4 CLOUD2btm.png"
import gp from "./Assets/gpcom.mp4";
// import { Link } from 'react-router-dom'
import Merchant from './Merchant'
import Join from './Join'
import { useState, useEffect } from 'react'
import premint from "./Assets/premint.png"
import Web3 from 'web3'
import abi from "./contractABI.json"
import { ethers, Signer } from 'ethers'
import gplock from "./Assets/locked.MP4";
import toast, { Toaster } from 'react-hot-toast';
import whiteList from "./Assets/cb_whitelist.json"
import random1 from "./Assets/random1.PNG"
import random2 from "./Assets/random2.PNG"
import random3 from "./Assets/random3.PNG"
import scroll from "./Assets/scroll.png"
import scrollCross from "./Assets/scrollCross.PNG"



export default function Home() {


    // Pricing
    const b1p = 0.03;
    const b2p = 0.1;
    const b3p = 0.045;


    // provider
    const [contract, setContract] = useState()

    const [nftsminted, setNftsminted] = useState();

    const [walletMinted, setWalletMinted] = useState();

    const [mintBatch, setMintBatch] = useState(0);

    const [userAddress, setUserAddress] = useState();








    // Toast notification
    const mintSuccess = () => toast.success("Minted successfully")

    const mintFailed = () => toast.error("Mint Failed")
    const notWhiteListed = () => toast.error("You are not guestlisted");

    const maxQuantity = () => toast.error("Wallet has reached maximum limit, try another wallet")


    const batch2Error = () => toast.error("Mint in multiples of 2");

    useEffect(() => {

        const getcontract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // 1) provider
            // const scAddress = "0xeB47c5b0D7981b8ee89CBfCb1160C5487A9a2B3e";
            const scAddress = "0x790F503Eb1C3F03D747B2C9321d759A81374876c";
            await provider.send("eth_requestAccounts", []);


            // // 2) signer
            const signer = provider.getSigner();

            const address = await signer.getAddress();

            setUserAddress(address);


            // 3) contract object once connected
            const contract = new ethers.Contract(scAddress, abi, signer);
            setContract(contract);

            const supply = await contract.totalSupply();
            setNftsminted(supply.toNumber());

            const minted = await contract.balanceOf(address);

            setWalletMinted(minted.toNumber())


            const curMintbatch = await contract.currentMintBatch();

            setMintBatch(curMintbatch);

            console.log(curMintbatch)






        }

        try {
            getcontract();

        } catch (error) {

        }


    }, [])




    async function Mint() {
        try {

            let mintTransaction;
            // console.log(whiteList.list.includes(userAddress))

            if (mintBatch === 1) {
                if (true) {
                    // console.log("works")
                    // console.log(quantity)
                    mintTransaction = await contract.mintBatch1(quantity, { value: ethers.utils.parseEther((quantity * 0.03).toString()) })
                    mintSuccess();
                    playGP()

                } else {
                    notWhiteListed()
                }

            }
            else if (mintBatch === 2) {

                console.log("Batch 2");
                // console.log(quantity / 2)
                // console.log(((quantity * 0.1) / 4));

                mintTransaction = await contract.mintBatch2(quantity / 2, { value: ethers.utils.parseEther(((quantity * 0.1) / 4).toString()) })
                mintSuccess();
                playGP()
            }

            else if (mintBatch === 3) {
                console.log("batch 3")
                mintTransaction = await contract.mintBatch3(quantity, { value: ethers.utils.parseEther((quantity * 0.045).toString()) })
                mintSuccess();
                playGP()
            } else {
                mintFailed();
            }
            // 4) transaction



            // const supply = await contract.totalSupply();
            // setNftsminted(supply.toNumber());

            mintTransaction = true

            setWalletMinted(walletMinted + quantity);
            // if (mintTransaction) {
            //     playGP()
            // }



        } catch (e) {
            // if (e.value) {
            //     toast.error(e.value)
            // }
            if (e.error) {
                toast.error(e.error.message)
            }
            // if (e.message) {
            //     toast.error(e.message)
            // }
            mintFailed()

        }
    }



    const [skipstyle, setskipstyle] = useState("hide");
    const [mintstyle, setmintstyle] = useState("mint");
    const [blankstyle, setblankstyle] = useState("hide");
    const [collectstyle, setcollectstyle] = useState("hide");
    const [counterStyle, setCounterStyle] = useState("counter")
    const [scrollStyle, setScrollStyle] = useState("hide");


    const [quantity, setquantity] = useState(0);


    function increment() {

        const nftmintable = 20 - walletMinted;



        if (mintBatch === 3) {
            if (nftmintable - quantity >= 1) {
                setquantity(quantity + 1);
            } else {
                maxQuantity()
            }

            // console.log(quantity)
        }


        // else if (mintBatch === 2) {
        //     if (nftmintable - (quantity) >= 4) {
        //         setquantity(quantity + 4);
        //     } else {
        //         maxQuantity()
        //     }
        // }


        // setquantity(quantity + 1);
    }
    function decrement() {
        console.log(quantity)

        if (mintBatch === 3) {
            if (quantity > 0) {
                setquantity(quantity - 1);
            }
        }
        // if (mintBatch === 2) {
        //     if (quantity >= 4) {
        //         setquantity(quantity - 4);
        //     }

        // }
    }



    function showScroll() {
        setScrollStyle("scroll");
    }

    function hideScroll() {
        setScrollStyle("hide")
        console.log("hide")
    }


    function showCounter() {
        setCounterStyle("counter");
    }

    function hideCounter() {
        setCounterStyle("hide")
    }


    function showSkipbtn() {
        setskipstyle("skip")
    }
    function hideSkipbtn() {
        setskipstyle("hide")
    }



    function showMintbtn() {
        setmintstyle("mint")
    }
    function hideMintbtn() {
        setmintstyle("hide")
    }



    function showBlank() {
        setblankstyle("blank");
    }
    function hideBlank() {
        setblankstyle("hide");
    }



    function showCollect() {
        setcollectstyle("collect");
    }

    function hideCollect() {
        setcollectstyle("hide");
    }




    function skiptoend() {
        const video = document.getElementById("gp");
        video.currentTime = video.duration;
    }

    const playGP = () => {
        const video = document.getElementById("gp");
        video.play();
        hideMintbtn();
        showSkipbtn();
        hideCounter()
    }


    const playlocked = async () => {
        const video = document.getElementById("gp");
        video.play();
    }


    function onVidEnd() {
        hideSkipbtn()
        showCollect()
        showBlank()
        showScroll();


    }

    function onlockend() {
        const video = document.getElementById("gp");
        video.currentTime = 0;
    }

    function onCollect() {
        const video = document.getElementById("gp");
        video.currentTime = 0.3;
        showMintbtn()
        hideBlank();
        hideCollect();
        showCounter();
        setquantity(0)
    }





    try {
        const video = document.getElementById("gp");
    } catch (error) {

    }

    return (
        <div className="home">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div className={scrollStyle}>


                <div className="container">
                    <img src={scrollCross} onClick={hideScroll} alt="" className="cross" />
                    <div className="congrates">CONGRATULATIONS</div>
                    <div className="received">You have minted {walletMinted} CBs</div>
                    <div className="welcome">
                        Welcome to the Cryptobengz family, a place to call home.<br /> Stay Real, Stay Huat!
                    </div>
                    {/* <a href="">
                        View on OpenSea
                    </a> */}
                </div>
                <img src={scroll} alt="" className='bg' />
            </div>
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

                    {/* <a href="https://www.premint.xyz/cryptobengz-gen-z/">
                        <img src={premint} alt="" className="premint" />
                    </a> */}
                    <div className="video">

                        <img className={blankstyle} src={require("./Assets/blank.gif")} alt="" />
                        <div className={collectstyle} >
                            <h3 onClick={onCollect}>Collect</h3>

                            {/* <div className="message">
                                Some Message, you have minted you th NFT
                            </div> */}
                        </div>
                        {/* <video id='gp' className='gp' onEnded={onVidEnd} autoPlay={false} controls={false} preload='auto' playsInline>
                            <source src={gp + "#t=0.1"} type="video/mp4" />
                        </video> */}

                        {/* <div className={counterStyle}>
                            <button onClick={decrement}>-</button>
                            <div className="value">{quantity}</div>
                            <button onClick={increment}>+</button>
                        </div> */}
                        {/* <div className={mintstyle} onClick={Mint}>mint now</div> */}
                        <video id='gp' className='gp' onEnded={onlockend} autoPlay={true} onClick={playlocked} controls={false} preload='auto' loop={false} playsInline>
                            <source src={gplock} type="video/mp4" />
                        </video>
                        <div className="message">
                            Thanks for playing!
                        </div>
                        <div className={skipstyle} onClick={skiptoend}>SKIP ANIMATION</div>

                    </div>
                    <div className="minted">
                        <div className="total">Total minted: {nftsminted}/???? minted</div>
                        {/* <div className="user">You have minted: {walletMinted}</div> */}
                    </div>
                </div>

            </div>



            <div className="collection_LB" >

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
                    <p>
                        A - ??? [error error] - supply of generative CryptoBengz Is here! Representing our little red dot. Cryptobengz GEN Z is the Grand Collection by Team Cryptobengz of this local brand. Our collection includes utility-enabled collectIbles that depict a variety of local Singaporean culture-inspired traits as seen through the team's eyes. Members of the Cryptobengz Genesis, Cryptobengz GEN Z and Cryptokakis will have access to exclusive airdrops, merchandise drops, merchant partnerships, and community events.
                        <br /><br />
                        A home to call your own. Where you can relive your Ahbeng lifestyle through us again and again.
                    </p>
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



            <div className="loreLoot" id="about">
                <div className="heading"><span>&#183;</span>  <p>CRYPTOBENGZ LORE</p> <span>&#183;</span> </div>
                <div className="chatbox">
                    <img src={require("./Assets/Narrator.PNG")} alt="" className='nar1' />
                    <img src={require("./Assets/Narrator2.PNG")} alt="" className='nar2' />
                </div>
                <div className="heading"><span>&#183;</span> <p>CB KIA’S UNLOCKABLE LOOT</p> <span>&#183;</span> </div>

                <div className="perks">
                    <div className="perk">
                        <img src={require("./Assets/26 LETTER.png")} alt="" />
                        <p>EXCLUSIVE INVITES TO IRL EVENTS</p>
                    </div>
                    <div className="perk">
                        <img src={require("./Assets/27 TICKET.png")} alt="" />
                        <p>EXCLUSIVE PERKS, PROMOS AND ACCESS TO MANY <br /> MERCHANT PARTNERS</p>
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
                <img src={cloud2btm} alt="" className='cloud' />
            </div>

            <div className="roadmap" id="roadmap">
                <div className="bgclr"></div>
                <img className='map' src={require("./Assets/Roadmap.png")} alt="" />
                <img src={cloud1btm} alt="" className='cloud' />
            </div>

            <div className="team" id="team">
                <div className="heading">
                    THE TEAM
                </div>
                <div className="members">
                    <a href='https://twitter.com/CryptoBroski3' className="member" target="_blank" rel="noreferrer" style={{ color: "#C0D157" }}>
                        <img className='diamond' src={require("./Assets/42 GREEN GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/47 DENZEL.png")} alt="" />
                        <div className="cb ">CRYPTOBROSKI</div>
                        <div className="namerole">Denzel<br />Business Dev</div>
                    </a>
                    <a href='https://linktr.ee/roshaanth?utm_source=linktree_profile_share&ltsid=3f023b27-09cd-48af-b271-9040d605f202' className="member" target="_blank" rel="noreferrer" style={{ color: "#E88B3F" }}>
                        <img className='diamond' src={require("./Assets/43 ORANGE GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/48 ROSE.png")} alt="" />
                        <div className="cb">CRYPTOTHAMBI</div>
                        <div className="namerole">Rose<br />Marketing, PR</div>
                    </a>
                    <a href='https://linktr.ee/freyatan' className="member" target="_blank" rel="noreferrer" style={{ color: "#83DBD2" }}>
                        <img className='diamond' src={require("./Assets/44 BLUE GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/49 FREYA.png")} alt="" />
                        <div className="cb">CRYPTOCHAII</div>
                        <div className="namerole">Freya<br />Artist, Creative Director</div>
                    </a>
                    <a href='https://linktr.ee/Ferrisffrancis' className="member" target="_blank" rel="noreferrer" style={{ color: "#FFD770" }}>
                        <img className='diamond' src={require("./Assets/45 YELLOW GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/50 FERRIS.png")} alt="" />
                        <div className="cb">CRYPTOHIADI</div>
                        <div className="namerole">Ferris<br />Marketing, Finance</div>
                    </a>
                    <a href='https://linktr.ee/avdheshcharjan' className="member" target="_blank" rel="noreferrer" style={{ color: "#D44848" }}>
                        <img className='diamond' src={require("./Assets/46 RED GEM.png")} alt="" />
                        <img className='memnft' src={require("./Assets/51 AVDHESH.png")} alt="" />
                        <div className="cb">CRYPTOBHAU</div>
                        <div className="namerole">Avdhesh<br />Developer</div>
                    </a>
                </div>
            </div>
            <Merchant />
            <Join />
        </div>
    )
}
