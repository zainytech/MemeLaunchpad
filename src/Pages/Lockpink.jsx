import React from "react";
import './Lockpink.css';
// import Sidebar from "../comp/Sidebar";
import { Link } from "react-router-dom";
import Header from '../Components/Header'

import lock from '../assets/lock.svg'
import lock1 from '../assets/lock1.png'
import lock2 from '../assets/lock2.png'
import lock3 from '../assets/lock3.png'
import lock4 from '../assets/lock4.png'
import lock5 from '../assets/lock5.png'

const Lockpink = () => {
    return(
        <>
            <div className="lockp">
                <div className="lockp1">
                    <Header/>
                </div>
                <div className="lockp2">
                    <div className="aircrt21">
                        <h4>Create your Lock</h4>
                        <div className="lockp2-col1">
                            <h5>PinkLock is audited by: </h5>
                            <div>
                                <img src={lock} className="lockp2-img"/>
                                <img src={lock1} className="lockp2-img1"/>
                                <img src={lock2}/>
                                <img src={lock3}/>
                                <img src={lock4}/>
                                <img src={lock5}/>
                            </div>
                        </div>
                        <div className="aircrt21-col2">
                            <div>Token or LP Token address<span style={{color: 'red'}}>*</span></div>
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="lockp2-col2">
                            <input type="checkbox" id="html" name="fav_language" value="HTML"/>
                            <label for="html">use another owner ?</label>
                        </div>
                        <div className="aircrt21-col2">
                            <div>Title</div>
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="aircrt21-col2">
                            <div>Amount<span style={{color: 'red'}}>*</span></div>
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="lockp2-col2">
                            <input type="checkbox" id="html" name="fav_language" value="HTML"/>
                            <label for="html">use vesting ?</label>
                        </div>
                        <div className="aircrt21-col2">
                            <div>Lock until (UTC time)<span style={{color: 'red'}}>*</span></div>
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="msend22">
                        Please exclude PinkLock's lockup address <b>0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE</b> from fees, rewards, max tx amount to start locking tokens. <br/> We don't support rebase tokens.                  </div>
                        <div className="aircrt21-col5"><button>Lock</button></div>
                    </div>
                    <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lockpink;