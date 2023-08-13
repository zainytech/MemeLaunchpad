import React, { useState } from "react";
import './Prilist.css';
import Header from '../Components/Header';
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

import sale from '../assets/sale.jpeg'
import sale1 from '../assets/sale1.jpeg'
import sale2 from '../assets/sale2.jpg'
import sale3 from '../assets/sale3.png'
import sale4 from '../assets/sale4.jpg'
import sale5 from '../assets/sale5.jpg'

const Prilist = () => {
    const [show, setShow] = useState(1);
    return(
        <>
            <div className="psale">
                <div className="psale1">
                    <Header/>
                </div>
                <div className="psale2">
                    <h1>Private Sales</h1>
                    <div className="airlist22">
                        <div className={ show ===1 && "airlist22-col1" } onClick={()=> setShow(1)}>All Private Sales</div>
                        <div className={ show ===2 && "airlist22-col1" } onClick={()=> setShow(2)}>My Private Sale</div>
                        <div className={ show ===3 && "airlist22-col1" } onClick={()=> setShow(3)}>My Contributions</div>
                    </div>
                    <div className="plist21">
                        <input type="text" placeholder="Enter token name or token symbol" />
                        <div className="psale21-col1">
                            <div>Filter By</div>
                            <form action='#' style={{width: '7rem', height: '2.4rem'}}>
                                    <label htmlFor='sort'></label>
                                        <select name='sort' id='sort' className='select-style'>
                                        <option value='Month'> All status </option>
                                        <option value='Today'> KYC </option>
                                        <option value='Yesterday'> Upcoming </option>
                                        <option value='Week'> Incoming </option>
                                        <option value='Week'> Filled </option>
                                        <option value='Week'> Ended </option>
                                        <option value='Week'> Canceled </option>
                                    </select>
                                </form>
                        </div>
                        <div className="psale21-col1">
                            <div>Sort By</div>
                            <form action='#' style={{width: '7rem', height: '2.4rem'}}>
                                    <label htmlFor='sort'></label>
                                        <select name='sort' id='sort' className='select-style'>
                                        <option value='Month'> No Filter </option>
                                        <option value='Today'> Hard cap </option>
                                        <option value='Yesterday'> Soft Cap </option>
                                        <option value='Week'> LP Percent </option>
                                        <option value='Week'> Start Tome </option>
                                        <option value='Week'> End Time </option>
                                    </select>
                                </form>
                        </div>
                    </div>
                    { show === 1 && <div className="airlist23">
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={sale}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Sale Ended</p>
                                </div>
                            </div>
                            <h2>WAGMI</h2>
                            <div className="prilist2-row1">Project will receive 95% at first release</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>2.5 ETH - 5 ETH</h3>
                            <div className="prilist2-row3">Progress (90.00%)</div>
                            <ProgressBar completed="90" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>4.5 ETH</p>
                                <p>5 ETH</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Presale Ended: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={sale1}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Sale Ended</p>
                                </div>
                            </div>
                            <h2>$PAMP</h2>
                            <div className="prilist2-row1">Project will receive 95% at first release</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>4 ETH - 8 ETH</h3>
                            <div className="prilist2-row3">Progress (100.00%)</div>
                            <ProgressBar completed="100" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>8 ETH</p>
                                <p>8 ETH</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Presale Ended: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={sale2}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Sale Ended</p>
                                </div>
                            </div>
                            <h2>$RGRTS V2</h2>
                            <div className="prilist2-row1">Project will receive 95% at first release</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>5 ETH - 10 ETH</h3>
                            <div className="prilist2-row3">Progress (0.20%)</div>
                            <ProgressBar completed="0.2" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>0.2 ETH</p>
                                <p>10 ETH</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Presale Ended: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={sale3}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Sale Ended</p>
                                </div>
                            </div>
                            <h2>$PIPER Private Sale</h2>
                            <div className="prilist2-row1">Project will receive 95% at first release</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>7.5 ETH - 15 ETH</h3>
                            <div className="prilist2-row3">Progress (0.00%)</div>
                            <ProgressBar completed="0" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>0 ETH</p>
                                <p>15 ETH</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Presale Ended: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={sale4}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Sale Ended</p>
                                </div>
                            </div>
                            <h2>LUIGI PRESALE</h2>
                            <div className="prilist2-row1">Project will receive 95% at first release</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>5 ETH - 10 ETH</h3>
                            <div className="prilist2-row3">Progress (62.00%)</div>
                            <ProgressBar completed="62" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>6.2 ETH</p>
                                <p>10 ETH</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Presale Ended: </div>
                                <button className="homebtn">View Airdrop</button>
                            </div>
                        </div>
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={sale5}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Sale Ended</p>
                                </div>
                            </div>
                            <h2>$REGRETS</h2>
                            <div className="prilist2-row1">Project will receive 95% at first release</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>5 ETH - 10 ETH</h3>
                            <div className="prilist2-row3">Progress (100.0%)</div>
                            <ProgressBar completed="100" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>10 ETH</p>
                                <p>10 ETH</p>
                            </div>
                            <div className="airlist23-col13">
                                <div>Presale Ended: </div>
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

export default Prilist;