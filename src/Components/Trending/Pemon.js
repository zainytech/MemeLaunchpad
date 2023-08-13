import React from "react";
import './Pemon.css'
import Header from '../Header'
import pemonuser1 from '../assets/trending/pemon-user1.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import {AiOutlineHeart} from 'react-icons/ai';
import {TbNetwork} from 'react-icons/tb';
import {FiTwitter} from 'react-icons/fi';
import {FaTelegramPlane} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {IoLogoReddit} from 'react-icons/io5';
import {SiDisqus} from 'react-icons/si';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {BsArrowRight} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import {IoMdArrowDropdown} from 'react-icons/io';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import pepechart from '../assets/trending/pepe-chart.jpg'

function Pemon(){
    const [login, setlogin] = useState('');
    const onClicklogin = ()=>{
        setlogin(!login);
    };
    const [signup, setsignup] = useState('');
    const onClicksignup = ()=>{
        setsignup(true);
    };
    const [faq1, setfaq1] = useState('');
    const onClickfaq1 = ()=>{
        setfaq1(!faq1);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
    };
    const [faq2, setfaq2] = useState('');
    const onClickfaq2 = ()=>{
        setfaq2(!faq2);
        setfaq1(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
    };
    const [faq3, setfaq3] = useState('');
    const onClickfaq3 = ()=>{
        setfaq3(!faq3);
        setfaq2(false);
        setfaq1(false);
        setfaq4(false);
        setfaq5(false);
    };
    const [faq4, setfaq4] = useState('');
    const onClickfaq4 = ()=>{
        setfaq4(!faq4);
        setfaq2(false);
        setfaq3(false);
        setfaq1(false);
        setfaq5(false);
    };
    const [faq5, setfaq5] = useState('');
    const onClickfaq5 = ()=>{
        setfaq5(!faq5);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq1(false);
    };
    const [bestcom, setbestcom] = useState(true);
    const onClickbestcom = ()=>{
        setbestcom(true);
        setnewcom(false);
        setoldcom(false);
    };
    const [newcom, setnewcom] = useState('');
    const onClicknewcom = ()=>{
        setbestcom(false);
        setnewcom(true);
        setfaq3(false);
    };
    const [oldcom, setoldcom] = useState('');
    const onClickoldcom = ()=>{
        setbestcom(false);
        setnewcom(false);
        setoldcom(true);
    };
    return(
        <>
        <div class="pemon-main">
            <Header/>
            <div class="pemon-main-container">
                <div class="pemon-main1">
                    <div class="pemon-main1a">
                        <div class='pemon-main1a-div1'>
                            <div class="pemon-main1a-div1a">
                                <div class="pemon-main1a-div1a-div1">
                                    <img src={pemonuser1}></img>
                                </div>
                                <div class="pemon-main1a-div1a-div2">
                                    <div class="pemon-main1a-div1a-div2a">
                                        <span class="pemon-main1a-div1a-div2a-txt1">GucciPepe Fair Launch</span>
                                        <div class="pemon-main1a-div1a-div2a-1 purple">SAFU</div>
                                        <div class="pemon-main1a-div1a-div2a-1 blue">Audit</div>
                                        <div class="pemon-main1a-div1a-div2a-1 green">KYC</div>
                                        <div class="pemon-main1a-div1a-div2a-1 yellow">DOXX</div>
                                        <div class="pemon-main1a-div1a-div2a-2">
                                            <div class="pemon-main1a-div1a-div2a-2a"><AiOutlineHeart/></div>
                                            <div class="pemon-main1a-div1a-div2a-2b"><li>Sale Live</li></div>
                                        </div>
                                    </div>
                                    <div class="pemon-main1a-div1a-div2b">
                                        <TbNetwork/>
                                        <FiTwitter/>
                                        <FaTelegramPlane/>
                                        <FiGithub/>
                                        <IoLogoReddit/>
                                    </div>  
                                    <div>
                                        <p class="pemon-main1a-div1a-div2b-p">🎩 Embrace GucciPepe, where style meets memes 🎩 Max security with locked 🔐 LP tokens . Liquidity and presale: 90.1% of total supply. GUCCIPEPE.BNB wallet: 9.9% for future CEX listings etc. Zero trading fees, amazing features: 🛍 exclusive GucciPepe merch🤖GPT-3.5 PepeSwag bot. Dive into luxury fashion mixed with meme culture, and enjoy a seamless investing experience💎🎁 3 10KTF GUCCI GRAIL NFTs GIVEAWAYS FOR RANDOM BUYERS 🚀CMC & CG Fast-Track🎨 Ex-Gucci Designer as project Co-founder✨</p>
                                    </div>
                                    <div class="pemon-main1a-div1a-div2c">
                                        <ReactPlayer  height="100%" width="100%" url={'https://youtu.be/NheA37UNxBA'} playing={false} controls={true} muted={true}/>
                                    </div>
                                </div>
                            </div>
                            <div class="pemon-main1a-div1b">
                            <table>
                                    <tr>
                                        <td>Presale Address</td>
                                        <td class="pemon-main1a-div1b-table-td2">0x29146766a8890199a62d93a5170afbc4ed486dbe</td>
                                    </tr>
                                    <tr>
                                        <td>Token Name</td>
                                        <td class="pemon-main1a-div1b-table-td2">Pepe Original Version</td>
                                    </tr>
                                    <tr>
                                        <td>Token Symbol</td>
                                        <td class="pemon-main1a-div1b-table-td2">$POV</td>
                                    </tr>
                                    <tr>
                                        <td>Token Decimals</td>
                                        <td class="pemon-main1a-div1b-table-td2">18</td>
                                    </tr>
                                    <tr>
                                        <td>Token Address</td>
                                        <td class="pemon-main1a-div1b-table-td2">0x15a3081B541e8daD25C4A5E0C4C4B4E8d105b2E8</td>
                                    </tr>
                                    <tr>
                                        <td>Total Supply</td>
                                        <td class="pemon-main1a-div1b-table-td2">420,690,000,000,000 $POV</td>
                                    </tr>
                                    <tr>
                                        <td>Tokens For Presale</td>
                                        <td class="pemon-main1a-div1b-table-td2">249,466,490,445,859.5 $POV</td>
                                    </tr>
                                    <tr>
                                        <td>Tokens For Presale</td>
                                        <td class="pemon-main1a-div1b-table-td2">249,466,490,445,859.5 $POV</td>
                                    </tr>
                                    <tr>
                                        <td>Tokens For Liquidity</td>
                                        <td class="pemon-main1a-div1b-table-td2">249,466,490,445,859.5 $POV</td>
                                    </tr>
                                    <tr>
                                        <td>Initial Market Cap (estimate)</td>
                                        <td class="pemon-main1a-div1b-table-td2">$635,858</td>
                                    </tr>
                                    <tr>
                                        <td>Soft Cap</td>
                                        <td class="pemon-main1a-div1b-table-td2">6 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Presale Start Time</td>
                                        <td class="pemon-main1a-div1b-table-td2">2023.05.13 18:00 (UTC)</td>
                                    </tr>
                                    <tr>
                                        <td>Presale End Time</td>
                                        <td class="pemon-main1a-div1b-table-td2">2023.05.15 15:00 (UTC)</td>
                                    </tr>
                                    <tr>
                                        <td>Listing On</td>
                                        <td class="pemon-main1a-div1b-table-td2">Uniswap</td>
                                    </tr>
                                    <tr>
                                        <td>Liquidity Percent</td>
                                        <td class="pemon-main1a-div1b-table-td2">60%</td>
                                    </tr>
                                    <tr>
                                        <td>Liquidity Lockup Time</td>
                                        <td class="pemon-main1a-div1b-table-td2">400 days after pool ends</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="pemon-main1a-div1">
                            <div><h3>Affiliate Program</h3></div>
                            <div class="pemon-main1a-div1b">
                                <table>
                                    <tr>
                                        <td>Your Rewards</td>
                                        <td class="pemon-main1a-div1b-table-td2">0 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Pool Referrer Count</td>
                                        <td class="pemon-main1a-div1b-table-td2">51</td>
                                    </tr>
                                    <tr>
                                        <td>Realtime Reward Percentage</td>
                                        <td class="pemon-main1a-div1b-table-td2">51</td>
                                    </tr>
                                    <tr>
                                        <td>Current Rewards</td>
                                        <td class="pemon-main1a-div1b-table-td2">12.11703070820699 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Total Ref Amount</td>
                                        <td class="pemon-main1a-div1b-table-td2">123.51655847049732 ETH</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="pemon-main1a-div1">
                            <div><h3>Token Matrices</h3></div>
                            <div class="pemon-main1a-div1b">
                                <img src={pepechart}></img>
                            </div>
                        </div>
                        <div class="pemon-main1a-div1">
                            <div class="pemon-main1a-div1-lr"><h3>Lock Records</h3><span class="pemon-main1a-div1-txt3">View All</span></div>
                            <div class="pemon-main1a-div1-lr-table">
                                <table>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Unlock time(UTC)</th>
                                    </tr>
                                    <tr>
                                        <td>29,027,610,000,000.585</td>
                                        <td>2023.06.14 16:00</td>
                                        <td>View</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="pemon-main1b">
                        <div class="pemon-main1a-div1">
                            <div class="pemon-main1b-box1">
                                <div class="pemon-main1b-box1-div1">
                                Make sure the website is pinksale.finance!
                                </div>
                                <div class="pemon-main1b-box1-div2">
                                    <p>Presale Ends In</p>
                                    <span class="pemon-main1b-box1-div2a">00</span><span class="pemon-main1b-box1-div2a">00</span><span class="pemon-main1b-box1-div2a">00</span><span class="pemon-main1b-box1-div2a">00</span>
                                </div>
                                <br/>
                            <p><ProgressBar completed="5" className="progressbar" height=".8rem" bgColor="green" borderRadius=".6rem" baseBgColor="#3E4356"></ProgressBar></p>
                            <div class="prilist2-row4">
                                <p>302.3138571421041 ETH</p>
                                <p>6 ETH</p>    
                            </div> 
                            <div class="pemon-main1b-box1-div3">
                                <h4>Amount (max: 10 ETH)</h4>
                                <div class="pemon-main1b-box1-div3-input">
                                    <input type="text" placeholder="0.0"></input>
                                    <span class="pemon-main1b-box1-div3-txt1">Max</span>
                                </div>
                                <br/>
                                <div class="pemon-main1b-box1-div4">
                                    <button>Connect Wallet</button>
                                    <p>See affiliate detail</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="pemon-main1a-div1">
                            <div class="pemon-main1a-div1b">
                                <table>
                                    <tr>
                                        <td>Status</td>
                                        <td class="pemon-main1a-div1b-table-td2">inprogress</td>
                                    </tr>
                                    <tr>
                                        <td>Current Rate</td>
                                        <td class="pemon-main1a-div1b-table-td2">1 BNB = 545,120,752,431.875</td>
                                    </tr>
                                    <tr>
                                        <td>Total Contributors</td>
                                        <td class="pemon-main1a-div1b-table-td2">367</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="pemon-main1a-div1">
                            <div class="pemon-main1a-div1-lr"><h3>Lock Records</h3><span class="pemon-main1a-div1-txt3-cb-resp"><input type="checkbox" id="pemon-main1a-div1-cb"></input><label for="pemon-main1a-div1-cb">Never Show Again</label></span></div>
                            <p>Sign up our mailing list to receive our new presales, features, tips and reviews for next 100x projects.</p>
                            <div class="pemon-main1b-box1-div3-input"><input type="text" placeholder="0.0"></input></div>
                            <br/>
                            <div class="pemon-main1b-box1-div4"><button>Subscribe</button></div>
                        </div>

                    </div>
                </div>
                <div class="pemon-main1">
                    <div class="pemon-main1a">
                        <div class="pemon-main1a-div1">
                            <div><h3>Frequently Asked Question</h3></div>
                            <div class="pemon-main1a-div1b-resp">
                                <div onClick={onClickfaq1}>{faq1?<IoIosArrowDown/>:<IoIosArrowForward/>}<span>What is KYC?</span></div>
                                {faq1? 
                                <>
                                <div class="pemon-main1a-div1b-onclick">
                                Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.
                                <br/><br/>More information about KYC can be found on the Binance Academy website via:https://academy.binance.com/en/glossary/know-your-customer
                                <br/>More information on PinkSale KYC process can be seen explained in here:https://docs.pinksale.finance/important/pinksale-kyc
                                </div>
                                </>:null}
                                <div onClick={onClickfaq2}>{faq2?<IoIosArrowDown/>:<IoIosArrowForward/>}<span>What is Audit?</span></div>
                                {faq2? 
                                <>
                                <div class="pemon-main1a-div1b-onclick">
                                The Audit badge details that the smart contract has been tested and analysed by a 3rd party service.
                                <br/><br/>Information about security audits can be seen via the Binance Academy:https://academy.binance.com/en/glossary/security-audit
                                </div>
                                </>:null}
                                <div onClick={onClickfaq3}>{faq3?<IoIosArrowDown/>:<IoIosArrowForward/>}<span>What is SAFU?</span></div>
                                {faq3? 
                                <>
                                <div class="pemon-main1a-div1b-onclick">
                                The SAFU badge demonstrates that the contract has been created by a PinkSale verified partner.
                                <br/><br/>SAFU benefits can be found via:https://docs.pinksale.finance/important/safu-contract
                                </div>
                                </>:null}
                                <div onClick={onClickfaq4}>{faq4?<IoIosArrowDown/>:<IoIosArrowForward/>}<span>What is Doxx?</span></div>
                                {faq4? 
                                <>
                                <div class="pemon-main1a-div1b-onclick">
                                Projects certified with the Doxx badge highlights that the projects owner has completed a video AMA within their community, and that their submission to PinkSale matches their KYC information.
                                <br/>More information on PinkSale Doxx badge can be seen explained in here:https://docs.pinksale.finance/important/pinksale-kyc
                                </div>
                                </>:null}
                                <div onClick={onClickfaq5}>{faq5?<IoIosArrowDown/>:<IoIosArrowForward/>}<span>What is DYOR?</span></div>
                                {faq5? 
                                <>
                                <div class="pemon-main1a-div1b-onclick">
                                DYOR aims to reduce the number of uninformed investors in cryptocurrency. It encourages them to research and understand a cryptocurrency before investing so that they can answer precisely why they are buying that currency and supporting that project. The term is also often used as a disclaimer when cryptocurrency traders and enthusiasts make public posts or share their market analyses on social media platforms.
                                </div>
                                </>:null}
                            </div>
                        </div>
                        <div class="pemon-main1a-div1">
                            <div class="pemon-main1a-div1-lr">
                                <h3>0 Comments</h3>
                                <div onClick={onClicklogin} class="pemon-main1a-div1-txt3">Login<IoMdArrowDropdown/>
                                {login?<>
                                <div class="pemon-main1a-div1-txt3-onclick">
                                    <span>Disqus</span>
                                    <span>Facebbok</span>
                                    <span>Twitter</span>
                                    <span>Google</span>
                                </div>
                                </>:null}
                                </div>
                            </div>
                            <div class="pemon-main1a-div1-comment1">
                                <div class="pemon-main1a-div1-comment-1a">G</div>
                                <textarea placeholder="Start the Discussion..."></textarea>
                            </div>
                            <div className="pemon-main1a-div1-comment2">
                                <div class="pemon-main1a-div1-comment2a">
                                    <span class="pemon-main1a-div1-comment2a-txt1">LOG IN WITH</span>
                                    <span class="pemon-main1a-div1-comment2a-icon disqus"><SiDisqus/></span>
                                    <span class="pemon-main1a-div1-comment2a-icon facebook"><BsFacebook/></span>
                                    <span class="pemon-main1a-div1-comment2a-icon twitter"><AiFillTwitterCircle/></span>
                                    <span class="pemon-main1a-div1-comment2a-icon google"><AiFillGoogleCircle/></span>
                                </div>
                                <div class="pemon-main1a-div1-comment2b">
                                    <span class="pemon-main1a-div1-comment2a-txt1">or signup with discuss</span>
                                    <div class="pemon-main1a-div1-comment2b-input" onClick={onClicksignup}>
                                        <input type="text" placeholder="Name"></input>
                                        {signup?<><input type="text" placeholder="Email"></input>
                                        <input type="text" placeholder="Password"></input></>:null}
                                    </div>
                                    {signup?<><p>Please access our Privacy Policy to learn what personal data Disqus collects and your choices about how it is used. All users of our service are also subject to our Terms of Service.</p>
                                    <button><BsArrowRight/></button></>:null}
                                </div>    
                            </div>
                            <div class="pemon-main1a-div1-comment3">
                                <div class="pemon-main1a-div1-comment3a">
                                    <div class="pemon-main1a-div1-comment3a-div1">
                                        <span><AiOutlineHeart/></span><span><li>Share</li></span>
                                    </div>
                                    <div class="pemon-main1a-div1-comment3a-div2">
                                        <div onClick={onClickbestcom} class={bestcom?"pemon-main1a-div1-comment3a-div2-onclick":null}>Best</div>
                                        <div onClick={onClicknewcom} class={newcom?"pemon-main1a-div1-comment3a-div2-onclick":null}>Newest</div>
                                        <div onClick={onClickoldcom} class={oldcom?"pemon-main1a-div1-comment3a-div2-onclick":null}>Oldest</div>
                                    </div>
                                </div>
                                <p>Be first to Comment</p>
                                <div class="pemon-main1a-comment3a-div3">
                                    <span class="pemon-main1a-comment3a-div3-txt1">Subscribe</span>
                                    <span class="pemon-main1a-comment3a-div3-txt1">Privacy</span>
                                    <span class="pemon-main1a-comment3a-div3-txt1">Do Not Sell My Data</span>
                                    <span class="pemon-main1a-comment3a-div3-txt2">DISQUS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pemon-main1b"></div>
                </div>
                <div className="hom24">
                Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Pemon