import React from "react";
import './Home.css';

import pinkmoon from '../assets/pinkmoon.png';
import { Link } from "react-router-dom";
import Sidebar from "../comp/Sidebar";
import Header from '../Components/Header';

const Home = () => {
    return(
        <>
            <div className="home">
                <div className="home1">
                    <Header/>
                </div>
                <div className="home2">
                    <div className="home21">
                        <h1>The Launchpad Protocol for Everyone!</h1>
                        <div>PinkSale helps everyone to create their own tokens and token sales in few seconds.
                        Tokens created on PinkSale will be verified and published on explorer websites.</div>
                        <div className="home21-flex">
                            <button className="homebtn">Create Now</button>
                            <button className="homebtn">Learn More</button>
                        </div>
                    </div>
                    <div className="home22">
                        <div className="home22-col1">
                            <h2>$489.1M</h2>
                            <div>Total Liquidity Raised</div>
                        </div>
                        <div className="home22-col1">
                            <h2>16207</h2>
                            <div>Total Projects</div>
                        </div>
                        <div className="home22-col1">
                            <h2>1.7M</h2>
                            <div>Total Participants</div>
                        </div>
                        <div className="home22-col1">
                            <h2>$250M</h2>
                            <div>Total Values Locked</div>
                        </div>
                    </div>
                    <div className="home21 hom21pad">
                        <h1>A Suite of Tools for Token Sales.</h1>
                        <div>A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!</div>
                    </div>
                    <div className="home23">
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Standard</h2>
                            <div>Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Deflationary</h2>
                            <div>Generate deflationary tokens with tax and/or charity functions.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Customization</h2>
                            <div>Create a token sale for your own custom token easily.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Launchpad</h2>
                            <div>Use the token you mint to create a launchpad with just a few clicks</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Branding</h2>
                            <div>Adding logo, social links, description, listing on PinkSale.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Management</h2>
                            <div>The portal to help you easily update content for your launchpad.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Community</h2>
                            <div>Promote your launchpad to thousands of buyers on PinkSale.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>Locking</h2>
                            <div>Lock your liquidity to PinkSwap, PancakeSwap after presale.</div>
                        </div>
                    </div>
                    <div className="home21">
                        <h1>A Growing Protocol Ecosystem.</h1>
                        <div>We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!</div>
                    </div>
                    <div className="home23">
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>PinkMoon</h2>
                            <div>The best launchpad for professional teams</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>PinkSale</h2>
                            <div>Launch a token sale with a few clicks.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>PinkSwap</h2>
                            <div>Swap tokens and farming $PinkS.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>PinkLock</h2>
                            <div>Locking liquidity on PinkSwap.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>PinkElon</h2>
                            <div>The first meme token on PinkMoon.</div>
                        </div>
                        <div className="home23-col1">
                            <img src={pinkmoon}/>
                            <h2>PinkWallet</h2>
                            <div>Crypto wallet, buy, store, exchange & earn.</div>
                        </div>
                    </div>
                    <div className="hom24">
                    Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;