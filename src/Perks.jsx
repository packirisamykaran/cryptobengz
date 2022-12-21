import React from 'react'
import "./style/Perks.css"
import perksdata from "./Assets/perks.json"

export default function Perks() {

    let data = perksdata.perks;

    let display = []

    for (let merc in data) {
        display.push(
            <div className="item" key={merc}>
                <img src={require(`./Assets/${perksdata.img[merc]}`)} className="merchants" alt='logo' />
                <div className="perk">{data[merc]}</div>
            </div >
        )
    }

    return (
        <div className="perks-page">
            {display}
        </div>
    )
}
