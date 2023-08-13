import React from "react";
import './Leaderboard.css'
// import Sidebar from "../comp/Sidebar";
import Header from '../Components/Header'
import { Link } from "react-router-dom";

import leadb from '../assets/lead1.jpg'
import leadb1 from '../assets/leadb.jpg'
import leadb2 from '../assets/leadb2.jpg'
import leadb3 from '../assets/leadb3.jpg'
import leadb4 from '../assets/leadb4.jpg'
import leadb5 from '../assets/leadb5.png'
import leadb6 from '../assets/leadb6.png'
import leadb7 from '../assets/leadb7.jpg'
import leadb8 from '../assets/leadb8.png'

import bsc from '../assets/bsc.png'
import bsc1 from '../assets/bsc1.png'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 100;
const percentage1 = 60;

const Leaderboard = () => {
    return(
        <>
            <div className="leadb">
                <div className="leadb1">
                    <Header/>
                </div>
                <div className="leadb2">
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
                    <div className="leadb21">
                        <div className="leadb21-col1">
                            <div className="leadb21-col11">
                            <div className="leadb21-col11w">
                                <p className="leadb21-col11p">Week 18/2023</p>
                                <p>Week 17/2023</p>
                                <p>Week 16/2023</p>
                                <p>Week 15/2023</p>
                                <p>Week 14/2023</p>
                                <p>Week 13/2023</p>
                                <p>Week 12/2023</p>
                                <p>Week 11/2023</p>
                                <p>Week 10/2023</p>
                                <p>Week 9/2023</p>
                                <p>Week 8/2023</p>
                                <p>Week 7/2023</p>
                            </div>
                            </div>
                            <div className="psale21-col1">
                            <div style={{textAlign: 'left'}}>Sort By</div>
                                <form action='#' style={{width: '7rem', height: '2.4rem'}}>
                                    <label htmlFor='sort'></label>
                                        <select name='sort' id='sort' className='select-style'>
                                        <option value='Month'> All Chain </option>
                                        <option value='Today'> BSC </option>
                                        <option value='Yesterday'> Ethereum </option>
                                        <option value='Week'> Polygon </option>
                                        <option value='Week'> Fantom </option>
                                        <option value='Week'> Cronos </option>
                                        <option value='Week'> DODGE </option>
                                        <option value='Week'> ALV </option>
                                        <option value='Week'> Arbitrum </option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="leadb22">
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">1</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb1}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>Pepe Original Version <span style={{marginLeft: '.5rem'}}>$POV</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">2</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb2}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>PEPEPAD <span style={{marginLeft: '.5rem'}}>PEPEPAD</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">3</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb3}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>GREEN PEPE <span style={{marginLeft: '.5rem'}}>GPEPE</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">4</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>Yummy <span style={{marginLeft: '.5rem'}}>YUMMY</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage1} text={`${percentage1}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">5</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb4}  className="leadb22-col11-img1"/>
                                        <img src={bsc1}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>Floki CFO <span style={{marginLeft: '.5rem'}}>FlokiCFO</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">6</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb5}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>BOB BSC <span style={{marginLeft: '.5rem'}}>$BOB</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">7</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb5}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>BOB <span style={{marginLeft: '.5rem'}}>$BOB</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">8</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb6}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>PumpMaster <span style={{marginLeft: '.5rem'}}>PMASTER</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">9</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb7}  className="leadb22-col11-img1"/>
                                        <img src={bsc1}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>ChudJack <span style={{marginLeft: '.5rem'}}>Chud</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
                            <div className="leadb22-col1">
                                <div className="leadb22-col11">
                                    <div className="leadb22-col11-div">10</div>
                                    <div className="leadb22-col11-row1">
                                        <img src={leadb8}  className="leadb22-col11-img1"/>
                                        <img src={bsc}  className="leadb22-col11-img2"/>
                                    </div>
                                    <div className="leadb22-col11-row2">
                                        <div>Mr Pickles <span style={{marginLeft: '.5rem'}}>Pdoge</span></div>
                                        <div><span>1,790.9597768085664 BNB</span> – Listing time: <span>2023.05.02 16:00</span></div>
                                    </div>
                                </div>
                                <div className="leadb22-col12">
                                    <div style={{ width: 60, height: 60 }}>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({backgroundColor: 'gray', pathColor: 'green'})}/>
                                    </div>
                                    <button className="homebtn">View Pool</button>
                                </div>
                            </div>
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

export default Leaderboard;