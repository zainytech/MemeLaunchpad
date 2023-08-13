import React from "react";
import './CreateLaunch.css'
import Header from '../Header'
import { Link } from "react-router-dom";
function CreateLaunch(){
    return(
        <>
        <div class="cl-main">
            <Header/>
            <div class="cl-main-container">
                <div class="cl-main-div1">
                    <div class="cl-main-div1a">
                        <div class="cl-main-div1a-a"><span>1</span></div>
                        <div class="cl-main-div1a-b">
                            <span class="cl-main-div1a-b-txt1">Verify Token</span>
                            <span class="cl-main-div1a-b-txt2">Enter the token address and verify</span>
                        </div>
                    </div>
                    <div class="cl-main-div1a">
                        <div class="cl-main-div1a-a"><span>2</span></div>
                        <div class="cl-main-div1a-b">
                            <span class="cl-main-div1a-b-txt1">DeFi Launchpad Info</span>
                            <span class="cl-main-div1a-b-txt2">Enter the launchpad information that you want to raise , that should be enter all details about your presale</span>
                        </div>
                    </div>
                    <div class="cl-main-div1a">
                        <div class="cl-main-div1a-a"><span>3</span></div>
                        <div class="cl-main-div1a-b">
                            <span class="cl-main-div1a-b-txt1">Add Additional Info</span>
                            <span class="cl-main-div1a-b-txt2">Let people know who you are</span>
                        </div>
                    </div>
                    <div class="cl-main-div1a">
                        <div class="cl-main-div1a-a"><span>4</span></div>
                        <div class="cl-main-div1a-b">
                            <span class="cl-main-div1a-b-txt1">Finish</span>
                            <span class="cl-main-div1a-b-txt2">Review your information</span>
                        </div>
                    </div>
                </div>
                <div class="cl-main2">
                <div class="cl-main2-container">
                <div class="cl-main-div2">
                    <span class="cl-main-div2-txt1">(*) is required field.</span>
                    <span class="cl-main-div2-txt2">Token address</span><button class="cl-main-div2-btn">Create token</button>
                    <div class="cl-main-div2a"><input type="text" placeholder="Ex.PinkMoon"></input></div>
                    <span class="cl-main-div2b">Pool creation fee: 0.2 ETH</span>
                </div>
                <div class="cl-main-div3">
                    <h5>Currency</h5>
                    <div class="cl-main-div3a">
                        <input type="radio"></input><label>ETH</label><br/>
                        <input type="radio"></input><label>USDT</label><br/>
                        <input type="radio"></input><label>USDC</label><br/>
                    </div>
                    <div><span class="cl-main-div2b">Users will pay with ETH for your token</span></div>
                    <br/>
                    <h5>Fee Options</h5>
                    <div class="cl-main-div3a">
                        <input type="radio"></input><label>% ETH raised only <span class="cl-main-div2b">(Recommended)</span></label><br/>
                        <input type="radio"></input><label>Other</label><br/>
                    </div>
                    <br/>
                    <h5>Listing Options</h5>
                    <div class="cl-main-div3a">
                        <input type="radio"></input><label>Auto Listing</label><br/>
                        <input type="radio"></input><label>Manual listing</label><br/>
                    </div>
                    <br/>
                    <h5>Affiliate Program</h5>
                    <div class="cl-main-div3a">
                        <input type="radio"></input><label>Disable Affiliate</label><br/>
                        <input type="radio"></input><label>Enable Affiliate</label><br/>
                    </div>
                </div>
                <div class="cl-main-div4">
                    For auto listing, after you finalize the pool your token will be auto listed on DEX.
                </div>
                <div class="cl-main-div5">
                    <button dissabled>Next</button>
                </div>
                </div>
                </div>
                <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                
            </div>
        </div>
        </>
    )
}
export default CreateLaunch