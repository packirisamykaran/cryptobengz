import React from 'react'
import Perks from './Perks';
import "./style/Merchant.css"

export default function Merchant() {

    const merchList = {
        "F&B ESTABLISHMENTS": {
            "NOTHING BUT CHEESE BURGER (NBCB)": "53 NBCB LOGO.jpg",
            "LOS AMIGOS": "56 LOS AMIGOS LOGO.jpg",
            "MIRAGE": "55 MIRAGE LOGO.png",
            "WEN MOON": "52 WEN MOON LOGO.png",
            "ICE BAR": "70 ICEBAR LOGO.jpg",
            "BUZZED BAR": "58 BUZZED BAR LOGO.png",
            "BENG WHO COOKS": "54 BENGWHOCOOKS LOGO.jpg",
            // "WICKED GOOD": "62 WICKED GOOD.png",
            "GATHER THE MISFITS": "63 GATHER THE MISFITS LOGO.jpg",
            "MAN MAN LAI": "60 MANMANLAI.png",
            "WAN FEN CHEE CHEONG FUN": "64 WAN FEN CHEE CHEONG FUN LOGO.jpg",
            "BAR BAR BLACK SHEEP": "69 BARBAR BLACK SHEEP LOGO.png",
            "ANG MOH LIANG TEH": "ANG MOH LIANG TEH.jpg",
            "BESUTO": "BESUTO.jpg"
        },
        "RECREATIONAL": {
            "URBAN TAVERN": "61 URBAN TAVERN.png",
            "SINGAPORE PUB CRAWL": "57 SG PUBCRAWL LOGO.png",
            "RUGRUG.SG": "67 RUGRUG.SG LOGO.png",
            "THE EPICUREAN STATE": "The Epicurean State.png"

        },
        "RETAIL": {
            "HALOBE": "66 HALOBE LOGO.jpg",
            "PIT STOP": "65 PIT STOP LOGO.jpg",
            "DREAMTINKER": "59 DREAMTINKER.png",
            "CREW SHOP": "crewshop.jpg",
            "OSBIOME": "osbiome.jpg",
            "KULT": "KULT.jpg",
            "Pristine Aroma": "Pristine Aroma.jpg"
        },
        "OTHERS": {
            "ANIMAL RECOVERY VETERINARY CENTRE (ARVC)": "68 ARVC LOGO.jpg"
        }
    }

    const merchLinks = {
        "F&B ESTABLISHMENTS": {
            "NOTHING BUT CHEESE BURGER (NBCB)": "https://nbcb.com.sg/",
            "LOS AMIGOS": "https://www.losamigos.sg/",
            "MIRAGE": "https://www.facebook.com/theparlourmirage/",
            "WEN MOON": "https://www.facebook.com/wenmoonbar/",
            "ICE BAR": "https://www.icebar.sg/",
            "BUZZED BAR": "https://buzzed-bar.com/homepage",
            "BENG WHO COOKS": "https://www.instagram.com/bengwhocooks/?hl=en",
            // "WICKED GOOD": "https://www.wickedgood.sg/",
            "GATHER THE MISFITS": "https://gatherthemisfits.com/",
            "MAN MAN LAI": "https://manmanlai-bistro-bar.business.site/?m=true",
            "WAN FEN CHEE CHEONG FUN": "https://www.instagram.com/wanfencheecheongfan/?hl=en",
            "BAR BAR BLACK SHEEP": "https://www.bbbs.com.sg/",
            "ANG MOH LIANG TEH": "https://amlt.sg/",
            "BESUTO": "https://instagram.com/besuto.sg?igshid=YmMyMTA2M2Y="
        },
        "RECREATIONAL": {
            "URBAN TAVERN": "https://www.urbantavernsg.com/",
            "SINGAPORE PUB CRAWL": "https://www.sgpubcrawl.com/",
            "RUGRUG.SG": "https://www.instagram.com/rugrug.sg/?igshid=YmMyMTA2M2Y%3D",
            "THE EPICUREAN STATE": "https://yachtchartersingapore.com.sg/"
        },
        "RETAIL": {
            "HALOBE": "https://halobe.sg/",
            "PIT STOP": "",
            "DREAMTINKER": "",
            "CREW SHOP": "https://www.crewshop.sg/pages/passwordvalidation?redirect=%2F",
            "OSBIOME": "https://osbiome.com/",
            "KULT": "https://www.kult.online/",
            "Pristine Aroma": "PristineAroma.sg"
        },
        "OTHERS": {
            "ANIMAL RECOVERY VETERINARY CENTRE (ARVC)": "https://sg.petspace.group/"
        }
    }

    const display = [];


    for (let cat in merchList) {
        const mList = [];

        for (let mer in merchList[cat]) {


            mList.push(
                <a href={merchLinks[cat][mer]} target="_blank" rel="noreferrer" className=" item">
                    < img src={require(`./Assets/${merchList[cat][mer]}`)} alt="" />
                    <div className="name">{mer}</div>
                </a>
            )
        }

        display.push(
            <div className="cat">
                <div className="heading">{cat}</div>
                <div className="items">
                    {mList}
                </div>
            </div>
        )

    }

    return (
        <div className="merchant" id="merchant">
            <div className="head">MERCHANT PARTNERS LIST</div>
            <div className="categories">
                {display}
            </div>
            <Perks />
            <h1>BECOME A MERCHANT <br />PARTNER TODAY!</h1>
            <h2>Contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karangoku12345@gmail.com">cryptobengs@gmail.com</a>  or <a href="https://www.instagram.com/cryptobengz/?hl=en">@cryptobengz</a> and we will get back to you ASAP!</h2>
        </div>
    )
}
