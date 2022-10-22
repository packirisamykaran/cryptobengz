import React from 'react'
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
            "WICKED GOOD": "62 WICKED GOOD.png",
            "GATHER THE MISFITS": "63 GATHER THE MISFITS LOGO.jpg",
            "MAN MAN LAI": "60 MANMANLAI.png",
            "WAN FEN CHEE CHEONG FUN": "64 WAN FEN CHEE CHEONG FUN LOGO.jpg",
            "BAR BAR BLACK SHEEP": "69 BARBAR BLACK SHEEP LOGO.png"
        },
        "RECREATIONAL": {
            "URBAN TAVERN": "61 URBAN TAVERN.png",
            "SINGAPORE PUB CRAWL": "57 SG PUBCRAWL LOGO.png",
            "RUGRUG.SG": "67 RUGRUG.SG LOGO.png"
        },
        "RETAIL": {
            "HALOBE": "66 HALOBE LOGO.jpg",
            "PIT STOP": "65 PIT STOP LOGO.jpg",
            "DREAMTINKER": "59 DREAMTINKER.png"
        },
        "OTHERS": {
            "ANIMAL RECOVERY VETERINARY CENTRE (ARVC)": "68 ARVC LOGO.jpg"
        }
    }

    const display = [];


    for (let cat in merchList) {
        const mList = [];

        for (let mer in merchList[cat]) {

            mList.push(
                <div className="item">
                    <img src={require(`./Assets/${merchList[cat][mer]}`)} alt="" />
                    <div className="name">{mer}</div>
                </div>
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
        <div className="merchant">
            <div className="head">MERCHANT PARTNERS LIST</div>
            <div className="categories">
                {display}
            </div>
        </div>
    )
}
