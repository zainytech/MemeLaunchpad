import React, { useState } from "react";
// import './Prilist.css';
import Header from '../Header';
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

import user1 from '../assets/LaunchpadList/user1.png'
import user2 from '../assets/LaunchpadList/user2.jpg'
import user3 from '../assets/LaunchpadList/user3.png'
import user4 from '../assets/LaunchpadList/user4.jpg'
import user5 from '../assets/LaunchpadList/user5.png'
import user6 from '../assets/LaunchpadList/user6.jpg'

import {AiOutlineBell} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';

function LaunchpadList(){
    const [show, setShow] = useState(1);
    return(
        <>
        <div className="psale">
                <div className="psale1">
                    <Header/>
                </div>
                <div className="psale2">
                    <h1>Current Presales</h1>
                    <div className="airlist22">
                        <div className={ show ===1 && "airlist22-col1" } onClick={()=> setShow(1)}>All Launchpads</div>
                        <div className={ show ===2 && "airlist22-col1" } onClick={()=> setShow(2)}>Advanced Mode</div>
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
                                <img src={user1}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>AIHUMANS</h2>
                            <div className="prilist2-row1">Fair Launch</div>
                            <div className="prilist2-row2">Soft</div>
                            <h3>50 BNB</h3>
                            <div className="prilist2-row3">Progress (0.00%)</div>
                            <ProgressBar completed="0" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>0 BNB</p>
                                <p>50 BNB</p>
                            </div>
                            <div class="prilist2-row5">
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Liquidity %:</span><span class="prilist2-row5a-txt2">51%</span></div>
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Lockup Time:</span><span class="prilist2-row5a-txt2">365 Days</span></div>
                            </div>
                            <div className="airlist23-col13">
                                
                                <div>Sale Starts In:<br/>03:23:45:34 </div>
                                <div class="airlist23-col13a">
                                    <div><AiOutlineBell/></div>
                                    <div><AiOutlineHeart/></div>
                                    <button className="homebtn">View</button>
                                </div>
                            </div>
                        </div>
                        {/* 2////// */}
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={user2}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>Apple Fan Metaverse</h2>
                            <div className="prilist2-row1">Fair Launch</div>
                            <div className="prilist2-row2">Soft</div>
                            <h3>20 BNB</h3>
                            <div className="prilist2-row3">Progress (0.00%)</div>
                            <ProgressBar completed="0" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>0 BNB</p>
                                <p>20 BNB</p>
                            </div>
                            <div class="prilist2-row5">
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Liquidity %:</span><span class="prilist2-row5a-txt2">51%</span></div>
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Lockup Time:</span><span class="prilist2-row5a-txt2">365 Days</span></div>
                            </div>
                            <div className="airlist23-col13">
                                
                                <div>Sale Starts In:<br/>06:09:00:53 </div>
                                <div class="airlist23-col13a">
                                    <div><AiOutlineBell/></div>
                                    <div><AiOutlineHeart/></div>
                                    <button className="homebtn">View</button>
                                </div>
                            </div>
                        </div>
                        {/* 3///// */}
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={user3}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Filled</p>
                                </div>
                            </div>
                            <h2>Proxima b</h2>
                            <div className="prilist2-row1">1 ETH = 1,858,400,000 PROXIMA</div>
                            <div className="prilist2-row2">Soft/Hard</div>
                            <h3>50 ETH - 100 ETH</h3>
                            <div className="prilist2-row3">Progress (100.00%)</div>
                            <ProgressBar completed="100" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>100 ETH</p>
                                <p>100 ETh</p>
                            </div>
                            <div class="prilist2-row5">
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Liquidity %:</span><span class="prilist2-row5a-txt2">100%</span></div>
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Lockup Time:</span><span class="prilist2-row5a-txt2">3650 Days</span></div>
                            </div>
                            <div className="airlist23-col13">
                                
                                <div>Presale:<br/>Filled </div>
                                <div class="airlist23-col13a">
                                    {/* <div><AiOutlineBell/></div> */}
                                    <div><AiOutlineHeart/></div>
                                    <button className="homebtn">View</button>
                                </div>
                            </div>
                        </div>
                        {/* 4////// */}
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={user4}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>Pepepay</h2>
                            <div className="prilist2-row1">Fair Launch - Max buy 10 BNB</div>
                            <div className="prilist2-row2">Soft</div>
                            <h3>30 BNB</h3>
                            <div className="prilist2-row3">Progress (0.00%)</div>
                            <ProgressBar completed="0" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>0 BNB</p>
                                <p>30 BNB</p>
                            </div>
                            <div class="prilist2-row5">
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Liquidity %:</span><span class="prilist2-row5a-txt2">51%</span></div>
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Lockup Time:</span><span class="prilist2-row5a-txt2">365 Days</span></div>
                            </div>
                            <div className="airlist23-col13">
                                
                                <div>Sale Starts In:<br/>03:23:45:34 </div>
                                <div class="airlist23-col13a">
                                    <div><AiOutlineBell/></div>
                                    <div><AiOutlineHeart/></div>
                                    <button className="homebtn">View</button>
                                </div>
                            </div>
                        </div>
                        {/* 5///// */}
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={user5}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>POPO</h2>
                            <div className="prilist2-row1">Fair Launch - Max buy 10 BNB</div>
                            <div className="prilist2-row2">Soft</div>
                            <h3>10 BNB</h3>
                            <div className="prilist2-row3">Progress (212.61%)</div>
                            <ProgressBar completed="45" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>21.260750595 BNB</p>
                                <p>10 BNB</p>
                            </div>
                            <div class="prilist2-row5">
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Liquidity %:</span><span class="prilist2-row5a-txt2">51%</span></div>
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Lockup Time:</span><span class="prilist2-row5a-txt2">365 Days</span></div>
                            </div>
                            <div className="airlist23-col13">
                                
                                <div>Sale Starts In:<br/>03:23:45:34 </div>
                                <div class="airlist23-col13a">
                                    <div><AiOutlineBell/></div>
                                    <div><AiOutlineHeart/></div>
                                    <button className="homebtn">View</button>
                                </div>
                            </div>
                        </div>
                        {/* 6//// */}
                        <div className="airlist23-col1">
                            <div className="airlist23-col11">
                                <img src={user6}/>
                                <div className="airlist23-col11-div1">
                                    <div></div>
                                    <p>Upcoming</p>
                                </div>
                            </div>
                            <h2>AIHUMANS</h2>
                            <div className="prilist2-row1">Fair Launch</div>
                            <div className="prilist2-row2">Soft</div>
                            <h3>50 BNB</h3>
                            <div className="prilist2-row3">Progress (0.00%)</div>
                            <ProgressBar completed="0" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar>
                            <div className="prilist2-row4">
                                <p>0 BNB</p>
                                <p>50 BNB</p>
                            </div>
                            <div class="prilist2-row5">
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Liquidity %:</span><span class="prilist2-row5a-txt2">51%</span></div>
                                <div class="prilist2-row5a"><span class="prilist2-row5a-txt1">Lockup Time:</span><span class="prilist2-row5a-txt2">365 Days</span></div>
                            </div>
                            <div className="airlist23-col13">
                                
                                <div>Sale Starts In:<br/>03:23:45:34 </div>
                                <div class="airlist23-col13a">
                                    <div><AiOutlineBell/></div>
                                    <div><AiOutlineHeart/></div>
                                    <button className="homebtn">View</button>
                                </div>
                            </div>
                        </div>
                    </div>  }
                    <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    )
}
export default LaunchpadList;