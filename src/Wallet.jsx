import React from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from "@web3-react/core"


export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
})
export default function Wallet() {

    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }

    }


    return (
        <div className="wallet">
            {active ? <div className='active' onClick={disconnect}>{account.slice(0, 7)}</div> : <div onClick={connect} className="btn">Connect</div>}
        </div>
    )
}
