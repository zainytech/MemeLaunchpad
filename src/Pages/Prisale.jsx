import React from "react";
import './Prisale.css';
import Header from '../Components/Header';
import { Link } from "react-router-dom";

const Prisale = () => {
    return(
        <>
            <div className="psale">
                <div className="psale1">
                    <Header/>
                </div>
                <div className="psale2">
                    <div className="msend21">
                        <div className="msend12-col1">
                            <div className="msend12-col11">
                                <div>1</div>
                            </div>
                            <div className="msend12-col12">
                                <h6>Before you start</h6>
                                <div>Input your awesome title and choose the currency</div>
                            </div>
                        </div>
                        <div className="msend12-col1">
                            <div className="msend12-col11" >
                                <div style={{backgroundColor: 'white', color: 'black', border: '1px solid gray'}}>2</div>
                            </div>
                            <div className="msend12-col12">
                                <h6>Private Sale</h6>
                                <div>Enter the launchpad information that you want to raise , that should be enter all details about your presale</div>
                            </div>
                        </div>
                        <div className="msend12-col1">
                            <div className="msend12-col11">
                                <div style={{backgroundColor: 'white', color: 'black', border: '1px solid gray'}}>3</div>
                            </div>
                            <div className="msend12-col12">
                                <h6>Add Additional Info</h6>
                                <div>Let people know who you are</div>
                            </div>
                        </div>
                        <div className="msend12-col1">
                            <div className="msend12-col11">
                                <div style={{backgroundColor: 'white', color: 'black', border: '1px solid gray'}}>4</div>
                            </div>
                            <div className="msend12-col12">
                                <h6>Finish</h6>
                                <div>Review your information.</div>
                            </div>
                        </div>
                    </div>
                    <div className="aircrt21">
                        <div className="aircrt21-col1">(*) is required field.</div>
                        <div className="aircrt21-col2">
                            <div>Title*</div>
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="aircrt21-col3">Pool creation fee: 0.2 ETH</div>
                        <div className="psale21">
                            <h4>Currency</h4>
                            <div className="psale21-col1">
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                <label for="html">ETH</label><br/>
                                <input type="radio" id="css" name="fav_language" value="CSS"/>
                                <label for="css">USDT</label><br/>
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                                <label for="javascript">USDC</label>
                            </div>
                        </div>
                        <div className="aircrt21-col3">Users will pay with ETH for your token</div>
                        <div className="aircrt21-col5"><button>Next</button></div>
                    </div>
                    <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prisale;