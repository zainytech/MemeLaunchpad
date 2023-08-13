import React, { useState } from "react";
import './Tokenpink.css';
// import Sidebar from "../comp/Sidebar";
import { Link } from "react-router-dom";
import Header from '../Components/Header'

import token1 from '../assets/token1.jpg'
import token2 from '../assets/token2.jpg'
import token3 from '../assets/token3.png'


const Tokenpink = () => {
    const [show, setShow] = useState(1);
    return(
        <>
            <div className="tokenp">
                <div className="tokenp1">
                    <Header/>
                </div>
                <div className="tokenp2">
                    <div className="aircrt21">
                        <input type="text" placeholder="Search by Token Address" className="tokenp2-inp"/>
                        <div className="airlist22">
                            <div className={ show ===1 && "airlist22-col1" } onClick={()=> setShow(1)}>All</div>
                            <div className={ show ===2 && "airlist22-col1" } onClick={()=> setShow(2)}>My Lock</div>
                        </div>
                        { show === 1 &&<div>
                            <div className="tokenp2-col2 tokenp2-hidden">
                                <div className="tokenp2-col21">
                                <h4>Token</h4>
                                </div>
                                <div className="tokenp2-col22">
                                    <h4>Amount</h4>
                                </div>
                                <a href='#' className="tokenp2-col23"></a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token3} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>SENIOR PEPE</h5>
                                            <div>SENIOR PEPE</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">200,000,000,000,000 SENIORPEPE</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token3} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>BIBI</h5>
                                            <div>BIBI</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">100,000,000 $ELPEPE</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token1} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>Pepe Escobar</h5>
                                            <div>$ELPEPE</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">100,000,000 $ELPEPE</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token3} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>Pepe Original Punk</h5>
                                            <div>POP</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">200,000,000,000,000 POP</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token3} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>PepeZilla</h5>
                                            <div>PepeZilla</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">84,138,000,000,000 PepeZilla</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token1} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>Oreto Network</h5>
                                            <div>ORT</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">600,000,000 ORT</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token2} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>PEPE FLOKI CEO</h5>
                                            <div>PEPEMUSK</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">44,444,444,444,444 PEPEMUSK</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token3} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>VBNB</h5>
                                            <div>VBNB</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">1,100,000 VBNB</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                    <div className="tokenp2-row1">
                                    <img src={token3} className="tokenp2-row1img"/>
                                    <div className="tokenp2-row11">
                                            <h5>Stuart The Minions</h5>
                                            <div>STUART</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tokenp2-col22">350,000,000 STUART</div>
                                <a href='#' className="tokenp2-col23">View</a>
                            </div>
                        </div> }
                        { show === 2 && <div>
                            <div className="tokenp2-col2">
                                <div className="tokenp2-col21">
                                <h4>Token</h4>
                                </div>
                                <div className="tokenp2-col22">
                                    <h4>Amount</h4>
                                </div>
                                <a href='#' className="tokenp2-col23"></a>
                            </div>
                            <div className="tokenp2-nodata">
                                No Data
                            </div>
                        </div>}
                    </div>
                    
                    <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tokenpink;