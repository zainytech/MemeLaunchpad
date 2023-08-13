import React from "react";
import './Antibot.css'
import Header from '../Components/Header';

import { Link } from "react-router-dom";

const Antibot = () => {
    return(
        <>
            <div className="antibot">
                <div className="anti1">
                    <Header/>
                </div>
                <div className="anti2">
                    <div className="aircrt21">
                        <div className="aircrt21-col1">(*) is required field.</div>
                        <div className="aircrt21-col2">
                            <div className="anti2col1">  
                                <div>Token address*</div>
                                <div className="aircrt21-col5"><button>Create Token</button></div>
                            </div>    
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="aircrt21-col4">Create airdrop fee: 0.5 BNB</div>
                        <div className="aircrt21-col3">Choose a token to integrate with Pink Anti-Bot.</div>
                        <div className="aircrt21-col3">Check out the guide how to integrate Pink Anti-Bot for custom contract here: <a href="https://github.com/pinkmoonfinance/pink-antibot-guide" target="_blank">https://github.com/pinkmoonfinance/pink-antibot-guide</a></div>
                    </div>
                    <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Antibot;