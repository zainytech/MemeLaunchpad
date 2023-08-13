import React from "react";
import './CreateToken.css'
import Header from '../Header'
import { Link } from "react-router-dom";
function CreateToken(){
    return(
        <>
        <div class="ct-main">
            <Header/>
            <div class="ct-main-container">
                <div class="ct-main2">
                    <div class="ct-main2-container">
                        <div class="ct-main2-div1">
                            <span class="ct-main2-div1-txt1">(*) is required field.</span>
                            <span class="ct-main2-div1-txt2">Token Type</span>
                            <div class="ct-main2-div1a">
                                <select>
                                    <option>Standard Token</option>
                                    <option>Liquidity Generator Token</option>
                                    <option>Baby Token</option>
                                    <option>Buyback Baby Token</option>
                                </select>
                            </div>
                            <span class="ct-main2-div1b">0.2 BNB</span>
                        </div>
                        <div class="ct-main2-div1">
                            <span class="ct-main2-div1-txt2">Name</span>
                            <div class="ct-main2-div1a">
                                <input type="text" placeholder="Ex. Ethereum"></input>
                            </div>
                        </div>
                        <div class="ct-main2-div1">
                            <span class="ct-main2-div1-txt2">Symbol</span>
                            <div class="ct-main2-div1a">
                                <input type="text" placeholder="Ex. ETH"></input>
                            </div>
                        </div>
                        <div class="ct-main2-div1">
                            <span class="ct-main2-div1-txt2">Decimals</span>
                            <div class="ct-main2-div1a">
                                <input type="text" placeholder="Ex. 18"></input>
                            </div>
                        </div>
                        <div class="ct-main2-div1">
                            <span class="ct-main2-div1-txt2">Total supply</span>
                            <div class="ct-main2-div1a">
                                <input type="text" placeholder="Ex. 100000000"></input>
                            </div>
                        </div>
                        <div class="ct-main2-div1">
                            <input id="ct-main2-div1-cb" type="checkbox"></input><label for="ct-main2-div1-cb">Implement Pink Anti-Bot System?</label>
                        </div>
                        <div class="ct-main2-div2">
                            <button dissabled>Create Token</button>
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
export default CreateToken