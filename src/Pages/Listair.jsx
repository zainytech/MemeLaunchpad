import React, { useState } from "react";
import './Listair.css';
import Header from '../Components/Header'
import { Link } from "react-router-dom";

import fav from '../assets/fav.png'
import fav1 from '../assets/fav1.png'
import fav2 from '../assets/fav2.png'
import fav3 from '../assets/fav3.png'
import fav4 from '../assets/fav4.png'
import fav5 from '../assets/fav5.png'

const Listair = () => {
    const [show, setShow] = useState(1);
    return(
        <>
            <div className="airlist">
                <div className="airlist1">
                    <Header/>
                </div>
                <div className="airlist2">
                    <h1>Airdrop</h1>
                    <div className="airlist21">
                        <div className="airlist21-col1">
                            <div>AIRDROP LAUNCHED</div>
                            <h2>272</h2>
                        </div>
                        <div className="airlist21-col1">
                            <div>PARTICIPANTS IN ALL-TIME</div>
                            <h2>16238</h2>
                        </div>
                    </div>
                    <div className="airlist22">
                        <div className={ show ===1 && "airlist22-col1" } onClick={()=> setShow(1)}>All Airdrops</div>
                        <div className={ show ===2 && "airlist22-col1" } onClick={()=> setShow(2)}>My Airdrops</div>
                        <div className={ show ===3 && "airlist22-col1" } onClick={()=> setShow(3)}>Created By You</div>
                    </div>
                    { show === 1 && <div className="airlist23">
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={fav}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>FlokiGOLD Airdrop - 10,000 FLD</h2>
                            <div className="airlist23-col12">
                                <div>Token</div>
                                <p>FLD</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>Total Token</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>participants</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Starts In: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={fav1}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Live</p>
                                </div>
                            </div>
                            <h2>Fair launch bounty campaign</h2>
                            <div className="airlist23-col12">
                                <div>Token</div>
                                <p>CGX</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>Total Token</div>
                                <p>25,183,975</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>participants</div>
                                <p>387</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Starts In: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={fav2}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Live</p>
                                </div>
                            </div>
                            <h2>Association Sportive Sale Fan Token Presale ASS</h2>
                            <div className="airlist23-col12">
                                <div>Token</div>
                                <p>ASS</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>Total Token</div>
                                <p>37,000</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>participants</div>
                                <p>1800</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Starts In: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={fav3}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>WE COIN Airdrop</h2>
                            <div className="airlist23-col12">
                                <div>Token</div>
                                <p>WECO</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>Total Token</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>participants</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Starts In: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={fav4}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>DsunDAO Airdrop</h2>
                            <div className="airlist23-col12">
                                <div>Token</div>
                                <p>Dsun</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>Total Token</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>participants</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Starts In: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={fav5}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Cancel</p>
                                </div>
                            </div>
                            <h2>Mocco Network Airdrop</h2>
                            <div className="airlist23-col12">
                                <div>Token</div>
                                <p>MOCCO</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>Total Token</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col12">
                                <div>participants</div>
                                <p>0</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Canceled: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                    </div>  }
                    <div className="hom24">
                    Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listair;
