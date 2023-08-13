import React from 'react'
import './Docs.css';

import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import logo2 from '../Components/assets/navbar/logo2.png'
import { NavLink } from 'react-router-dom';
import pro1 from '../assets/pro1.webp'
import pro2 from '../assets/pro2.webp'
import pro3 from '../assets/pro3.webp'
import pro4 from '../assets/pro4.webp'
import brand1 from '../assets/brand1.webp'
import brand2 from '../assets/brand2.webp'
import brand3 from '../assets/brand3.webp'
import token1 from '../assets/token1.webp'
import token2 from '../assets/token2.webp'
import token3 from '../assets/token3.webp'
import pad1 from '../assets/pad1.webp'
import pad2 from '../assets/pad2.webp'
import pad3 from '../assets/pad3.webp'
import pad4 from '../assets/pad4.webp'
import pad5 from '../assets/pad5.webp'
import pad6 from '../assets/pad6.webp'
import pad7 from '../assets/pad7.webp'
import pad8 from '../assets/pad8.webp'
import pad9 from '../assets/pad9.webp'
import pad10 from '../assets/pad10.webp'
import pad11 from '../assets/pad11.webp'
import pad12 from '../assets/pad12.webp'
import pad13 from '../assets/pad13.webp'
import pad14 from '../assets/pad14.webp'
import pad15 from '../assets/pad15.webp'
import pad16 from '../assets/pad16.webp'
import pad17 from '../assets/pad17.webp'
import pad18 from '../assets/pad18.webp'
import pad19 from '../assets/pad19.webp'
import pad20 from '../assets/pad20.webp'
import pad21 from '../assets/pad21.webp'
import list1 from '../assets/list1.webp'
import list2 from '../assets/list2.webp'
import list3 from '../assets/list3.webp'
import list4 from '../assets/list4.webp'
import list5 from '../assets/list5.webp'
import list6 from '../assets/list6.webp'
import list7 from '../assets/list7.webp'
import list8 from '../assets/list8.webp'
import list9 from '../assets/pad9.webp'
import list10 from '../assets/pad10.webp'
import list11 from '../assets/pad11.webp'
import list12 from '../assets/pad12.webp'
import list13 from '../assets/pad13.webp'
import list14 from '../assets/pad14.webp'
import list15 from '../assets/pad15.webp'
import list16 from '../assets/pad16.webp'
import list17 from '../assets/pad17.webp'
import list18 from '../assets/pad18.webp'
import list19 from '../assets/pad19.webp'
import list20 from '../assets/pad20.webp'
import gd1 from '../assets/gd1.webp'
import gd2 from '../assets/gd2.webp'
import gd3 from '../assets/gd3.webp'
import gd4 from '../assets/gd4.webp'
import gd5 from '../assets/gd5.webp'
import gd6 from '../assets/gd6.webp'
import gd7 from '../assets/gd7.webp'
import gd8 from '../assets/gd8.webp'
import gd9 from '../assets/gd9.webp'
import pre from '../assets/pre.webp'
import pre1 from '../assets/pre2.webp'
import pre2 from '../assets/pre3.webp'
import pre3 from '../assets/pre4.webp'
import pre4 from '../assets/pre5.webp'
import pre5 from '../assets/pre6.webp'
import pre6 from '../assets/pre7.webp'
import pre7 from '../assets/pre8.webp'
import pre8 from '../assets/pre9.webp'
import pre9 from '../assets/pre10.webp'
import fr1 from '../assets/fr1.webp'
import fr2 from '../assets/fr2.webp'
import fr3 from '../assets/fr3.webp'
import fr4 from '../assets/fr4.webp'
import fr5 from '../assets/fr5.webp'
import fr6 from '../assets/fr6.webp'
import fr7 from '../assets/fr7.webp'
import at1 from '../assets/at1.png'
import at2 from '../assets/at2.png'
import at3 from '../assets/at3.png'
import at4 from '../assets/at4.png'
import at5 from '../assets/at5.png'
import at6 from '../assets/at6.png'
import st1 from '../assets/st1.png'
import st2 from '../assets/st2.png'
import st3 from '../assets/st3.png'
import st4 from '../assets/st4.png'
import st5 from '../assets/st5.png'
import st6 from '../assets/st6.webp'
import sl1 from '../assets/sl1.webp'
import sl2 from '../assets/sl2.webp'
import sl3 from '../assets/sl3.webp'
import sl4 from '../assets/sl4.webp'
import sl5 from '../assets/sl5.webp'
import sl6 from '../assets/sl6.webp'
import sl7 from '../assets/sl7.webp'
import sl8 from '../assets/sl8.webp'
import ap1 from '../assets/ap1.webp'
import ap2 from '../assets/ap2.webp'
import ap3 from '../assets/ap3.webp'
import ap4 from '../assets/ap4.webp'
import ap5 from '../assets/ap5.webp'
import ap6 from '../assets/ap6.webp'
import ap7 from '../assets/ap7.webp'
import ap8 from '../assets/ap8.webp'
import ap9 from '../assets/ap9.webp'
import intro from '../assets/intro.webp'
import pk1 from '../assets/pk1.webp'
import pk2 from '../assets/pk2.webp'
import pk3 from '../assets/pk3.webp'
import pk4 from '../assets/pk4.webp'
import pk5 from '../assets/pk5.webp'
import pk6 from '../assets/pk6.webp'
import pk7 from '../assets/pk7.webp'
import pk8 from '../assets/pk8.webp'
import pk9 from '../assets/pk9.webp'
import pk10 from '../assets/pk10.webp'
import lk1 from '../assets/lk1.webp'
import lk2 from '../assets/lk2.webp'
import lk3 from '../assets/lk3.webp'
import lk4 from '../assets/lk4.webp'
import lk5 from '../assets/lk5.webp'
import lk6 from '../assets/lk6.webp'
import lk7 from '../assets/lk7.webp'
import lk8 from '../assets/lk8.webp'
import lk9 from '../assets/lk9.webp'
import lk10 from '../assets/lk10.webp'
import lk11 from '../assets/lk11.webp'
import lk12 from '../assets/lk12.webp'
import lk13 from '../assets/lk13.webp'
import lk14 from '../assets/lk1.png'
import lk15 from '../assets/lk14.webp'
import lk16 from '../assets/lk15.webp'
import sd1 from '../assets/sd1.png'
import sd2 from '../assets/sd2.png'
import sd3 from '../assets/sd3.png'
import er1 from '../assets/er1.webp'
import er2 from '../assets/er2.webp'
import er3 from '../assets/er3.webp'
import er4 from '../assets/er4.webp'
import er5 from '../assets/er5.webp'
import er6 from '../assets/er6.webp'
import er7 from '../assets/er7.webp'
import wal1 from '../assets/wal1.jpg'
import er8 from '../assets/er8.png'
import er9 from '../assets/er9.webp'
import er10 from '../assets/er10.png'
import er11 from '../assets/er11.webp'
import {GoThreeBars} from 'react-icons/go'
import {RxCross2} from 'react-icons/rx'
import { useState } from 'react';




export const Docs = () => {
    return(
        <>
            <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar className="hide"/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Introducing</h1>
                            <div>PinkSale is a decentralized launchpad that allows users to launch their own token and create their own initial token sale. No coding knowledge is required, just simply navigate through to our terminal and design your own token in just a few clicks. PinkSale offers multiple other features to help you with the overall token launch, such as: Automatic listing of your token on PancakeSwap, UniSwap, ShibaSwap, SushiSwap, KuSwap, QuickSwap and MM Finance, all whilst giving you the ability to lock your LP and and adding an optional vesting period for your tokens.</div>
                            <h4>Why PinkSale?</h4>
                            <div>On top of being a premier token sale creator, PinkSale aims to incentivize users to continue use our platform. Our goal is to provide a safe environment for all of our investors that use our Pink ecosystem. With this in mind, we have implemented strict KYC procedures to deter dangerous and deceptive behaviour from entering our platform. At the end of the day, what matters most to us is that you, the investor, feels protected and can have the confidence that PinkSale is a safe place for you to invest in crypto projects.</div>
                            <NavLink to='/docs1' className='doc22'>
                                <div className='doc22-col1'>
                                    <div>Next</div>
                                    <h4>Token Metrices</h4>
                                </div>
                                <BsArrowRight className='doc22-icon'/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Dsidebar = () => {

    return(
        <>
            <div className='doc1'>
                        <NavLink to='/docs'>Introducing</NavLink>
                        <NavLink to='/docs1'>Token Metrices</NavLink>
                        <NavLink to='/docs2'>Token Utility</NavLink>
                        <NavLink to='/docs3'>Services Fees</NavLink>
                        <div>Important</div>
                        <NavLink to='/docs4'>Contact Us</NavLink>
                        <NavLink to='/docs5'>Social Links</NavLink>
                        <NavLink to='/docs6'>PinkSale KYC</NavLink>
                        <NavLink to='/docs7'>PinkSale Trending</NavLink>
                        <NavLink to='/docs8'>Affiliate Program</NavLink>
                        <NavLink to='/docs9'>PinkSale calculator</NavLink>
                        <NavLink to='/docs10'>YouTube Tutorials</NavLink>
                        <NavLink to='/docs11'>Contract Developers</NavLink>
                        <NavLink to='/docs12'>Marketing Firms</NavLink>
                        <NavLink to='/docs13'>Marketing Services</NavLink>
                        <NavLink to='/docs14'>AMAs + Calls(Telegram)</NavLink>
                        <NavLink to='/docs15'>AMAs + Calls(Twitter)</NavLink>
                        <NavLink to='/docs16'>KYC partners</NavLink>
                        <NavLink to='/docs17'>Audit partners</NavLink>
                        <NavLink to='/docs18'>SAFU Contract</NavLink>
                        <NavLink to='/docs19'>Based Badge</NavLink>
                        <NavLink to='/docs20'>DEX Partners</NavLink>
                        <NavLink to='/docs21'>CEX Listing</NavLink>
                        <NavLink to='/docs22'>Dapp + Web Developers</NavLink>
                        <NavLink to='/docs23'>Design Partners</NavLink>
                        <NavLink to='/docs24'>Presale Support</NavLink>
                        <NavLink to='/docs25'>Brand Assets</NavLink>
                        <NavLink to='/docs26'>Team Verification</NavLink>
                        <NavLink to='/docs27'>PinkSale Elite Club</NavLink>
                        <div>TOKENS</div>
                        <NavLink to='/docs28'>Create a Standard Token</NavLink>
                        <NavLink to='/docs29'>Craete a Liquidity Geneartor Token</NavLink>
                        <NavLink to='/docs30'>Create a Baby Token</NavLink>
                        <NavLink to='/docs31'>Create a Butback Baby Token</NavLink>
                        <div>LAUNCHPADS</div>
                        <NavLink to='/docs32'>Create a Launchpad</NavLink>
                        <NavLink to='/docs33'>Update a Launchpad</NavLink>
                        <NavLink to='/docs34'>Finalize a Launchpad</NavLink>
                        <NavLink to='/docs35'>Cancel a Launchpad</NavLink>
                        <NavLink to='/docs36'>Add/Remove WhiteLists</NavLink>
                        <NavLink to='/docs37'>Create a Presale Using Stablecoin</NavLink>
                        <NavLink to='/docs38'>Create a Presale (Manual Listing)</NavLink>
                        <NavLink to='/docs39'>Finalize a Presale (Manual Listing)</NavLink>
                        <NavLink to='/docs40'>Manual Listing</NavLink>
                        <div>PRESALE VESTING</div>
                        <NavLink to='/docs41'>Team Vesting Guide</NavLink>
                        <NavLink to='/docs42'>Presale Vesting Guide</NavLink>
                        <div>INVESTING</div>
                        <NavLink to='/docs43'>How to Buy a Presale</NavLink>
                        <NavLink to='/docs44'>How to Claim Tokens</NavLink>
                        <NavLink to='/docs45'>How ro Withdraw your Contribution</NavLink>
                        <NavLink to='/docs46'>Emergency Withdraw</NavLink>
                        <div>FAIR LAUNCH</div>
                        <NavLink to='/docs47'>Create a Fair Launch</NavLink>
                        <NavLink to='/docs48'>Finalize a Fair Launch</NavLink>
                        <div>DUTCH AUCTION</div>
                        <NavLink to='/docs49'>Create a Dutch Auction</NavLink>
                        <NavLink to='/docs50'>Finalize a Dutch Auction</NavLink>
                        <div>SUBSCRIPTION</div>
                        <NavLink to='/docs51'>Create a Subscription</NavLink>
                        <NavLink to='/docs52'>Subscription Allocation Calculation</NavLink>
                        <div>PRIVATE SALE</div>
                        <NavLink to='/docs53'>Create a Private Sale</NavLink>
                        <NavLink to='/docs54'>Finalize a Private Sale</NavLink>
                        <div>PINK AIRDROP</div>
                        <NavLink to='/docs55'>Craete an airdrop</NavLink>
                        <div>PINK ANTI-BOT</div>
                        <NavLink to='/docs56'>Introducing</NavLink>
                        <NavLink to='/docs57'>Pink Anti-Bot Guide</NavLink>
                        <NavLink to='/docs58'>How to Integrate Pink AntiBot for Custom COntract</NavLink>
                        <div>PINLOCK</div>
                        <NavLink to='/docs59'>Craete a Lock</NavLink>
                        <NavLink to='/docs60'>How to Unlock</NavLink>
                        <div>MULTI-SENDER</div>
                        <NavLink to='/docs61'>How to use Multi-Sender</NavLink>
                        <div>COMMON ERRORS</div>
                        <NavLink to='/docs62'>Exclude Fess, NavLinkidends, Max TV on BSCScan</NavLink>
                        <NavLink to='/docs63'>Fall with Error"Not enough allowance"</NavLink>
                        <NavLink to='/docs64'>TrustWallet RPC Issue</NavLink>
                        <NavLink to='/docs65'>How to Fix RPC Error</NavLink>
                        <NavLink to='/docs66'>Presale Cancellation</NavLink>
                        <NavLink to='/docs67'>Finalize a Subscription</NavLink>
                        <NavLink to='/docs68'>Privacy Policy</NavLink>
                        <NavLink to='/docs69'>Terms of Services</NavLink>
                        
                    </div>
        </>
    );
}

export const Dheader = () => {
    const[show, setShow] = useState(false);
 return(
    <>
                    <div className='dhead1'>
                        <GoThreeBars onClick={()=>setShow(!show)} className='bars'/>

                            { show? <div className='doc112'>
                        <RxCross2 onClick={()=>setShow(!show)} className='cross'/>
                        <NavLink to='/docs'>Introducing</NavLink>
                        <NavLink to='/docs1'>Token Metrices</NavLink>
                        <NavLink to='/docs2'>Token Utility</NavLink>
                        <NavLink to='/docs3'>Services Fees</NavLink>
                        <div>Important</div>
                        <NavLink to='/docs4'>Contact Us</NavLink>
                        <NavLink to='/docs5'>Social Links</NavLink>
                        <NavLink to='/docs6'>PinkSale KYC</NavLink>
                        <NavLink to='/docs7'>PinkSale Trending</NavLink>
                        <NavLink to='/docs8'>Affiliate Program</NavLink>
                        <NavLink to='/docs9'>PinkSale calculator</NavLink>
                        <NavLink to='/docs10'>YouTube Tutorials</NavLink>
                        <NavLink to='/docs11'>Contract Developers</NavLink>
                        <NavLink to='/docs12'>Marketing Firms</NavLink>
                        <NavLink to='/docs13'>Marketing Services</NavLink>
                        <NavLink to='/docs14'>AMAs + Calls(Telegram)</NavLink>
                        <NavLink to='/docs15'>AMAs + Calls(Twitter)</NavLink>
                        <NavLink to='/docs16'>KYC partners</NavLink>
                        <NavLink to='/docs17'>Audit partners</NavLink>
                        <NavLink to='/docs18'>SAFU Contract</NavLink>
                        <NavLink to='/docs19'>Based Badge</NavLink>
                        <NavLink to='/docs20'>DEX Partners</NavLink>
                        <NavLink to='/docs21'>CEX Listing</NavLink>
                        <NavLink to='/docs22'>Dapp + Web Developers</NavLink>
                        <NavLink to='/docs23'>Design Partners</NavLink>
                        <NavLink to='/docs24'>Presale Support</NavLink>
                        <NavLink to='/docs25'>Brand Assets</NavLink>
                        <NavLink to='/docs26'>Team Verification</NavLink>
                        <NavLink to='/docs27'>PinkSale Elite Club</NavLink>
                        <div>TOKENS</div>
                        <NavLink to='/docs28'>Create a Standard Token</NavLink>
                        <NavLink to='/docs29'>Craete a Liquidity Geneartor Token</NavLink>
                        <NavLink to='/docs30'>Create a Baby Token</NavLink>
                        <NavLink to='/docs31'>Create a Butback Baby Token</NavLink>
                        <div>LAUNCHPADS</div>
                        <NavLink to='/docs32'>Create a Launchpad</NavLink>
                        <NavLink to='/docs33'>Update a Launchpad</NavLink>
                        <NavLink to='/docs34'>Finalize a Launchpad</NavLink>
                        <NavLink to='/docs35'>Cancel a Launchpad</NavLink>
                        <NavLink to='/docs36'>Add/Remove WhiteLists</NavLink>
                        <NavLink to='/docs37'>Create a Presale Using Stablecoin</NavLink>
                        <NavLink to='/docs38'>Create a Presale (Manual Listing)</NavLink>
                        <NavLink to='/docs39'>Finalize a Presale (Manual Listing)</NavLink>
                        <NavLink to='/docs40'>Manual Listing</NavLink>
                        <div>PRESALE VESTING</div>
                        <NavLink to='/docs41'>Team Vesting Guide</NavLink>
                        <NavLink to='/docs42'>Presale Vesting Guide</NavLink>
                        <div>INVESTING</div>
                        <NavLink to='/docs43'>How to Buy a Presale</NavLink>
                        <NavLink to='/docs44'>How to Claim Tokens</NavLink>
                        <NavLink to='/docs45'>How ro Withdraw your Contribution</NavLink>
                        <NavLink to='/docs46'>Emergency Withdraw</NavLink>
                        <div>FAIR LAUNCH</div>
                        <NavLink to='/docs47'>Create a Fair Launch</NavLink>
                        <NavLink to='/docs48'>Finalize a Fair Launch</NavLink>
                        <div>DUTCH AUCTION</div>
                        <NavLink to='/docs49'>Create a Dutch Auction</NavLink>
                        <NavLink to='/docs50'>Finalize a Dutch Auction</NavLink>
                        <div>SUBSCRIPTION</div>
                        <NavLink to='/docs51'>Create a Subscription</NavLink>
                        <NavLink to='/docs52'>Subscription Allocation Calculation</NavLink>
                        <div>PRIVATE SALE</div>
                        <NavLink to='/docs53'>Create a Private Sale</NavLink>
                        <NavLink to='/docs54'>Finalize a Private Sale</NavLink>
                        <div>PINK AIRDROP</div>
                        <NavLink to='/docs55'>Craete an airdrop</NavLink>
                        <div>PINK ANTI-BOT</div>
                        <NavLink to='/docs56'>Introducing</NavLink>
                        <NavLink to='/docs57'>Pink Anti-Bot Guide</NavLink>
                        <NavLink to='/docs58'>How to Integrate Pink AntiBot for Custom COntract</NavLink>
                        <div>PINLOCK</div>
                        <NavLink to='/docs59'>Craete a Lock</NavLink>
                        <NavLink to='/docs60'>How to Unlock</NavLink>
                        <div>MULTI-SENDER</div>
                        <NavLink to='/docs61'>How to use Multi-Sender</NavLink>
                        <div>COMMON ERRORS</div>
                        <NavLink to='/docs62'>Exclude Fess, NavLinkidends, Max TV on BSCScan</NavLink>
                        <NavLink to='/docs63'>Fall with Error"Not enough allowance"</NavLink>
                        <NavLink to='/docs64'>TrustWallet RPC Issue</NavLink>
                        <NavLink to='/docs65'>How to Fix RPC Error</NavLink>
                        <NavLink to='/docs66'>Presale Cancellation</NavLink>
                        <NavLink to='/docs67'>Finalize a Subscription</NavLink>
                        <NavLink to='/docs68'>Privacy Policy</NavLink>
                        <NavLink to='/docs69'>Terms of Services</NavLink>
                        
                    </div> : null }
 
                        {/* <img src={dhead} alt='pinkmoon'/> */}
                        <NavLink to="/"><img class="head-div1a-img" src={logo2}></img></NavLink>
                        {/* <div>Meme Launchpad</div> */}
                    </div>
                    <div className='dhead2'>
                        <div>#memelaunchpad</div>
                        <input type='text' placeholder='search'/>
                    </div>
                    
    </>
 );
}


export const Doc1 = () => {
   return(
    <>
            <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar className='hide'/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Token Metrics</h1>
                            <div>PINKSALE tokenomics are designed with long-term value creation in mind. We believe that great things take time to build properly and that success will require long-term commitment from the team. This is reflected in the tokenomics here below:</div>
                            <ul>
                                <li>Total Supply: 100,000 PINKSALE</li>
                                <li>Team: 16% of total supply, vesting 33 months, starting from month 13.</li>
                                <li>Marketing: 8% of total supply, vesting 23 months, starting from month 4.</li>
                                <li>Advisory: 6% of total supply, vesting 12 months, starting from month 4.</li>
                                <li>Private Round: 8% of total supply, 10% at TGE, 20% on month 2, month 3, month 4, 30% on month 5.</li>
                                <li>Public Round: 4% of total supply, 30% at TGE, 35% every 2 weeks.</li>
                                <li>Rewards: 40% of total supply, spread out over 8 years.</li>
                                <li>Ecosystem: 12% of total supply, vesting 23 months, starting from month 4.</li>
                                <li>Exchange Liquidity: 6% of total supply, 50% at TGE, 50% for future listings.</li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Introducing</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs2' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Token Utility</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
   )
}
export const Doc2 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Token Utility</h1>
                            <div>You can use #PINKSALE to pay for any fees on our platform. And every quarter, we will use 20% of our profits to buy back #PINKSALE and burn them 🔥🔥🔥</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs1' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Token Metrices</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs3' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Services Fees</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }
export const Doc3 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Service Fees</h1>
                            <ol>
                                <li>Binance Smart Chain
                                <ul>
                                    <li>Standard Token Minting Fees: 0.2 BNB</li>
                                    <li>Liquidity Generator Token Minting Fees: 0.2 BNB</li>
                                    <li>Baby Token Minting Fees: 0.2 BNB</li>
                                    <li>Buyback Baby Token Minting Fees: 0.2 BNB</li>
                                    <li>Create BSC Launchpad Fees: There are 2 options:
                                    <ul>
                                        <li>1 BNB + 5% BNB Sold</li>
                                        <li>1 BNB + 2% of Tokens Sold + 2% of BNB Sold.</li>
                                    </ul>
                                    </li>
                                    <li>Create BSC Fair Launch Fees: There are 2 options:
                                    <ul>
                                        <li>1 BNB + 5% BNB Sold</li>
                                        <li>1 BNB + 2% of Tokens Sold + 2% of BNB Sold.</li>
                                    </ul>
                                    </li>
                                    <li>Create BSC Private Sale Fees: 1 BNB + 3% of BNB Sold</li>
                                    <li>Pink Anti-Bot: 1 BNB</li>
                                    <li>PinkLock: Free</li>
                                    <li>Pink Airdrop: 0.5 BNB + 1% of Airdrop Tokens.</li>
                                </ul>
                                </li>
                                <li> Ethereum Network
                                    <ul>
                                        <li>Standard Token Minting Fees: 0.01 ETH</li>
                                        <li>Liquidity Generator Token Minting Fees: 0.01 ETH</li>
                                        <li>Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Buyback Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>PinkLock: Free.</li>
                                        <li>Pink Airdrop: 0.1 ETH + 1% of Airdrop Tokens.</li>
                                    </ul>
                                </li>
                                <li>Arbitrum Network
                                <ul>
                                        <li>Standard Token Minting Fees: 0.01 ETH</li>
                                        <li>Liquidity Generator Token Minting Fees: 0.01 ETH</li>
                                        <li>Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Buyback Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>PinkLock: Free.</li>
                                        <li>Pink Airdrop: 0.1 ETH + 1% of Airdrop Tokens.</li>
                                    </ul>
                                </li>
                                <li> Plygon (MATIC) Chain
                                    <ul>
                                        <li>Standard Token Minting Fees: 0.01 ETH</li>
                                        <li>Liquidity Generator Token Minting Fees: 0.01 ETH</li>
                                        <li>Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Buyback Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>PinkLock: Free.</li>
                                        <li>Pink Airdrop: 0.1 ETH + 1% of Airdrop Tokens.</li>
                                    </ul>
                                </li>
                                <li>Avalanche C-Chain
                                    <ul>
                                        <li>Standard Token Minting Fees: 0.01 ETH</li>
                                        <li>Liquidity Generator Token Minting Fees: 0.01 ETH</li>
                                        <li>Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Buyback Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>PinkLock: Free.</li>
                                        <li>Pink Airdrop: 0.1 ETH + 1% of Airdrop Tokens.</li>
                                    </ul>
                                </li>
                                <li>Fantom Network
                                    <ul>
                                        <li>Standard Token Minting Fees: 0.01 ETH</li>
                                        <li>Liquidity Generator Token Minting Fees: 0.01 ETH</li>
                                        <li>Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Buyback Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>PinkLock: Free.</li>
                                        <li>Pink Airdrop: 0.1 ETH + 1% of Airdrop Tokens.</li>
                                    </ul></li>
                                <li>Cronos Chain
                                <ul>
                                        <li>Standard Token Minting Fees: 0.01 ETH</li>
                                        <li>Liquidity Generator Token Minting Fees: 0.01 ETH</li>
                                        <li>Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Buyback Baby Token Minting Fees: 0.01 ETH</li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>Create ETH Launchpad Fees: There are 2 options:
                                            <ul>
                                                <li>0.2 ETH + 5% ETH Sold</li>
                                                <li>0.2 ETH + 2% of Tokens Sold + 2% of ETH Sold</li>
                                            </ul>
                                        </li>
                                        <li>PinkLock: Free.</li>
                                        <li>Pink Airdrop: 0.1 ETH + 1% of Airdrop Tokens.</li>
                                    </ul></li>
                            </ol>
                            <div className='doc22-flex'>
                                <NavLink to='/docs2' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Token Utility</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs4' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Contact Us</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }
 export const Doc4 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Contact Us</h1>
                            <div>If you have any questions, business ideas, please contact us on our Telegram: https://t.me/pinkecosystem</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs3' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Service Fees</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs5' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Social Links</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }

 export const Doc5 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Social Links</h1>
                            <ul>
                                <li>PinkSale: <a href='/'>https://www.pinksale.finance/</a></li>
                                <li>Telegram Group:<a href='#'>https://t.me/pinkecosystem</a></li>
                                <li>Telegram ANN:<a href='#'>https://t.me/pinkecosystem_ann</a></li>
                                <li>Twitter<a href='#'>https://twitter.me/pinkecosystem_ann</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs4' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Contact Us</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs6' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>PinkSale KYC</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }

 export const Doc6 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>PinkSale KYC</h1>
                            <div>New KYC page: <a href=''>https://pinksale.notion.site/PinkSale-KYC-6047e9b832d4484bae4206aa938a74f7</a></div>
                            <h4>KYC is only for Project Owners</h4>
                            <div>As you know, at PinkSale we take the safety of our investors very seriously. We hate scams and rugpulls and, because of that, we have built many features and tools for you to be able to make informed decisions as to whether a presale is worth investing in or not.</div>
                            <div>Scrolling through the list of current and past presales, you might have noticed that several projects have a KYC badge next to their names. This brief article is designed to explain what that means and what it entails for all stakeholders.</div>
                            <h4>KYC Explained</h4>
                            <div>At PinkSale, Know Your Customer, or KYC is the process of identity verification to ascertain that the person speaking to us is really who she/he says they are. How does it work? The identities of the project owner is determined by submitting ID documentation (Passport, National ID) to an automated platform. This is similar to the KYC process needed when opening up a trading account on a major exchange like Binance, for example.</div>
                            <h4>What Does it Mean For You?</h4>
                            <div>The KYC process aims to rid our platform of scams and rugpulls by acting as a deterrent for dubious devs. If any of the KYCed project’s team members scams investors: 
                                <ul>
                                    <li>We will reveal their identities.</li>
                                    <li>We will make this information public for those wanting to file criminal charges.</li>
                                </ul>
                            </div>
                            <div><b>To investors: </b> If you have serious reservations about a project, and you have proofs that the project is a scam, please contact us ASAP, supplying as much evidence as possible. We will go through the claim and let you know the result of our investigation. </div>
                            <div><b>To project owners: </b>If you want investors to trust you, we highly recommend that you approach our KYC Manager on Telegram and apply for KYC verification. This will bring legitimacy to your project. KYC may take 24 - 48 hours so please contact us asap. </div>
                            <div>The KYC service on PinkSale is another of the great features making our platform the best launchpad available. It will also help further in cleaning up the crypto industry, making people realize that they are accountable for their actions, even in a decentralized world. </div>
                            <h4>Doxx Badge</h4>
                            <div>The Doxx badge is the latest Add-on to PinkSale and is aimed at encouraging Project Owners put their identity behind their project. By doing this, it allows for greater verification and is another step forward in the KYC journey, but additionally, it also aids in security for investors.</div>
                            <div>To receive the Doxx badge, all you need to do is:
                                <ul>
                                    <li>Complete KYC with PinkSale</li>
                                    <li>Upload a video AMA on to YouTube and share it with your community (via Telegram &/or Discord) - the video must remain public. You must show Community link and people ask questions in the video. Example: https://www.youtube.com/watch?v=GiXm8TAOT_8</li>
                                    <li>Send your YouTube video to PinkSale via your private support group</li>
                                </ul>
                            </div>
                            <div>Upon completion of the above 3 steps, PinkSale staff will verify and match both the KYC video and the YouTube video. if you are successful, you will receive your Doxx badge. Want to know the best part? The Doxx badge is free.</div>
                            <h4>Contact for KYC</h4>
                            <div>PinkSale charges $600 per KYC, It may take up to 24 - 48 hours. Please contact @babypinkpink on Telegram for the KYC badge on PinkSale. Not only support KYC in English, we also support KYC in some local languages:</div>
                            <ul>
                                <li>Italian</li>
                                <li>Spanish</li>
                                <li>Portuguese</li>
                                <li>German</li>
                                <li>Bulgarian</li>
                                <li>Dutch</li>
                                <li>Turkish</li>
                                <li>Hindi</li>
                                <li>Chineese</li>
                                <li>Russian</li>
                                <li>Arabic</li>
                                <li>Albanian</li>
                                <li>Vietnamese</li>
                                <li>Nigerian</li>
                                <li>French</li>
                                <li>Korean</li>
                                <li>Indonesian</li>
                            </ul>
                            <h4>Refund Policy</h4>
                            <div>By means of this post, we provide you with all instructions and requirements to obtain a successful KYC. If you do not agree please do not send payment. By going ahead with payment of KYC processing fee you agree that you shall not be entitled to a refund under any circumstance. </div>
                            <div>In particular, we wish to make clear that you are required to be honest with us at all times, and use your real documents, your real legal name, and your real role in the project. Failure to do so will result in the immediate cancellation of your KYC, with no refund given.</div>
                            <h4>Important Disclaimer </h4>
                            <div>A project receiving the KYC badge does not mean in any way that we approve or recommend that project, even if we host an AMA with them. Please always DYOR before investing, remembering that PinkSale is a decentralized platform.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs5' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Social Links</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs7' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>PinkSale Trending</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }
 export const Doc7 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>PinkSale Trending</h1>
                            <div>PinkSale gives every project the ability to trend on our website. The launchpad highlights the top 12 trending projects at the time and dynamically adjusts their position based on the performance of the token and its fundraising success.</div>
                            <div>The trending bar is controlled via a smart algorithm that has been designed to keep trending fair, whilst also having the ability to remove projects who try to trick the algorithm.</div>
                            <h4>Some of the trending metrics are listed below:</h4>
                            <ul>
                                <li> Buy volume — the more buy volume on your presale pool, the higher you will trend.</li>
                                <li><NavLink to='/docs6'>KYC + Audit</NavLink> — projects with KYC and Audit badges will get higher priority over projects without these badges.</li>
                                <li><NavLink to='daina'>SAFU</NavLink> — projects with SAFU badges will get the highest priority with regards to trending.</li>
                                <li><NavLink to='daina1'>DOXX</NavLink> - projects will get more scores to trending</li>
                            </ul>
                            <div><b>Tip: </b> If you want to better your chances at trending, combine the above metrics but please note, the above will not guarantee you a trending position, the algorithm will assess project popularity and adjust accordingly.</div>
                            <div>Lastly, we advise project owners NOT to pay external parties for "PinkSale Trending" services as they are likely a scam - Our smart algorithm will detect fraudulent trending behaviours and blacklist the project, so it is best to follow our tips above.</div>
                            <div>Note: Again, PinkSale Trending is free. If there are people approach for PinkSale Trending, they are definitely scammer. Please report and block them. </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs6' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>PinkSale KYC</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs8' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Affiliate Program</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }

 export const Doc8 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Affiliate Program</h1>
                            <div>Project owners can enable the affiliate program before/after creating the presale pool. Affiliate program cannot be disabled after you enabled it. Only the project owner can set rewards for the affiliate program himself (max is 10% of hard-cap). Users participating in the affiliate program can claim rewards after the presale got finalized.</div>
                            <h4><ul>
                                <li>Affiliate Reward Pool = Total Presale Raised * % Referral</li>
                            </ul></h4>
                            <div>Total rewards will be shared for users who brought buy volume to the presale pool. The more buy volume you bring to the presale pool, the higher reward you will get.</div>
                            <div>For example, if you set the affiliate pool is 5%, and the presale raised 1000 BNB. Affiliate Reward Pool = 1000 BNB x 5% = 50 BNB. If there are 3 users participating in the affiliate program:</div>
                            <ul>
                                <li>A refers a user to buy 100 BNB</li>
                                <li>B refers a user to buy 60 BNB</li>
                                <li>C refers a user to buy 40 BNB</li>
                            </ul>
                            <div>So the total BNB referred is A + B + C = 200 BNB.</div>
                            <ul>
                                <li>User A will receive 50% of the affiliate reward pool = 25 BNB</li>
                                <li>User A will receive 30% of the affiliate reward pool = 15 BNB</li>
                                <li>User A will receive 20% of the affiliate reward pool = 10 BNB</li>
                            </ul>
                            <h4>How to Enable the Affiliate Program? </h4>
                            <div>You can enable the affiliate program when creating the presale pool. Or in the owner zone of the presale pool.</div>
                            <img src={pro1} style={{width: '90%'}}/>
                            <img src={pro2} style={{width: '90%'}}/>
                            <h4>How to Get Your Affiliate Link?</h4>
                            <div>You can get your own affiliate link at the affiliate program section of the presale pool. You must log in to your MetaMask wallet to see your affiliate link.</div>
                            <img src={pro3} style={{width: '80%'}}/>
                            <h4>How to Claim Your Affiliate Rewards?</h4>
                            <div>You can claim your affiliate reward at the affiliate section of the presale pool. Or you can visit your profile link at: https://www.pinksale.finance/me to claim affiliate rewards.</div>
                            <img src={pro4} style={{width: '80%'}}/>
                            <div className='doc22-flex'>
                                <NavLink to='/docs7' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>PinkSale Trending</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs9' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>PinkSale Calculator</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }
 export const Doc9 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>PinkSale Calculator</h1>
                            <div>PinkSale Calculator (Make a copy to use): <a> https://docs.google.com/spreadsheets/d/18fLdYhvOI9tMRlKLOhCYZANMOyYP1G6TFJbPoMJuD70/edit?usp=sharing</a></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs8' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Affiliate Program</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs10' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>YouTube Tutorials</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }
 export const Doc10 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>YouTube Tutorials</h1>
                            <div>Check out PinkSale tutorials here: <a href="https://www.youtube.com/channel/UCEYOqLvjXIOtXp-3Gl9qzEg/videos" target='_blank'>https://www.youtube.com/channel/UCEYOqLvjXIOtXp-3Gl9qzEg/videos</a></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs9' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Pinksale Calculator</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs11' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Contract Developers</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
 }
 export const Doc11 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Contract Developers</h1>
                            <h4>Contract Development</h4>
                            <div>If you're looking for a contract developer, please contact one of the developers below:</div>
                            <ul>
                                <li><a href='https://t.me/Bladepool' target='_blank'>Bladepool </a>-<a href=' http://cfg.ninja' target='_blank'> http://cfg.ninja</a></li>
                                <li><a href='https://t.me/interfiaudits' target='_blank'>InterFi</a>,<a href='https://t.me/interfiaudits' target='_blank'> Cryptobulls14</a> -  <a href='https://t.me/thecryptoblonde' target='_blank'>Thecryptoblonde</a><a href='https://www.interfi.network/' target='_blank'>https://www.interfi.network/</a></li>
                                <li><a href='https://t.me/Trynos' target='_blank'>Trynos </a>-<a href='https://t.me/TrynosTokenTerminal' target='_blank'> https://t.me/TrynosTokenTerminal</a></li>
                                <li><a href='https://t.me/monkey_shanti' target='_blank'>Monkey Shanti </a>-<a href='https://t.me/monkeybusinesscommunity' target='_blank'> https://t.me/monkeybusinesscommunity</a></li>
                                <li><a href='https://t.me/brick_matrix' target='_blank'>Brick Matrix </a>-<a href='http://www.thematrixlabs.com/' target='_blank'> http://www.thematrixlabs.com/</a></li>
                                <li><a href='https://t.me/anoopsafudeveloper' target='_blank'>https://t.me/anoopsafudeveloper </a>-<a href='https://t.me/legitlaunchbsctokens' target='_blank'> https://t.me/legitlaunchbsctokens</a></li>
                                <li><a href='https://t.me/CryptoNikisha' target='_blank'>Nikisha</a>, <a href='https://t.me/gemsbynikisha' target='_blank'>https://t.me/gemsbynikisha</a></li>
                                <li><a href='https://t.me/ARRN4YA' target='_blank'>https://t.me/ARRN4YA </a>-<a href='http://kesaviwebsolutions.com/' target='_blank'> http://kesaviwebsolutions.com/</a></li>
                                <li><a href='https://t.me/RugFreeCoinss' target='_blank'>https://t.me/RugFreeCoinss </a>-<a href='https://www.rugfreecoins.com/' target='_blank'> https://www.rugfreecoins.com/</a></li>
                                <li><a href='https://t.me/GenTokens_GEN' target='_blank'>https://t.me/GenTokens_GEN </a>-<a href='https://gentokens.com/' target='_blank'> https://gentokens.com/</a></li>
                                <li><a href='https://t.me/TresFlames' target='_blank'>https://t.me/TresFlames </a>-<a href='https://www.5thweb.io/' target='_blank'> https://www.5thweb.io/</a></li>
                                <li><a href='https://t.me/Zackrevoluzion77' target='_blank'>https://t.me/Zackrevoluzion77 </a>-<a href='https://revoluzion.io/audit-services/' target='_blank'> https://revoluzion.io/audit-services/</a></li>
                                <li><a href='https://t.me/netskylab9999' target='_blank'>https://t.me/netskylab9999 </a>-<a href='https://netskylab.com/' target='_blank'> https://netskylab.com/</a></li>
                                <li><a href='https://t.me/Yo_GK' target='_blank'>https://t.me/Yo_GK </a>-<a href='https://www.argormo.com/' target='_blank'> https://www.argormo.com/</a></li>
                                <li><a href='https://t.me/coinsult_tg' target='_blank'>https://t.me/coinsult_tg </a>-<a href='https://coinsult.net/' target='_blank'> https://coinsult.net/</a></li>
                                <li><a href='https://t.me/spencersafudev' target='_blank'>https://t.me/spencersafudev </a>-<a href='https://t.me/GreenBullGems' target='_blank'> https://t.me/GreenBullGems</a></li>
                                <li><a href='https://t.me/saidu_ca_dev' target='_blank'>https://t.me/saidu_ca_dev </a>-<a href='https://t.me/Legendcallz' target='_blank'> https://t.me/Legendcallz</a></li>
                                <li><a href='https://t.me/WhaleProfessor' target='_blank'>https://t.me/WhaleProfessor </a>-<a href='https://t.me/ProfessorsClass' target='_blank'> https://t.me/ProfessorsClass</a></li>
                                <li><a href='https://t.me/marco0x00' target='_blank'>Marco0x00 </a>-<a href='https://hashex.org/' target='_blank'> https://hashex.org/</a></li>
                                <li><a href='https://t.me/Bladepool' target='_blank'></a><a href='https://chainsulting.de/' target='_blank'> https://chainsulting.de/</a></li>
                            </ul>
                            <h4>Finalize Support</h4>
                            <div>If you have problems with finalizing the presale pool, please contact one of them for supporting:</div>
                            <ul>
                                <li><a href='https://t.me/Bladepool' target='_blank'>Bladepool </a>-<a href=' http://cfg.ninja' target='_blank'> http://cfg.ninja</a></li>
                                <li><a href='https://t.me/interfiaudits' target='_blank'>InterFi</a>,<a href='https://t.me/interfiaudits' target='_blank'> Cryptobulls14</a> -  <a href='https://t.me/thecryptoblonde' target='_blank'>Thecryptoblonde</a><a href='https://www.interfi.network/' target='_blank'>https://www.interfi.network/</a></li>
                                <li><a href='https://t.me/Trynos' target='_blank'>Trynos </a>-<a href='https://t.me/TrynosTokenTerminal' target='_blank'> https://t.me/TrynosTokenTerminal</a></li>
                                <li><a href='https://t.me/monkey_shanti' target='_blank'>Monkey Shanti </a>-<a href='https://t.me/monkeybusinesscommunity' target='_blank'> https://t.me/monkeybusinesscommunity</a></li>
                                <li><a href='https://t.me/brick_matrix' target='_blank'>Brick Matrix </a>-<a href='http://www.thematrixlabs.com/' target='_blank'> http://www.thematrixlabs.com/</a></li>
                                <li><a href='https://t.me/anoopsafudeveloper' target='_blank'>https://t.me/anoopsafudeveloper </a>-<a href='https://t.me/legitlaunchbsctokens' target='_blank'> https://t.me/legitlaunchbsctokens</a></li>
                                <li><a href='https://t.me/CryptoNikisha' target='_blank'>Nikisha</a>, <a href='https://t.me/gemsbynikisha' target='_blank'>https://t.me/gemsbynikisha</a></li>
                                <li><a href='https://t.me/ARRN4YA' target='_blank'>https://t.me/ARRN4YA </a>-<a href='http://kesaviwebsolutions.com/' target='_blank'> http://kesaviwebsolutions.com/</a></li>
                                <li><a href='https://t.me/RugFreeCoinss' target='_blank'>https://t.me/RugFreeCoinss </a>-<a href='https://www.rugfreecoins.com/' target='_blank'> https://www.rugfreecoins.com/</a></li>
                                <li><a href='https://t.me/GenTokens_GEN' target='_blank'>https://t.me/GenTokens_GEN </a>-<a href='https://gentokens.com/' target='_blank'> https://gentokens.com/</a></li>
                                <li><a href='https://t.me/TresFlames' target='_blank'>https://t.me/TresFlames </a>-<a href='https://www.5thweb.io/' target='_blank'> https://www.5thweb.io/</a></li>
                                <li><a href='https://t.me/Zackrevoluzion77' target='_blank'>https://t.me/Zackrevoluzion77 </a>-<a href='https://revoluzion.io/audit-services/' target='_blank'> https://revoluzion.io/audit-services/</a></li>
                                <li><a href='https://t.me/netskylab9999' target='_blank'>https://t.me/netskylab9999 </a>-<a href='https://netskylab.com/' target='_blank'> https://netskylab.com/</a></li>
                                <li><a href='https://t.me/Yo_GK' target='_blank'>https://t.me/Yo_GK </a>-<a href='https://www.argormo.com/' target='_blank'> https://www.argormo.com/</a></li>
                                <li><a href='https://t.me/coinsult_tg' target='_blank'>https://t.me/coinsult_tg </a>-<a href='https://coinsult.net/' target='_blank'> https://coinsult.net/</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs10' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>YouTube Tutorials</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs12' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Marketing Firms</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc12 = () => {
    return(
     <>
           <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Marketing Firms</h1>
                            <div>Hiring marketing professionals is an investment that can pay off for your launch to a great degree. If you're serious about taking your product to the next level, they should be a key part of your team. Marketing firms managing your presale campaign can be the difference between success and failure. With a high budget for marketing, the presale will be easier to fill. They'll help save time and money by avoiding scammers that try so hard but don't deliver what was promised. The advice of an experienced partner can help you with better results in your pre-sales campaign!</div>
                            <div>You should have a clear marketing strategy for both pre and post launch to attract investors. For example: If you want to spend 50 BNB on pre launch marketing to fill 250 BNB hard cap, then plan to have 50 BNB for post launch marketing.</div>
                            <div>Only at PinkSale, we share our network with every project which we spent over 1 year to build it. Each marketing firm will have its own strategies. You should work directly with a marketing firm which you think it's perfect-fit for your project. Here are just a few advantages of working with a professional firm:</div>
                            <ol>
                                <li>They have the knowledge and expertise to develop and implement effective marketing strategies.</li>
                                <li>They can help you save time and money by identifying and targeting your ideal community.</li>
                                <li>They can provide valuable insights into your industry and competition.</li>
                                <li>They can help you create and execute a plan that achieves your desired results.</li>
                                <li>They can be an invaluable resource in today's ever-changing digital landscape.</li>
                            </ol>
                            <ul>
                                <li><a href='https://t.me/CryptoK23' target='_blank'>https://t.me/CryptoK23</a>,<a href='https://t.me/Kchinoy' target='_blank'>https://t.me/Kchinoy </a>-<a href='https://themarketingwizards.net/' target='_blank'> https://themarketingwizards.net/</a></li>
                                <li><a href='https://t.me/TalkStar675' target='_blank'>https://t.me/TalkStar675 </a>-<a href='https://t.me/TalkStar675' target='_blank'> https://t.me/TalkStar675</a></li>
                                <li><a href='https://t.me/TalkStar675' target='_blank'>https://t.me/TalkStar675</a>,<a href='https://t.me/skools' target='_blank'>https://t.me/skools </a>-<a href='https://linktr.ee/legacycapital' target='_blank'> https://linktr.ee/legacycapital</a></li>
                                <li><a href='https://t.me/itsAlexGreco' target='_blank'>https://t.me/itsAlexGreco</a>,<a href='https://t.me/RomanCandles' target='_blank'>https://t.me/RomanCandles</a></li>
                                <li><a href='https://t.me/ALDOBALTO1' target='_blank'>https://t.me/ALDOBALTO1 </a> - <a href='https://linktr.ee/ABmarketingOfficial' target='_blank'> https://linktr.ee/ABmarketingOfficial</a></li>
                                <li><a href='https://t.me/HAZE89' target='_blank'>https://t.me/HAZE89 </a>-<a href='https://www.hazelab.net/' target='_blank'> https://www.hazelab.net/</a></li>
                                <li><a href='https://t.me/The_Cryptovator' target='_blank'>https://t.me/The_Cryptovator </a>-<a href='https://vatorcapital.com/' target='_blank'> https://vatorcapital.com/</a></li>
                                <li><a href='https://t.me/SolyStrong' target='_blank'>https://t.me/SolyStrong </a>-<a href='https://t.me/SolyStrong' target='_blank'> https://t.me/SolyStrong</a></li>
                                <li><a href='https://t.me/HULKSCALLS' target='_blank'>https://t.me/HULKSCALLS </a>-<a href='https://hulksgems.com/' target='_blank'> https://hulksgems.com/</a></li>
                                <li><a href='https://t.me/Mark_bscking' target='_blank'>https://t.me/Mark_bscking </a>-<a href='https://markbscking.com/' target='_blank'> https://markbscking.com/</a></li>
                                <li><a href='https://t.me/AkirasanEnterprise' target='_blank'>https://t.me/AkirasanEnterprise </a>-<a href='http://akirasanenterprise.info/' target='_blank'> http://akirasanenterprise.info/</a></li>
                                <li><a href='https://t.me/Krypto_Team1' target='_blank'>https://t.me/Krypto_Team1</a>,<a href='https://t.me/Jedi_Girl' target='_blank'>https://t.me/Jedi_Girl </a>-<a href='https://www.kryptonitemarketing.com/' target='_blank'> https://www.kryptonitemarketing.com/</a></li>
                                <li><a href='https://t.me/cryptolab66' target='_blank'>https://t.me/cryptolab66</a>,<a href='https://t.me/cryptolab67' target='_blank'>https://t.me/cryptolab67 </a>-<a href='https://www.cryptolab.marketing/' target='_blank'> https://www.cryptolab.marketing/</a></li>
                                <li><a href='https://t.me/CondaLabs' target='_blank'>https://t.me/CondaLabs </a>-<a href='https://condalabs.io/' target='_blank'> https://condalabs.io/</a></li>
                                <li><a href='https://t.me/MonkeyTreasury1' target='_blank'>https://t.me/MonkeyTreasury1 </a>-<a href='https://monkeytreasury.com/' target='_blank'> https://monkeytreasury.com/</a></li>
                                <li><a href='https://t.me/bullMarketcrypton' target='_blank'>https://t.me/bullMarketcrypton </a>-<a href='http://blockbusiness.company/' target='_blank'> http://blockbusiness.company/</a></li>
                                <li><a href='https://t.me/danhams' target='_blank'>https://t.me/danhams </a>-<a href='https://www.gemdao.io/' target='_blank'> https://www.gemdao.io/</a></li>
                                <li><a href='https://t.me/AceCryptic' target='_blank'>https://t.me/AceCryptic </a>-<a href='https://t.me/AceCryptic' target='_blank'> https://t.me/AceCryptic</a></li>
                                <li><a href='https://t.me/AceCryptic' target='_blank'>https://t.me/AceCryptic </a>-<a href='https://www.blockchainsecrets.club/' target='_blank'> https://www.blockchainsecrets.club/</a></li>
                                <li><a href='https://t.me/ShellyRise1' target='_blank'>https://t.me/ShellyRise1 </a>-<a href='https://linktr.ee/shellyrise' target='_blank'> https://linktr.ee/shellyrise</a></li>
                                <li><a href='https://linktr.ee/shellyrise' target='_blank'>https://linktr.ee/shellyrise </a>-<a href='https://brother.marketing/' target='_blank'> https://brother.marketing/</a></li>
                                <li><a href='https://t.me/OneVenoM' target='_blank'>https://t.me/OneVenoM </a>-<a href='https://venomshub.com/' target='_blank'> https://venomshub.com/</a></li>
                                <li><a href='https://t.me/cryptoservicestrend' target='_blank'>https://t.me/cryptoservicestrend </a>-<a href='https://t.me/cryptoservicestrend' target='_blank'> https://t.me/cryptoservicestrend</a></li>
                                <li><a href='https://t.me/MoonboyzCommander' target='_blank'>https://t.me/MoonboyzCommander </a>-<a href='https://www.moonboyzcrypto.com/' target='_blank'> https://www.moonboyzcrypto.com/</a></li>
                                <li><a href='https://t.me/Ericsimps' target='_blank'>https://t.me/Ericsimps </a>-<a href='https://simpsons.marketing/' target='_blank'> https://simpsons.marketing/</a></li>
                                <li><a href='https://t.me/Cryptogress' target='_blank'>https://t.me/Cryptogress</a>-<a href='https://t.me/Cryptogress' target='_blank'> https://t.me/Cryptogress</a></li>
                                <li><a href='https://t.me/hyper27374' target='_blank'>https://t.me/hyper27374 </a>-<a href='https://moonboundconsulting.com/' target='_blank'> https://moonboundconsulting.com/ </a> Tokenomics Advisor</li>
                                <li><a href='https://t.me/GrandmasterDefi' target='_blank'>https://t.me/GrandmasterDefi </a>-<a href='https://linktr.ee/grandmasterdefi' target='_blank'> https://linktr.ee/grandmasterdefi </a>- ETH Market</li>
                                <li><a href='https://linktr.ee/grandmasterdefi' target='_blank'>https://linktr.ee/grandmasterdefi </a>-<a href='https://linktr.ee/dahbaby1' target='_blank'> https://linktr.ee/dahbaby1</a></li>
                                <li><a href='https://linktr.ee/dahbaby1' target='_blank'>https://linktr.ee/dahbaby1 </a>-<a href='https://linktr.ee/dahbaby1' target='_blank'> https://linktr.ee/dahbaby1</a></li>
                                <li><a href='https://t.me/QueenMonique88' target='_blank'>https://t.me/QueenMonique88</a>-<a href='https://t.me/QueenMonique88' target='_blank'> https://t.me/QueenMonique88</a></li>
                                <li><a href='https://t.me/Dynastceo' target='_blank'>https://t.me/Dynastceo </a>-<a href='https://linktr.ee/dynastceo' target='_blank'> https://linktr.ee/dynastceo</a></li>
                                <li><a href='https://t.me/DanBlockBuzz' target='_blank'>https://t.me/DanBlockBuzz </a>-<a href='https://www.blockbuzz.net/' target='_blank'> https://www.blockbuzz.net/</a></li>
                                <li><a href='https://t.me/Info256MKT' target='_blank'>https://t.me/Info256MKT </a>-<a href='https://t.me/Info256MKT' target='_blank'> https://t.me/Info256MKT</a></li>
                                <li><a href='https://t.me/MohamedWanabeWhale' target='_blank'>https://t.me/MohamedWanabeWhale</a>,<a href='https://t.me/Crypthink' target='_blank'>https://t.me/Crypthink </a>-<a href='https://crypthink.io/' target='_blank'> https://crypthink.io/</a></li>
                                <li><a href='https://crypthink.io/' target='_blank'>https://crypthink.io/ </a>-<a href='https://xcelerate.studio/' target='_blank'> https://xcelerate.studio/</a></li>
                                <li><a href='https://linktr.ee/dtcgroup' target='_blank'>https://linktr.ee/dtcgroup </a>-<a href='https://linktr.ee/dtcgroup' target='_blank'>https://linktr.ee/dtcgroup</a></li>
                                <li><a href='https://t.me/TokenSuiteEren' target='_blank'>https://t.me/TokenSuiteEren </a>-<a href='https://tokensuite.io/' target='_blank'> https://tokensuite.io/</a></li>
                                <li><a href='https://t.me/yookody' target='_blank'>https://t.me/yookody</a>,<a href='https://t.me/titanfounder' target='_blank'>https://t.me/titanfounder </a>-<a href='https://isendit.io/' target='_blank'> https://isendit.io/</a></li>
                                <li><a href='https://t.me/MarcusCarso' target='_blank'>https://t.me/MarcusCarso </a>-<a href='https://marcuscarso.com/' target='_blank'> https://marcuscarso.com/</a></li>
                                <li><a href='https://t.me/aerdropdev' target='_blank'>https://t.me/aerdropdev </a>-<a href='https://x2vc.com/' target='_blank'> https://x2vc.com/</a></li>
                                <li><a href='https://t.me/Hisakee' target='_blank'>https://t.me/Hisakee </a>-<a href='https://hcs-group.io/' target='_blank'> https://hcs-group.io/</a></li>
                                <li><a href='https://t.me/gempresidentalt' target='_blank'>https://t.me/gempresidentalt </a>-<a href='https://presidentpromotions.com/' target='_blank'> https://presidentpromotions.com/</a></li>
                                <li><a href='https://t.me/exorio' target='_blank'>https://t.me/exorio </a>-<a href='https://x1.capital/' target='_blank'> https://x1.capital/ </a> Turkey Market</li>
                                <li><a href='https://t.me/tiu_xinh' target='_blank'>https://t.me/tiu_xinh</a>,<a href='https://t.me/rick_pig' target='_blank'>https://t.me/rick_pig </a>-<a href='https://asteroid.ventures/' target='_blank'> https://asteroid.ventures/ </a> Vietnam Market</li>
                                <li><a href='https://t.me/orca52' target='_blank'>https://t.me/orca52</a>,<a href='https://t.me/alexcruz1986' target='_blank'>https://t.me/alexcruz1986 </a>-<a href='https://t.me/Keplergroup' target='_blank'> https://t.me/Keplergroup </a> Spain Market</li>
                            </ul>
                            <h4>Private Sale</h4>
                            <ul>
                                <li><a href='https://t.me/ALTmoney2020' target='_blank'>https://t.me/ALTmoney2020</a>,<a href='https://t.me/skools' target='_blank'>https://t.me/skools </a>-<a href='https://linktr.ee/legacycapital' target='_blank'> https://linktr.ee/legacycapital</a></li>
                                <li><a href='https://t.me/TalkStar675' target='_blank'>https://t.me/TalkStar675 </a>-<a href='https://linktr.ee/talkstar' target='_blank'> https://linktr.ee/talkstar</a></li>
                                <li><a href='https://t.me/CondaLabs' target='_blank'>https://t.me/CondaLabs </a>-<a href='https://condalabs.io/' target='_blank'> https://condalabs.io/</a></li>
                                <li><a href='https://t.me/AceCryptic' target='_blank'>https://t.me/AceCryptic </a>-<a href='https://www.crypticweb3.com/' target='_blank'> https://www.crypticweb3.com/</a></li>
                                <li><a href='https://t.me/Naur_ALV' target='_blank'>https://t.me/Naur_ALV </a>-<a href='https://www.alveychain.com/' target='_blank'> https://www.alveychain.com/</a></li>
                            </ul>
                            <div>If you're a marketing firm and looking to build the partnership with PinkSale, please contact <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs11' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Contract Developers</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs13' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Marketing Services</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc13 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Marketing Services</h1>
                            <div>Please contact <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a> if you want to build the partnership with PinkSale.</div>
                            <h4>CEX Listing + Market Making</h4>
                            <ul>
                                <li>PinkSale can connect you directly to top CEXs: Huobi, Okex, Bybit, Gate, Kucoin, MEXC, Bitmart, Lbank, Bkex, Bitrue... It means you can get cheapest price for CEX listing. PinkSale also offers market-making service. Contact <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a> for more information.</li>
                            </ul>
                            <h4>Telegram Shill (Good results)</h4>
                            <ul>
                                <li><a href='https://t.me/DoctorOfCryptoo' target='_blank'>https://t.me/DoctorOfCryptoo</a></li>
                                <li><a href='https://t.me/Synergy_Syndicate' target='_blank'>https://t.me/Synergy_Syndicate</a></li>
                                <li><a href='https://t.me/RB_Memento' target='_blank'>https://t.me/RB_Memento</a>,<a href='https://t.me/ahamedshill' target='_blank'>https://t.me/ahamedshill</a></li>
                                <li><a href='https://t.me/Brother91' target='_blank'>https://t.me/Brother91</a></li>
                            </ul>
                            <h4>Telegram Bot Ads (Scan bot)</h4>
                            <ul>
                                <li><a href='https://t.me/bscsafesniperadmin' target='_blank'>https://t.me/bscsafesniperadmin</a>,<a href='https://t.me/safeanalyzerbot' target='_blank'>https://t.me/safeanalyzerbot</a></li>
                            </ul>
                            <h4>Telegram Presale Alert</h4>
                            <ul>
                                <li><a href='https://t.me/Papamuerte666' target='_blank'>https://t.me/Papamuerte666</a>,<a href='https://t.me/degenclinicfeed' target='_blank'>https://t.me/degenclinicfeed</a></li>
                            </ul>
                            <h4>Telegram Listing</h4>
                            <ul>
                                <li><a href='https://t.me/princesfast' target='_blank'>https://t.me/princesfast</a></li>
                            </ul>
                            <h4>Airdrops</h4>
                            <ul>
                                <li><a href='https://t.me/ICOAnnouncementAdmin' target='_blank'>https://t.me/ICOAnnouncementAdmin</a>,<a href='https://t.me/ICOAnnouncement' target='_blank'>https://t.me/ICOAnnouncement</a></li>
                            </ul>
                            <h4>Social Media Management</h4>
                            <ul>
                                <li><a href='https://t.me/Paul212121' target='_blank'>https://t.me/Paul212121</a>,<a href='https://www.lynchnetworking.com/' target='_blank'>https://www.lynchnetworking.com/</a></li>
                                <li><a href='https://t.me/Cryptolab90' target='_blank'>https://t.me/Cryptolab90</a>,<a href='https://irishale.carrd.co/' target='_blank'>https://irishale.carrd.co/</a></li>
                            </ul>
                            <h4>Press Release on Yahoo, BloomBerg, Watch, Insider..</h4>
                            <ul>
                                <li><a href='https://t.me/RB_Memento' target='_blank'>https://t.me/RB_Memento </a> - $2500 - 10 major sites</li>
                                <li><a href='https://t.me/The_Cryptovator' target='_blank'>https://t.me/The_Cryptovator </a> - $2500 - 400 sites </li>
                                <li><a href='https://t.me/TalkStar675' target='_blank'>https://t.me/TalkStar675 </a>- $2500 - 400 sites </li>
                                <li><a href='https://t.me/CarterVa12' target='_blank'>https://t.me/CarterVa12 </a>- $1800 - 400 sites </li>
                                <li><a href='https://t.me/Brother91' target='_blank'>https://t.me/Brother91 </a>- $1400 - 600 sites</li>
                                <li><a href='https://t.me/jadenMKT' target='_blank'>https://t.me/jadenMKT </a>- $1400 - 700 sites</li>
                                <li><a href='https://t.me/TOPGENTLEDEV' target='_blank'>https://t.me/TOPGENTLEDEV </a>- $1000 - 500 sites</li>
                            </ul>
                            <h4>Billboards, Train, Bus and Football Advertising</h4>
                            <ul>
                                <li><a href='https://t.me/Darrenukvn' target='_blank'>https://t.me/Darrenukvn</a>,<a href='https://t.me/JDoggyM' target='_blank'>https://t.me/JDoggyM </a>-<a href='https://www.jdogmedia.com/' target='_blank'> https://www.jdogmedia.com/</a></li>
                            </ul>
                            <h4>Reddit Trending</h4>
                            <ul>
                                <li><a href='https://t.me/Harrythehypemann' target='_blank'>https://t.me/Harrythehypemann</a></li>
                            </ul>
                            <h4>Whitepaper & Pitch Deck Writer</h4>
                            <ul>
                                <li><a href='https://t.me/loanwolf21' target='_blank'>https://t.me/loanwolf21</a></li>
                            </ul>
                            <h4>CoinZilla Ads</h4>
                            <ul>
                                <li><a href='https://t.me/TalkStar675' target='_blank'>https://t.me/TalkStar675</a></li>
                            </ul>
                            <h4>Voice AMA Host</h4>
                            <ul>
                                <li><a href='https://t.me/VCAdam' target='_blank'>https://t.me/VCAdam</a></li>
                                <li><a href='https://t.me/ALexandruDu' target='_blank'>https://t.me/ALexandruDu</a></li>
                                <li><a href='https://t.me/Defi_Finestt' target='_blank'>https://t.me/Defi_Finestt</a></li>
                            </ul>
                            <div></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs12' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Marketing Firms</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs14' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>AMAs + Calls (Telegram)</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc14 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>AMAs + Calls (Telegram)</h1>
                            <div>You can contact channels directly in PinkSale network if you want to do a marketing campaign yourself. Please contact <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a> to be listed here.</div>
                            <h4>Tier 1 Channels</h4>
                            <ul>
                                <li><a href='https://t.me/ggems23' target='_blank'>https://t.me/ggems23</a>,<a href='https://t.me/gollums_gems' target='_blank'>https://t.me/gollums_gems </a> - <a href='https://t.me/gollumsgems' target='_blank'> https://t.me/gollumsgems </a> Recommended</li>
                                <li><a href='https://t.me/ItsAlexGreco' target='_blank'>https://t.me/ItsAlexGreco </a>-<a href='https://t.me/DeFiApeTalk' target='_blank'> https://t.me/DeFiApeTalk </a> Exclusive</li>
                                <li><a href='https://t.me/JerrySeinfeId' target='_blank'>https://t.me/JerrySeinfeId </a>-<a href='https://t.me/ProficyPriceBot' target='_blank'> https://t.me/ProficyPriceBot </a> - Proficy Ads - Exclusive</li>
                                <li><a href='https://t.me/dominic0097' target='_blank'>https://t.me/dominic0097</a>,<a href='https://t.me/martinasol09' target='_blank'>https://t.me/martinasol09 </a>-<a href='https://t.me/cryptocatcalls' target='_blank'> https://t.me/cryptocatcalls </a> Exclusive</li>
                                <li><a href='https://t.me/Crypto_Eddie' target='_blank'>https://t.me/Crypto_Eddie </a>- <a href='https://t.me/OnsatisPresale' target='_blank'> https://t.me/OnsatisPresale </a> Turkey - Exclusive</li>
                                <li><a href='https://t.me/DwenExchange_COO' target='_blank'>https://t.me/DwenExchange_COO </a>-<a href='https://t.me/Dwen_Exchange' target='_blank'> https://t.me/Dwen_Exchange </a> - China - Exclusive</li>
                                <li><a href='https://t.me/schooolstrong' target='_blank'>https://t.me/schooolstrong </a>-<a href='https://t.me/Ventures69' target='_blank'> https://t.me/Ventures69 </a> - Vietnam - Exclusive</li>
                                <li><a href='https://t.me/EduardoTradingList' target='_blank'>https://t.me/EduardoTradingList </a>-<a href='https://t.me/doctoreclub' target='_blank'> https://t.me/doctoreclub </a>  - Spain - Exclusive</li>
                                <li><a href='https://t.me/OneVenoM' target='_blank'>https://t.me/OneVenoM </a>-<a href='https://t.me/venomcalls' target='_blank'> https://t.me/venomcalls</a></li>
                                <li><a href='https://t.me/tqsully' target='_blank'>https://t.me/tqsully</a>,<a href='https://t.me/wakame8' target='_blank'>https://t.me/wakame8 </a>-<a href='https://t.me/ShillSeals' target='_blank'> https://t.me/ShillSeals </a> Exclusive</li>
                                <li><a href='https://t.me/Mark_bscking' target='_blank'>https://t.me/Mark_bscking</a>,<a href='https://t.me/MarkGems' target='_blank'>https://t.me/MarkGems </a> Exclusive</li>
                                <li><a href='https://t.me/MrTastycalls' target='_blank'>https://t.me/MrTastycalls </a>-<a href='https://twitter.com/mrtastycalls/' target='_blank'> https://twitter.com/mrtastycalls/ </a> Exclusive</li>
                                <li><a href='https://t.me/od_100' target='_blank'>https://t.me/od_100 </a>-<a href='https://t.me/overdose_gems_calls' target='_blank'> https://t.me/overdose_gems_calls </a> Exclusive</li>
                                <li><a href='https://t.me/Pythonlead' target='_blank'>https://t.me/Pythonlead </a>-<a href='https://t.me/PythonPlays' target='_blank'> https://t.me/PythonPlays </a> Exclusive</li>
                                <li><a href='https://t.me/AgentZ1' target='_blank'>https://t.me/AgentZ1 </a>-<a href='https://t.me/ZLaunchBotOfficial' target='_blank'> https://t.me/ZLaunchBotOfficial</a></li>
                                <li><a href='https://t.me/Bossy' target='_blank'>https://t.me/Bossy </a>-<a href='https://t.me/Bossy_Callz' target='_blank'>https://t.me/Bossy_Callz </a> Exclusive</li>
                                <li><a href='https://t.me/HULKSCALLS' target='_blank'>https://t.me/HULKSCALLS </a>-<a href='https://t.me/hulksgemscalls' target='_blank'> https://t.me/hulksgemscalls </a> Exclusive</li>
                                <li><a href='https://t.me/Dynastceo' target='_blank'>https://t.me/Dynastceo </a>-<a href='https://t.me/Cryptodynast' target='_blank'> https://t.me/Cryptodynast </a> Exclusive</li>
                                <li><a href=' https://t.me/crafty_gems' target='_blank'>https://t.me/crafty_gems </a>-<a href='https://t.me/CraftyGems' target='_blank'> https://t.me/CraftyGems </a> Exclusive</li>
                                <li><a href='https://t.me/Titan6964' target='_blank'>https://t.me/Titan6964 </a>-<a href='https://t.me/WhoDis6964' target='_blank'> https://t.me/WhoDis6964 </a> Exclusive</li>
                                <li><a href='https://t.me/WCTMaster' target='_blank'>https://t.me/WCTMaster </a>-<a href='https://t.me/whalecointalk' target='_blank'> https://t.me/whalecointalk </a> Exclusive</li>
                            </ul>
                            <h4>
                                <ul>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>
                                <li><a href='' target='_blank'></a><a href='' target='_blank'></a> Exclusive</li>                                    
                                </ul>
                            </h4>
                            <div className='doc22-flex'>
                                <NavLink to='/docs13' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Marketing Services</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs15' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>AMAs + Calls (Twitter)</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc15 = () => {
    return(
     <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>AMAs + Calls (Twitter)</h1>
                            <div>You can contact channels directly in PinkSale network if you want to do a marketing campaign yourself. Please contact <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a> to be listed here.</div>
                            <ul>
                                <li><a href='https://t.me/MrTastycalls' target='_blank'>https://t.me/MrTastycalls </a> -<a href='https://twitter.com/mrtastycalls/' target='_blank'> https://twitter.com/mrtastycalls/ </a> Exclusive</li>
                                <li><a href='https://t.me/sarahmktg' target='_blank'>https://t.me/sarahmktg </a>-<a href='https://twitter.com/___sarahxz' target='_blank'> https://twitter.com/___sarahxz </a></li>
                                <li><a href='https://t.me/DaCryptoGeneral' target='_blank'>https://t.me/DaCryptoGeneral </a>-<a href='https://twitter.com/dacryptogeneral' target='_blank'> https://twitter.com/dacryptogeneral</a></li>
                            </ul>
                            <div></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs14' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>AMAs + Calls (Telegram)</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs16' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>KYC Partners</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc16 = () => {
    return(
     <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>KYC Partners</h1>
                            <div>Please contact <a href='https://t.me/babypinkpink' target='_blank'>@babypinkpink on Telegram</a> for the KYC badge on PinkSale.</div>
                            <ul>
                                <li><a href='https://t.me/coinscope_admin' target='_blank'>https://t.me/coinscope_admin </a><a href='https://www.cyberscope.io/#kyc' target='_blank'> https://www.cyberscope.io/#kyc</a></li>
                                <li><a href='https://t.me/solidproof_io' target='_blank'>https://t.me/solidproof_io </a>-<a href='https://solidproof.io/' target='_blank'> https://solidproof.io/</a></li>
                                <li><a href='https://t.me/AssureDeFiSales' target='_blank'>https://t.me/AssureDeFiSales </a>-<a href='https://assuredefi.com/' target='_blank'> https://assuredefi.com/</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs15' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>AMAs + Calls (Twitter)</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs17' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Audit Partners</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc17 = () => {
    return(
     <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Audit Partners</h1>
                            <div>If you're looking for an audit service, please contact one of the following services. Note: PinkSale only provides audit badges to presales that have the audit report from partners. Contact <a href='https://t.me/babypinkpink' target='_blank'>@babypinkpink on Telegram</a> for adding the audit badge. It may take up to 24 - 48 hours so please contact us as soon as possible.</div>
                            <h4>Normal Price:</h4>
                            <ul>
                                <li><a href='https://t.me/FreddyCryptos' target='_blank'>https://t.me/FreddyCryptos </a>-<a href='https://www.analytixaudit.com/' target='_blank'> https://www.analytixaudit.com/</a></li>
                                <li><a href='https://t.me/interfiaudits' target='_blank'>https://t.me/interfiaudits</a>,<a href='https://t.me/interfisupport' target='_blank'>https://t.me/interfisupport</a>,<a href='https://t.me/interfisupport' target='_blank'>https://t.me/interfisupport</a>,<a href='https://t.me/thecryptoblonde' target='_blank'>https://t.me/thecryptoblonde </a>-<a href='https://www.interfi.network/' target='_blank'> https://www.interfi.network/</a></li>
                                <li><a href='https://t.me/BlockSAFU' target='_blank'>https://t.me/BlockSAFU </a>-<a href='https://blocksafu.com/' target='_blank'> https://blocksafu.com/</a></li>
                                <li><a href='https://t.me/Joe_SpyWolf' target='_blank'>https://t.me/Joe_SpyWolf </a>-<a href='https://spywolf.co/' target='_blank'> https://spywolf.co/ </a> Exclusive</li>
                                <li><a href='https://t.me/FreshCoinsTG' target='_blank'>https://t.me/FreshCoinsTG </a>-<a href='https://www.freshcoins.io/audit' target='_blank'> https://www.freshcoins.io/audit</a></li>
                                <li><a href='https://t.me/coinscope_admin' target='_blank'>https://t.me/coinscope_admin </a>-<a href='https://www.cyberscope.io/' target='_blank'> https://www.cyberscope.io/</a></li>
                                <li><a href='https://t.me/Bladepool' target='_blank'>https://t.me/Bladepool </a>-<a href='https://cfg.ninja/' target='_blank'> https://cfg.ninja/ </a> Exclusive</li>
                                <li><a href='https://t.me/solidproof_io' target='_blank'>https://t.me/solidproof_io </a>-<a href='https://solidproof.io/' target='_blank'> https://solidproof.io/</a></li>
                                <li><a href='https://t.me/KISHIELD_AUDITS' target='_blank'>https://t.me/KISHIELD_AUDITS </a>-<a href='https://kishield.com/' target='_blank'> https://kishield.com/</a></li>
                                <li><a href='https://t.me/RugFreeCoinss' target='_blank'>https://t.me/RugFreeCoinss </a> -<a href='https://www.rugfreecoins.com/audit-coin' target='_blank'> https://www.rugfreecoins.com/audit-coin</a></li>
                                <li><a href='https://t.me/Solidity_Finance' target='_blank'>https://t.me/Solidity_Finance </a>-<a href='https://solidity.finance/' target='_blank'>https://solidity.finance/</a></li>
                                <li><a href='https://t.me/NFTDefiFutures' target='_blank'>https://t.me/NFTDefiFutures</a>-<a href='https://www.asfalia.xyz/' target='_blank'> https://www.asfalia.xyz/</a></li>
                                <li><a href='https://t.me/RonBurgundy22' target='_blank'>https://t.me/RonBurgundy22 </a>-<a href='https://www.managementofdefi.com/' target='_blank'> https://www.managementofdefi.com/</a></li>
                                <li><a href='https://t.me/dnlkv' target='_blank'>https://t.me/dnlkv </a>-<a href='https://www.defimoon.org/' target='_blank'> https://www.defimoon.org/</a></li>
                                <li><a href='https://t.me/Zackrevoluzion77' target='_blank'>https://t.me/Zackrevoluzion77 </a>-<a href='https://www.revoluzion.io/audit-services' target='_blank'> https://www.revoluzion.io/audit-services </a> Exclusive</li>
                                <li><a href='https://t.me/AegisxSales' target='_blank'>https://t.me/AegisxSales </a>-<a href='https://aegisx.io/' target='_blank'> https://aegisx.io/</a></li>
                                <li><a href='https://t.me/Alissa_AuditAce' target='_blank'>https://t.me/Alissa_AuditAce </a>-<a href='https://auditace.tech/' target='_blank'> https://auditace.tech/</a></li>
                                <li><a href='https://t.me/Ritz_Expelee' target='_blank'>https://t.me/Ritz_Expelee</a>,<a href='https://t.me/Anan_Expelee_Audits' target='_blank'>https://t.me/Anan_Expelee_Audits </a>-<a href='https://expelee.com/' target='_blank'> https://expelee.com/</a></li>
                                <li><a href='https://t.me/Ashlee_Yen' target='_blank'>https://t.me/Ashlee_Yen </a>-<a href='https://bcaservice.io/en' target='_blank'> https://bcaservice.io/en</a></li>
                            </ul>
                            <ul>
                                <li><a href='https://t.co/x72dANYWBv' target='_blank'>https://t.co/x72dANYWBv </a>-<a href='https://peckshield.com/' target='_blank'> https://peckshield.com/</a></li>
                                <li><a href='https://t.me/ryan_lz' target='_blank'>https://t.me/ryan_lz </a>-<a href='https://beosin.com/' target='_blank'> https://beosin.com/</a></li>
                                <li><a href='https://www.certik.com/' target='_blank'>https://www.certik.com/</a></li>
                                <li><a href='https://t.me/solid_1' target='_blank'>https://t.me/solid_1 </a>-<a href='https://www.solidgrp.io/' target='_blank'> https://www.solidgrp.io/</a></li>
                                <li><a href='https://t.me/marco0x00' target='_blank'>https://t.me/marco0x00 </a>-<a href='https://hashex.org/' target='_blank'> https://hashex.org/</a></li>
                                <li><a href='https://t.me/chainsulting' target='_blank'>https://t.me/chainsulting </a>-<a href='https://chainsulting.de/' target='_blank'> https://chainsulting.de/</a></li>
                                <li><a href='https://t.me/preetam_quillhash' target='_blank'>https://t.me/preetam_quillhash </a>-<a href='https://www.quillaudits.com/smart-contract-audit' target='_blank'> https://www.quillaudits.com/smart-contract-audit</a></li>
                                <li><a href='https://t.me/TonyLi2021' target='_blank'>https://t.me/TonyLi2021 </a>-<a href='https://www.fairyproof.com/' target='_blank'> https://www.fairyproof.com/</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs16' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>KYC Partners</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs18' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>SAFU Contract</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc18 = () => {
    return(
     <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>SAFU Contract</h1>
                            <h4>What is SAFU Badge ?</h4>
                            <div>SAFU Badge means that the project cannot be manipulated by the developer to hurt investors and gain an unfair advantage over them. SAFU badge will be given to KYCed projects that meet below specifications and ownership held by SAFU Developer.</div>
                            <h4>Criteria of SAFU Project</h4>
                            <ul>
                                <li>Projects must do KYC with PinkSale</li>
                                <li>Owner Privileges 
                                    <li>SAFU developer must hold the contract ownership for 7 days minimum</li>
                                    <li>SAFU developer must pause trading until listing time</li>
                                    <li>SAFU developer must own the staking ownership. Staking dapp must be audited.</li>
                                    <li>Owner can not be able to mint new tokens</li>
                                    <li>Owner can not be able to pause trading</li>
                                    <li>Owner can not be able to set max transaction limit lower than 0.1% of circulating supply</li>
                                    <li>Only SAFU dev may blacklist snipers during the 7 days of holding ownership. After 7 days or when ownership is transferred, the blacklist must be non-functioning.</li>
                                    <li>Owner can not be able to claim the contract’s balance of its own token</li>
                                    <li>Owner can not be able to set max wallet limit lower than 1% of circulating supply</li>
                                    <li>Owner can not increase taxes in the first 7 days from listing</li>
                                    <li>Anything that can be changed by the owner can not limit or stop trading for the investors. (Anti-bot without time limit, Transaction time lock without limit, sell limit based on holder balance, etc.)</li>
                                </li>
                                <li> Tokenomics
                                    <li>Tax cannot be higher 10% buy or sell (max 10% each side)</li>
                                    <li>No unlock tokens in first 30 days from listing</li>
                                    <li>Liquidity lockup time shouldn’t be less than 365 days</li>
                                    <li>Liquidity percent 60% at least</li>
                                    <li>Private sale bonus shouldn't be greater than 10% from presale/fair launch rate</li>
                                    <li>Private sale can be sent at the start of launch. The first send cannot exceed 20% of the liquidity's value in BNB in tokens. The next two days 50% of the remainder of the private sale in tokens can be sent each day.</li>
                                    <li>Listing rate should be equal to presale/fair-launch/subscription rate</li>
                                    <li>SAFU developer must control unlock tokens (SAFU developer will help projects to distribute seed, private sale tokens)</li>
                                    <li>SAFU developer needs to confirm if the project had a private sale. If there was a real private sale, SAFU developer can distribute tokens for private sale investors.</li>
                                    <li>No airdrop tokens in first 30 days from listing (No giveaways, contest tokens)</li>
                                    <li>For migration from old contracts, new tokens may not be distributed to old holders until 30 days from listing</li>
                                </li>
                                <li> Contract
                                    <li>Contract must be audited by a trusted partner</li>
                                    <li>Buybacks should be automated</li>
                                    <li>Burns should be automated</li>
                                    <li>Auto liquidity should go to an unreachable address. (Dead address etc.)</li>
                                    <li>Contract should not malfunction in any circumstances</li>
                                    <li>No proxy contracts</li>
                                </li>
                                <li> Common Problems That Cause Contracts to Crash
                                    <li>Failed transactions that are caused by mathematical errors</li>
                                    <li>Swap settings and parameters should always be in a safe range</li>
                                    <li>BNB transfers from the contract should not revert in any circumstances</li>
                                </li>  
                            </ul>
                            <h4>SAFU Developers</h4>
                            <div>You will receive our SAFU badge if you work with one of developers below:</div>
                            <ul>
                                <li><a href='https://t.me/Trynos' target='_blank'>https://t.me/Trynos </a>-<a href='https://t.me/TrynosTokenTerminal' target='_blank'> https://t.me/TrynosTokenTerminal</a></li>
                                <li><a href='https://t.me/Bladepool' target='_blank'>https://t.me/Bladepool </a>-<a href='https://cfg.ninja/' target='_blank'> https://cfg.ninja/</a></li>
                                <li><a href='https://t.me/anoopsafudeveloper' target='_blank'>https://t.me/anoopsafudeveloper </a>-<a href='https://t.me/legitlaunchbsctokens' target='_blank'> https://t.me/legitlaunchbsctokens</a></li>
                                <li><a href='https://t.me/CryptoNikisha' target='_blank'>https://t.me/CryptoNikisha </a>-<a href='https://t.me/gemsbynikisha' target='_blank'> https://t.me/gemsbynikisha</a></li>
                                <li><a href='https://t.me/monkey_shanti' target='_blank'>https://t.me/monkey_shanti </a>-<a href='https://t.me/monkeybusinessannoucement' target='_blank'> https://t.me/monkeybusinessannoucement</a></li>
                                <li><a href='https://t.me/brickMatrix' target='_blank'>https://t.me/brickMatrix </a>-<a href='https://thematrixlabs.com/' target='_blank'> https://thematrixlabs.com/</a></li>
                                <li><a href='https://t.me/interfiaudits' target='_blank'>https://t.me/interfiaudits </a>-<a href='https://www.interfi.network/' target='_blank'> https://www.interfi.network/</a></li>
                                <li><a href='https://t.me/RomanCandles' target='_blank'>https://t.me/RomanCandles </a>-<a href='https://blackboxbsc.com/' target='_blank'> https://blackboxbsc.com/</a></li>
                                <li><a href='https://t.me/RugFreeCoinss' target='_blank'>https://t.me/RugFreeCoinss </a>-<a href='https://www.rugfreecoins.com/' target='_blank'> https://www.rugfreecoins.com/</a></li>
                                <li><a href='https://t.me/coinsult_tg' target='_blank'>https://t.me/coinsult_tg </a>-<a href='https://t.me/coinsult_tg' target='_blank'> https://t.me/coinsult_tg</a></li>
                                <li><a href='https://t.me/FreddyCryptos' target='_blank'>https://t.me/FreddyCryptos </a>-<a href='https://www.analytixaudit.com/' target='_blank'> https://www.analytixaudit.com/</a></li>
                                <li><a href='https://t.me/solid_1' target='_blank'>https://t.me/solid_1 </a>-<a href='https://www.solidgrp.io/' target='_blank'> https://www.solidgrp.io/</a></li>
                                <li><a href='https://t.me/Zackrevoluzion77' target='_blank'>https://t.me/Zackrevoluzion77 </a>-<a href='https://www.revoluzion.io/home' target='_blank'> https://www.revoluzion.io/home</a></li>
                                <li><a href='https://t.me/WhaleProfessor' target='_blank'>https://t.me/WhaleProfessor </a>-<a href='https://t.me/ProfessorsClass' target='_blank'> https://t.me/ProfessorsClass</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs17' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Audit Partners</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs19' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Based Badge</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 
export const Doc19 = () => {
    return(
     <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Based Badge</h1>
                            <h4>What is the Based Badge?</h4>
                            <div>The Based badge signifies an incubator or project team with successful prior raises and launches, enabling investors to make a more informed decision on their investments.</div>
                            <h4>Criteria of Based Badge:</h4>
                            <ul>
                                <li>Project owner had successful launches, price growth and strong volume post launch on previous projects.</li>
                                <li>Incubator can guarantee appropriate marketing and budget post launch.</li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs18' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>SAFU Contract</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs20' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>DEX Partners</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc20 = () => {
     return(
      <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>DEX Partners</h1>
                            <ul>
                                <li><a href='https://pancakeswap.finance/' target='_blank'>https://pancakeswap.finance/</a></li>
                                <li><a href='https://biswap.org/' target='_blank'>https://biswap.org/ </a>-<a href='https://biswap.zendesk.com/hc/en-us/articles/6935392461585-Launch-Tokens-Add-Liquidity-Join-the-10M-Incentive-Program-from-Biswap-via-PinkSale-' target='_blank'> https://biswap.zendesk.com/hc/en-us/articles/6935392461585-Launch-Tokens-Add-Liquidity-Join-the-10M-Incentive-Program-from-Biswap-via-PinkSale-</a></li>
                                <li><a href='https://apeswap.finance/' target='_blank'>https://apeswap.finance/</a></li>
                                <li><a href='https://mdex.com/' target='_blank'>https://mdex.com/</a></li>
                                <li><a href='https://www.knightswap.financial/' target='_blank'>https://www.knightswap.financial/</a></li>
                                <li><a href='https://shibaswap.com/#/' target='_blank'>https://shibaswap.com/#/</a></li>
                                <li><a href='https://uniswap.org/' target='_blank'>https://uniswap.org/</a></li>
                                <li><a href='https://traderjoexyz.com/avalanche' target='_blank'>https://traderjoexyz.com/avalanche</a></li>
                                <li><a href='https://quickswap.exchange/#/' target='_blank'>https://quickswap.exchange/#/</a></li>
                                <li><a href='https://spooky.fi/#/' target='_blank'>https://spooky.fi/#/</a></li>
                                <li><a href='https://www.spiritswap.finance/' target='_blank'>https://www.spiritswap.finance/</a></li>
                                <li><a href='https://mm.finance/' target='_blank'>https://mm.finance/</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs19' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Based Badge</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs21' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>CEX Listing</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc21 = () => {
     return(
      <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>CEX Listing</h1>
                            <div>PinkSale can connect you directly to top CEXs: Huobi, Okex, Bybit, Gate, Kucoin, MEXC, Bitmart, Lbank, Bkex, Bitrue... It means you can get cheapest price for CEX listing. PinkSale also offers market-making service. Contact <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a> for more information.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs20' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>DEX Partners</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs22' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Dapp + Web Developers </h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
 
  export const Doc22 = () => {
     return(
      <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Dapp + Web Developers</h1>
                            <ul>
                                <li><a href='https://t.me/SUBXSales' target='_blank'>https://t.me/SUBXSales </a> - Swap, Staking, Dapp Development - <a href='https://subx.io/' target='_blank'> https://subx.io/</a></li>
                                <li><a href='https://t.me/RugFreeCoinss' target='_blank'>https://t.me/RugFreeCoinss </a>  - Dapp Development -  <a href='https://www.rugfreecoins.com/' target='_blank'> https://www.rugfreecoins.com/</a></li>
                                <li><a href='https://t.me/JerrySeinfeId' target='_blank'>https://t.me/JerrySeinfeId </a>  - Dapp, Telegram Bot Development</li>
                                <li><a href='https://t.me/WebWizardz' target='_blank'>https://t.me/WebWizardz </a> - Website<a href='https://web3wizardz.com/' target='_blank'> https://web3wizardz.com/</a></li>
                                <li><a href='https://t.me/brickMatrix' target='_blank'>https://t.me/brickMatrix </a>  - Website, Dapp Development -  <a href='https://www.thematrixlabs.com/' target='_blank'> https://www.thematrixlabs.com/</a></li>
                                <li><a href='https://t.me/vietdn' target='_blank'>https://t.me/vietdn </a> - Website, Dapp Development -  <a href='https://kesaviwebsolutions.com/' target='_blank'> https://kesaviwebsolutions.com/</a></li>
                                <li><a href='https://t.me/vietdn' target='_blank'>https://t.me/vietdn </a>  - DApp, NFT, Website Development - <a href='https://decentralab.asia/' target='_blank'> https://decentralab.asia/</a></li>
                                <li><a href='https://t.me/MoonboyzCommander' target='_blank'>https://t.me/MoonboyzCommander </a>  - Web Design - <a href='https://www.moonboyzcrypto.com/' target='_blank'> https://www.moonboyzcrypto.com/</a></li>
                                <li><a href='https://t.me/TresFlames' target='_blank'>https://t.me/TresFlames </a> - Dapp, Web Development -  <a href='https://www.5thweb.io/' target='_blank'> https://www.5thweb.io/</a></li>
                                <li><a href='https://t.me/Zackrevoluzion77' target='_blank'>https://t.me/Zackrevoluzion77 </a> - Dapp Development -  <a href='https://www.revoluzion.io/audit-services' target='_blank'> https://www.revoluzion.io/audit-services</a></li>
                                <li><a href='https://t.me/BLockSAFU' target='_blank'>https://t.me/BLockSAFU </a> - Dapp Development -  <a href='https://blocksafu.com/' target='_blank'> https://blocksafu.com/</a></li>
                                <li><a href='https://t.me/ZenSolidityDev' target='_blank'>https://t.me/ZenSolidityDev </a> - Dapp Development -  <a href='https://www.zencryptolabs.com/' target='_blank'> https://www.zencryptolabs.com/</a></li>
                                <li><a href='https://t.me/Alexcrypto32' target='_blank'>https://t.me/Alexcrypto32 </a> - Dapp Development -  <a href='https://www.dutchdapps.com/' target='_blank'> https://www.dutchdapps.com/</a></li>
                                <li><a href='https://t.me/warlasdev' target='_blank'>https://t.me/warlasdev </a> - Dapp Development, Metaverse - <a href='https://t.me/protocolbuilders' target='_blank'> https://t.me/protocolbuilders</a></li>
                                <li><a href='https://t.me/Rogerz10x' target='_blank'>https://t.me/Rogerz10x </a> - Dapp, Game, Web Development - <a href='https://kickstartlabs.io/' target='_blank'> https://kickstartlabs.io/</a></li>
                                <li><a href='https://t.me/JerrySeinfeId' target='_blank'>https://t.me/JerrySeinfeId </a>  - Dapp, Web Development - <a href='https://www.proficy.io/' target='_blank'> https://www.proficy.io/</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs21' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>CEX Listing</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs23' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Design Partners</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
 
  export const Doc23 = () => {
     return(
      <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Design Partners</h1>
                            <ul>
                                <li><a href='https://t.me/CryptoKingDesigns' target='_blank'>https://t.me/CryptoKingDesigns </a>  - Graphics, NFT, Stickers -<a href='https://cryptokingdesigns.com/' target='_blank'> https://cryptokingdesigns.com/</a></li>
                                <li><a href='https://t.me/KevinNFTS' target='_blank'>https://t.me/KevinNFTS </a> - Graphics, NFT - <a href='https://www.kevgraphics.com/' target='_blank'> https://www.kevgraphics.com/</a></li>
                                <li><a href='https://t.me/stylxx' target='_blank'>https://t.me/stylxx </a>  - Graphics -<a href='https://t.me/artbypanda' target='_blank'> https://t.me/artbypanda</a></li>
                                <li><a href='https://t.me/ElementSoFlo' target='_blank'>https://t.me/ElementSoFlo </a>  - Website, Graphics - <a href='https://www.elementstudios.miami/' target='_blank'> https://www.elementstudios.miami/</a></li>
                                <li><a href='https://t.me/davispixelweb3' target='_blank'>https://t.me/davispixelweb3 </a>  - Website, Graphics - <a href='https://pixelweb3.com/' target='_blank'> https://pixelweb3.com/</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs22' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Dapp + Web Developers</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs24' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Presale Support</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc24 = () => {
     return(
      <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Presale Support</h1>
                            <div>If you need support for creating a presale on PinkSale, please contact our support team on Telegram:</div>
                            <ul>
                                <li><a href='https://t.me/babypinkpink' target='_blank'>https://t.me/babypinkpink</a> - KYC, Audit</li>
                                <li><a href='https://t.me/Seano180' target='_blank'>https://t.me/Seano180</a></li>
                                <li><a href='https://t.me/macbeth_1987' target='_blank'>https://t.me/macbeth_1987</a></li>
                                <li><a href='https://t.me/EmkoLomsky' target='_blank'>https://t.me/EmkoLomsky</a></li>
                                <li><a href='https://t.me/yannpink' target='_blank'>https://t.me/yannpink</a></li>
                                <li><a href='https://t.me/chadmaximus' target='_blank'>https://t.me/chadmaximus</a></li>
                                <li><a href='https://t.me/Paul212121' target='_blank'>https://t.me/Paul212121</a></li>
                                <li><a href='https://t.me/cga08800' target='_blank'>https://t.me/cga08800</a></li>
                                <li><a href='https://t.me/Vergepinkeco' target='_blank'>https://t.me/Vergepinkeco</a></li>
                                <li><a href='https://t.me/Michold' target='_blank'>https://t.me/Michold</a></li>
                                <li><a href='https://t.me/ibudax' target='_blank'>https://t.me/ibudax</a></li>
                                <li><a href='https://t.me/black_und_yellow' target='_blank'>https://t.me/black_und_yellow</a></li>
                            </ul>
                            <div className='doc23-flex'>
                                <NavLink to='/docs' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Design Partners</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs25' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Brand Assets</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc25 = () => {
     return(
      <>
          <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Brand Assets</h1>
                            <div>If you have any questions please don't hesitate to contact us at <a href='https://t.me/pinkecosystem' target='_blank'>https://t.me/pinkecosystem</a></div>
                            <div style={{margin: '.2rem auto', width: '90%'}}>
                                <img src={brand1} style={{width: '99%', cursor: 'pointer'}}/>
                                <img src={brand2} style={{width: '99%', marginTop: '-4.5rem', marginBottom: '3.5rem'}}/>
                                <img src={brand3} style={{width: '99%'}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs24' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Presale Support</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs26' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Team Verification</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc26 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Team Verification</h1>
                            <div className='doc22-flex'>
                                <NavLink to='/docs25' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Brand Assets</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs27' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>PinkSale Elite Club</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc27 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>PinkSale Elite Club</h1>
                            <div>PinkSale Elite Club is an exclusive members only group created to deliver maximum value to clients and members of PinkSale.</div>
                            <h4>Key benefits include:</h4>
                            <ul>
                                <li>Whitelists in hyped private sales and presales offered by incubator partners (we have many private sales and presales monthly)</li>
                                <li>Cash back incentives for Elite members in hyped presales (0.5% of hard cap)</li>
                            </ul>
                            <h4>Requirements of entry:</h4>
                            <ul>
                                <li>Must hold a minimum of 25 PinkSale tokens. Wallets will be verified</li>
                                <li>Must buy at least 1 presale per month</li>
                                <li>(Alternative) - own a successful local group that creates buy pressure (No need to hold PinkSale tokens)</li>
                            </ul>
                            <h4>Where to Buy PinkSale</h4>
                            <ul>
                                <li><a href='https://www.coingecko.com/en/coins/pinksale' target='_blank'>https://www.coingecko.com/en/coins/pinksale</a></li>
                                <li><a href=' https://pancakeswap.finance/swap?inputCurrency=0x602ba546a7b06e0fc7f58fd27eb6996ecc824689&outputCurrency=wbnb' target='_blank'>https://pancakeswap.finance/swap?inputCurrency=0x602ba546a7b06e0fc7f58fd27eb6996ecc824689&outputCurrency=wbnb</a></li>
                            </ul>
                            <div>To join the group, please DM <a href='https://t.me/saulpink' target='_blank'>https://t.me/saulpink</a></div>
                            <div className='doc26-flex'>
                                <NavLink to='/docs' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Team Verification</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs28' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Standard Token</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc28 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Standard Token</h1>
                            <div>How to Mint a Standard Token with PinkSale: <a href='https://www.youtube.com/watch?v=SFp1xVpCAm0' target='_blank'>https://www.youtube.com/watch?v=SFp1xVpCAm0</a></div>
                            <div>Check out the steps below for how to create a standard token with PinkSale using your MetaMask wallet on your desktop.</div>
                            <div>1. From the homepage: https://www.pinksale.finance/#/, click on “Create” – “Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. You will be redirected to this link: <a href='https://www.pinksale.finance/#/launchpad/token/create' target='_blank'>https://www.pinksale.finance/#/launchpad/token/create</a></div>
                            <div>3. To create a standard type token, in the [Token Type] section, choose “Standard Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Click on “Create token” after done inputting all required fields. </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Notes: </div>
                            <ul>
                                <li>Decimals must be greater than or equal to 2. </li>
                                <li>All fields are required, they cannot be blank. </li>
                                <li>Decimals and the total supply must be a positive number. </li>
                            </ul>
                            <div>5. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs27' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>PinkSale Elite Club</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs29' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Liquidity Geneartor Token</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc29 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Liquidity Generator Token</h1>
                            <div>How to Mint a Liquidity Generator Token (SafeMoon Fork) with PinkSale: <a href=' https://www.youtube.com/watch?v=3T2RJkvqY1A' target='_blank'> https://www.youtube.com/watch?v=3T2RJkvqY1A</a></div>
                            <div>Check out the steps below on how to create a standard token with PinkSale using the desktop version of the Metamask Wallet.</div>
                            <div>1. From the homepage: https://www.pinksale.finance/#/, click on “Create” – “Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. You will be redirected to this link: <a href='https://www.pinksale.finance/#/launchpad/token/create' target='_blank'>https://www.pinksale.finance/#/launchpad/token/create</a></div>
                            <div>3. To create a standard type token, in the [Token Type] section, choose “Liquidity Generator Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Input all necessary information. Before doing so, let's go over all the important fields that need to be filled:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Transaction fee to generate yield (%): The % amount of tokens from every transaction that are distributed to all token holders.</div>
                            <div>Transaction fee to generate liquidity (%): The % amount of tokens from every transaction that are distributed to the liquidity pool.</div>
                            <div>Max transaction percent (%): Any transactions that trades more than this percentage of the total supply will be rejected.</div>
                            <div>Charity percent (%):  The % amount of tokens from every transaction are distributed to a charity address.</div>
                            <div>Charity address: All charity tokens from “Charity percent (%)” will be distributed to this address.</div>
                            <div>For example, you create a PinkLambo token with these parameters:</div>
                            <div>Token name: PinkLambo. Symbol: PILB. Total supply: 100000 PILB. Every transaction incurs a fee of 10% to the benefit of all holders, of which: 5% are distributed among all diamond hands holders. 4% are locked away in the liquidity pool, to create a steadily rising price floor. 1% is distributed to the charity address 0xJustAnExampleAddress00000000000000000000. Anti-whale trade feature: transactions (sell/buy) that trade more than 0.05% of the total supply will be rejected.</div>
                            <div>Check the image below to know what you need to input in the fields in this case:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Click on “Create Token” after you have finished inputting all the necessary information. </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs28' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Standard Token</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs30' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Baby Token</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc30 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Baby Token</h1>
                            <div>How to Mint a Baby Token with PinkSale: <a href='https://www.youtube.com/watch?v=yMBa2lYnX54' target='_blank'>https://www.youtube.com/watch?v=yMBa2lYnX54</a></div>
                            <div>Check out the steps below on how to create a baby token with PinkSale using the desktop version of the Metamask Wallet.</div>
                            <div>1. From the homepage: <a href='https://www.pinksale.finance/#/' target='_blank'>https://www.pinksale.finance/#/</a>, click on “Create” – “Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. You will be redirected to this link: <a href='https://www.pinksale.finance/#/launchpad/token/create' target='_blank'>https://www.pinksale.finance/#/launchpad/token/create</a></div>
                            <div>3. To create a standard type token, in the [Token Type] section, choose “Liquidity Generator Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Input all necessary information. Before doing so, let's go over all the important fields that need to be filled:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Reward token: The contract address of the token that you want to use to reward your users. For example, you are creating a BabyDogeXXX token on the Binance Smart Chain and you want to reward your users with DOGE, enter 0xba2ae424d960c26247dd6c32edc70b295c744c43 (Binance-Peg Dogecoin contract address).</div>
                            <div>Minimum token balance for dividends: In order to receive rewards, each wallet must hold at least this amount of tokens. Its value must be of more than $50.</div>
                            <div>Token reward fee (%): The % amount of tokens from every transaction that is distributed to all token holders. If you choose DOGE as reward token, your users will be rewarded in DOGE instead of the base token. When the amount of tokens is greater than 0.002% of the total supply, reward fee will be automatically swapped to the reward token. </div>
                            <div>Router: Select PancakeSwap for the Binance Smart Chain; select UniSwap, SushiSwap or ShibaSwap for the Etherum Network; select QuickSwap for the Matic Chain; select KuSwap for the Kucoin Chain.</div>
                            <div>Auto add liquidity (%): The % amount of tokens from every transaction that is automatically sent to the liquidity pool.</div>
                            <div>Marketing fee (%): The % amount of tokens from every transaction that is sent to the marketing address. If you choose DOGE as the reward token, the marketing wallet will receive DOGE instead of the base token.</div>
                            <div>Marketing wallet: Tokens from the “Marketing fee (%)” section will be sent to this address.</div>
                            <div>For example, you create a BabyDoge1000x token with these parameters:</div>
                            <div>Token name: BabyDoge1000x Symbol: BABYD Total supply: 100000 BABYD Every transaction incurs a fee of 6%, of which: 2% is distributed among all holders in DOGE 2% is locked away in the liquidity pool, to create a steadily rising price floor 2% is distributed to the marketing address: 0xJustAnExampleAddress00000000000000000000.</div>
                            <div>In the picture below you can see the information you would to enter in the various fields.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Click on “Create Token” after you have finished inputting all the necessary information. </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs29' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Liquidity Geneartor Token</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs31' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Buyback Baby Token</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc31 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Buyback Baby Token</h1>
                            <div>Check out the steps below on how to create a buyback baby token with PinkSale using MetaMask.</div>
                            <div>1. From the homepage: <a href='https://www.pinksale.finance/#/' target='_blank'>https://www.pinksale.finance/#/</a>, click on “Create” – “Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. You will be redirected to this link: <a href='https://www.pinksale.finance/#/launchpad/token/create' target='_blank'>https://www.pinksale.finance/#/launchpad/token/create</a></div>
                            <div>3. To create a standard type token, in the [Token Type] section, choose “Liquidity Generator Token”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Input all necessary information. Before doing so, let's go over all the important fields that need to be filled:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={token3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Router: Select PancakeSwap for the Binance Smart Chain; select UniSwap, SushiSwap or ShibaSwap for the Etherum Network; select QuickSwap for the Matic Chain; select KuSwap for the Kucoin Chain; select TradeJoe or Pangolin for AVAX.</div>
                            <div>Reward token: The contract address of the token that you want to use to reward your users. For example, you are creating a BuybackBabyDogeXXX token on the Binance Smart Chain and you want to reward your users with DOGE, enter DOGE token address in this field (Binance-Peg Dogecoin contract address).</div>
                            <div>Liquidity Fee(%): The % amount of tokens from every transaction that is automatically sent to the liquidity pool.</div>
                            <div>Buyback Fee (%): The % amount of BNB from every transaction that is used to buy back tokens. It will generate a contract address to store BNB. You need to call buy back function to start buying back tokens. </div>
                            <div>Reflection Fee (%): The % amount of tokens from every transaction that is distributed to all token holders. If you choose DOGE as a reward token, your users will be rewarded in DOGE instead of the base token.</div>
                            <div>Marketing Fee (%): The % amount of BNB from every transaction that is sent to the owner wallet.</div>
                            <h4>How to Call Buy Back Manually?</h4>
                            <div>triggerZeusBuyback(uint256 amount, bool triggerBuybackMultiplier) </div>
                            <div>This function is used to buy back manually with the BNB that has accumulated in the buyback wallet.</div>
                            <div>triggerBuybackMultiplier if “= true”, that means that after the buyback has taken place, and for a certain amount of time from that moment (default 30 minutes), when traders sell their tokens they will be charged double the normal tax rate. The tax rate for selling will go back to normal after 30 minutes.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs30' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Baby Token</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs32' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Launchpad</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc32 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Launchpad</h1>
                            <div>How to Launch a Presale on PinkSale: <a href=' https://www.youtube.com/watch?v=MZ3fUxb6u2I' target='_blank'> https://www.youtube.com/watch?v=MZ3fUxb6u2I</a></div>
                            <h4>Step 1: Verify Token</h4>
                            <ul>
                                <li>Connect your wallet.</li>
                                <li>Go to <a href='https.//www.pinksale.finance/#/launchpad/create' target='_blank'>https.//www.pinksale.finance/#/launchpad/create</a></li>
                                <li> Input your token address, if you already have one, or create a new token for the Launchpad.</li>
                                <li> Select BNB (if you want to raise funds using stable coin for your presale, refer to this post)</li>
                                <li>Select a fee choice.</li>
                                <li>After selecting, the token address will be shown and you can click on “Approve”.</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>7. MetaMask will now ask you to confirm the transaction and show you the fee that you are required to pay. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <h4>Step 2: DeFi Launchpad Info</h4>
                            <div>After verifying your token, you need to input the Launchpad information that you want to raise. Here are some following important parameters:</div>
                            <ul>
                                <li>You must use positive numbers.</li>
                                <li>Presale rate means shows how many tokens they will receive during the presale stage. </li>
                                <li>Whitelist: Choose "Enable" if you have a whitelist of presale contributors. You can enable/disable the whitelist anytime.</li>
                                <li> Soft cap must be greater than or equal to 50% of the hard cap.</li>
                                <li>For refund types you can choose refund or burn from the dropdown list.</li>
                                <li>PancakeSwap liquidity (%): Enter the percentage of raised funds that should be allocated to liquidity on PancakeSwap. Minimum value is 51%, maximum value is 100%.</li>
                                <li>PancakeSwap listing rate is the initial rate of the liquidity pool (1 BNB = x tokens). This rate is usually lower than the presale rate to allow a higher listing price on PancakeSwap.</li>
                                <li>Start time must be before the end time.</li>
                                <li>Liquidity lockup (days): Lock-up time for liquidity pool, for example 30 days.</li>
                                <li>You can choose Vesting Contributor feature.</li>
                            </ul>                            
                            <div>You can check the total tokens needed to create the presale pool (shown above the Back/Next buttons).
                             </div>
                             <div>This is an example:</div> 
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 3: Add Additional Info</h4>
                            <div>There are some notes for this step:</div>
                            <ul>
                                <li> Logo URL and website are required fields, cannot be blank. You can’t complete this step without those.</li>
                                <li>Logo URL must end with a supported image extension: png, jpg, jpeg or gif.</li>
                                <li> Click Next after done inputting.</li>
                            </ul>
                            <div>An Example: </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 4: Finish</h4>
                            <div>This is the final step. You can review all the information one last time before submitting. Click “Submit” after you have made sure that everything is perfect, or you can go back to previous step to make any changes.</div>
                            <div>This is an example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs31' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Buyback Token</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs33' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Update a Launchpad</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc33 = () => {
     return(
      <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Update a Launchpad</h1>
                            <div>You can view and change some basic information about your Launchpad through these steps:</div>
                            <ul>
                                <li>Go to <a href='https://www.pinksale.finance/#/launchpads/my' target='_blank'>https://www.pinksale.finance/#/launchpads/my</a></li>
                                <li>Click on “My Contributions”, and you'll be able to see your pool here.</li>
                                <li>Click on "View Pool".</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Click on the button in the red square shown in the image below.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. You can edit the following fields: Logo URL, Website, Facebook, Twitter, Github, Telegram, Reddit and Launchpad description. Some important notes concerning these sections:</div>
                            <ul>
                                <li>Logo URL must end with a supported image extension: png, jpg, jpeg or gif. For example: <a href=' https://www.pinkswap.finance/pinkswap.png' target='_blank'> https://www.pinkswap.finance/pinkswap.png</a></li>
                                <li>Logo URL and website are required fields, these cannot be blank.</li>
                            </ul>
                            <div>An Example: </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. Click on “Update” after you are done editing. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs32' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Launchpad</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs34' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Finalize a Launchpad</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc34 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Finalize a Launchpad</h1>
                            <div>If you still can't finalize the pool after following steps in the above video, please hire a trusted developer at <a href='https://docs.pinksale.finance/important/contract-developers' target='_blank'>https://docs.pinksale.finance/important/contract-developers</a> to help you check your smart contract. There must be a problem with your contract.</div>
                            <div>If your token has fees, rewards, and max tx in the contract, you have to exclude those functions for the presale address in order to finalize the presale pool.</div>
                            <div>1. Before you finalize your presale, you need to access your contract address from BSCScan or you can click on the token address on your launchpad page.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. Go to Contract - Write contract - Connect to Web3 to connect your wallet, you need to use owner address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad10} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Ctrl + F, Search “exclude”, then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad11} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad12} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. After click on the “Write” button, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>If you see exclude (bool), please input “True”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad13} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div><i>Note: Sometimes the contract doesn’t have “exclude” but "exempt" instead, search “exempt”, then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address.</i></div>
                            <div>5. In the “Pool Actions” section, you can choose to click on “Finalize” to complete the Launchpad and list your token, or you can choose to cancel it.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad14} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>                            
                            <div className='doc22-flex'>
                                <NavLink to='/docs33' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Update a  Launchpad</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs35' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Cancel a Launchpad</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  export const Doc35 = () => {
     return(
      <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Cancel a Launchpad</h1>
                            <h4>Step 1: Cancel Presale</h4>
                            <ul>
                                <li>Connect your wallet</li>
                                <li>Visit your own presale pool</li>
                                <li>Click "Cancel Pool" button in the Owner Zone, then Confirm transaction on MetaMask</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad15} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 2: Withdraw Tokens from Canceled Pool</h4>
                            <div>If your token has fees, rewards, and max tx in the contract, you have to exclude those functions for the presale address in order to finalize the presale pool.</div>
                            <div>1. Before you finalize your presale, you need to access your contract address from BSCScan or you can click on the token address on your launchpad page.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad16} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. Go to Contract - Write contract - Connect to Web3 to connect your wallet, you need to use owner address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad17} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Ctrl + F, Search “exclude”, then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad18} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad19} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. After click on the “Write” button, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>If you see exclude (bool), please input “True”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad20} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div><i>Note: Sometimes the contract doesn’t have “exclude” but "exempt" instead, search “exempt”, then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address.</i></div>
                            <div>5. After all, click "Withdraw canceled tokens" button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pad21} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs34' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Finalize a Launchpad</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs36' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Add/Remove WhiteLists</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </>
     )
  }
  
export const Doc36 = () => {
   return(
    <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Add/Remove Whitelists</h1>
                            <div>Whitelist on PinkSale is list of administrator-approved addresses whereby, only these addresses can participate in the presale. The whitelist function can be both enabled/disabled during the creation of a presale, prior to the beginning of the presale and during an ongoing presale.</div>
                            <h4>Enable Whitelist</h4>
                            <div>When creating the launchpad, at step 2 - DeFi Launchpad Info, you can choose to enable/disable whitelist here by clicking on “Disable” or “Enable” in “Whitelist” section:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>When submitting your launchpad, you can see “Sale method: Whitelist Only”.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>In case you forgot to enable whitelist when creating your launchpad, you can also enable it when you update your launchpad by clicking on “Whitelist” button in the Owner Zone.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <h4>Disable Whitelist</h4>
                            <div>If you wish to disable the whitelist, you can do so by clicking on “Disable whitelist” in the Owner Zone of your launchpad</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>Note: You can “Disable whitelist” during the presale for the sale become a public sale instead of a whitelisted presale.</div>
                            <h4>How to Add Whitelists</h4>
                            <div>You can add wallet addresses of presale participants anytime, before or even during the presale. You can do it by clicking on “Add users to whitelist” in the Owner Zone of your launchpad.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Add users to whitelist”, you will see a pop-up box. Here, you can add addresses to your whitelist. Addresses are separated by a new line and no comma, the below list can be used as an example:</div>
                            <div>0x34E7f6A4d0BB1fa7aFe548582c47Df337FC337E6</div>
                            <div>0xd8Ebc66f0E3D638156D6F5eFAe9f43B1eBc113B1</div>
                            <div>0x968136BB860D9534aF1563a7c7BdDa02B1A979C2</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Click on “Add users” when you are done inputting the addresses, then, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>Note: You can add up to 800 addresses to your whitelist each time.</div>
                            <h4>How to Remove Whitelists</h4>
                            <div>You can remove wallet addresses of presale participants by clicking on “Add users to whitelist” in the Owner Zone of your launchpad.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Add users to whitelist”, you will see a pop-up box. Here, you can remove any unwanted addresses but remember, addresses are separated by a new line and no comma. For example:</div>
                            <div>0x34E7f6A4d0BB1fa7aFe548582c47Df337FC337E6</div>
                            <div>0xd8Ebc66f0E3D638156D6F5eFAe9f43B1eBc113B1</div>
                            <div>0x968136BB860D9534aF1563a7c7BdDa02B1A979C2</div>
                            <div>Paste the above addresses into the pop-up box and click on “Remove users”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs35' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Cancel a Launchpad</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs37' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Presale using Stablecoin</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
   )
}
export const Doc37 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Presale Using Stablecoin</h1>
                            <div>You can launch a presale or fairlaunch using stablecoins BUSD, USDT, USDC on all supported blockchains on PinkSale: BSC, ETH, matic, avax, cronos chain, fantom, kucoin. In this post we will use BUSD on BSC as an example.</div>
                            <h4>Step 1: Verify Token</h4>
                            <ul>
                                <li>Connect your wallet.</li>
                                <li>Go to <a href='https://www.pinksale.finance/#/launchpad/create' target='_blank'>https://www.pinksale.finance/#/launchpad/create</a></li>
                                <li> Input your token address, if you already have one, or create a new token for the Launchpad.</li>
                                <li> Select a stable coin, for example, “BUSD”</li>
                                <li> Select a fee choice</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. After inputting it will show the token name, symbol and decimals and you can click on "Approve"</div>
                            <div>Note: Stablecoin pair can work with standard tokens only. It doesn't support taxed tokens (Liquidity Generator Token, BabyToken, Buyback Baby Token for example). Contact Pinksale for more information.</div>
                            <div>7. MetaMask will now ask you to confirm the transaction and show you the fee that you are required to pay. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <h4>Step 2: DeFi Launchpad Info</h4>
                            <div>After verifying your token, you need to input the numbers that you want to raise. Here are some following important parameters: </div>
                            <ul>
                                <li> You must use positive numbers.</li>
                                <li>Presale rate shows how many tokens presale participants will receive during the presale stage.</li>
                                <li> Whitelist: Choose "Enable" if you have a whitelist of presale contributors. You can enable/disable the whitelist anytime.</li>
                                <li>Soft cap must be greater than or equal to 50% of the hard cap.</li>
                                <li>For “Unsold tokens” you can choose refund or burn from the dropdown list.</li>
                                <li>PancakeSwap liquidity (%): Enter the percentage of raised funds that should be allocated to liquidity on PancakeSwap. Minimum value is 51%, maximum value is 100%.</li>
                                <li>PancakeSwap listing rate is the initial rate of the liquidity pool (1 BUSD = x tokens). This rate is usually lower than the presale rate to allow a higher listing price on PancakeSwap.</li>
                                <li>Start time must be before the end time.</li>
                                <li>Liquidity lockup (days): Lock-up time for liquidity pool, for example 365 days.</li>
                                <li>You can choose Vesting Contributor feature.</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list10} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 3: Add Additional Info</h4>
                            <div>There are some notes for this step:</div>
                            <ul>
                                <li>Logo URL and website are required fields, cannot be blank. You can’t complete this step without those.</li>
                                <li>Logo URL must end with a supported image extension: png, jpg, jpeg or gif.</li>
                                <li>Click Next once you have finished adding this information.</li>
                            </ul>
                            <div>An Example: </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list11} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 4: Finish</h4>
                            <div>This is the final step. You can review all the information one last time before submitting. Click “Submit” after you have made sure that everything is perfect, or you can go back to previous step to make any changes.</div>
                            <div>Note: For tokens with burns, rebase or other special transfers please ensure that you have a way to whitelist multiple addresses or turn off the special transfer events (By setting fees to 0 for example for the duration of the presale)</div>
                            <div>This is an example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list12} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list13} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs36' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Add/Remove WhiteLists</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs38' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Presale (Manual Listing)</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc38 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Presale (Manual Listing)</h1>
                            <h4>Step 1: Verify Token</h4>
                            <ul>
                                <li>Connect your wallet.</li>
                                <li>Go to https://www.pinksale.finance/launchpad/create?chain=BSC</li>
                                <li>Input your token address, if you already have one, or create a new token for the Manual Listing Launchpad.</li>
                                <li>Select BNB/USDT/USDC/USDB</li>
                                <li>Select a fee choice.</li>
                                <li>Select Manual listing in Listing Options</li>
                                <li>After selecting, the token address will be shown and you can click on “Approve”.</li>
                                <li>MetaMask will now ask you to confirm the transaction and show you the fee that you are required to pay. If you agree, then click on the “Confirm” button to finish the process.</li>
                            </ul>
                            <h4>Step 2: Presale Info</h4>
                            <div>After verifying your token, you need to input the Launchpad information that you want to raise. Here are some following important parameters:</div>
                            <ul>
                                <li>You must use positive numbers.</li>
                                <li>Presale Rate means shows how many tokens they will receive during the presale stage.</li>
                                <li>Whitelist: Choose "Enable" if you have a whitelist of presale contributors. You can enable/disable the whitelist anytime.</li>
                                <li>Soft Cap must be greater than or equal to 50% of the Hard Cap</li>
                                <li>Refund types means what you want to do with unsold tokens "Burn/Refund" </li>
                                <li>Start Time must be before the End Time.</li>
                                <li>You can choose Vesting Contributor feature if you want. You should check the total tokens needed to create the presale pool (shown above the Back/Next buttons). This is an example:</li>
                            </ul>
                            <h4>Step 3: Add Additional Info</h4>
                            <div>There are some notes for this step:</div>
                            <ul>
                                <li>Logo URL and website are required fields, cannot be blank. You can’t complete this step without those.</li>
                                <li>Logo URL must end with a supported image extension: png, jpg, jpeg or gif. For example: https://www.pinksale.finance/pinksale.png</li>
                                <li>Click Next after done inputting. An example:</li>
                            </ul>
                            <h4>Step 4: Finish</h4>
                            <div>This is the final step. You can review all the information one last time before submitting. Click “Submit” after you have made sure that everything is perfect, or you can go back to previous step to make any changes.</div>
                            <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs37' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Presale using Stablecoin</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs39' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Finalize a Presale (Manual Listing)</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }

 export const Doc39 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Finalize a Presale (Manual Listing)</h1>
                            <div>If you still can't finalize the pool after following steps in the above video, please hire a trusted developer at <a href=' https://docs.pinksale.finance/important/contract-developers' target='_blank'> https://docs.pinksale.finance/important/contract-developers</a> to help you check your smart contract. There must be a problem with your contract.</div>
                            <div>If your token has fees, rewards, and max tx in the contract, you have to exclude those functions for the presale address in order to finalize the presale pool.</div>
                            <div>1. Before you finalize your presale, you need to access your contract address from BSCScan or you can click on the token address on your launchpad page.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list14} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. Go to Contract - Write contract - Connect to Web3 to connect your wallet, you need to use owner address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list15} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Ctrl + F, Search “exclude”, then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list16} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list17} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. After click on the “Write” button, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>If you see exclude (bool), please input “True”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list18} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div><i>Note: Sometimes the contract doesn’t have “exclude” but "exempt" instead, search “exempt”, then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address.</i></div>
                            <div>5. In the “Pool Actions” section, you can choose to click on “Finalize” to complete the presale pool and list your token. </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>7. To allow contributors claim their tokens, click on Set Claim Time. You can choose “Claim Right Now” to investors start claiming tokens now OR choose “Set Claim Time” so investors can claim tokens later.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs38' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Presale (Manual Listing)</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs40' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Manual Listing</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }

 export const Doc40 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Manual Listing</h1>
                            <h4>For Project Owners</h4>
                            <div>Manual listing means project owners will have to list their token on DEX themself after the pool ends. Token won't be automatically listed on DEX by PinkSale after the project owner finalizes the pool.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list19} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>For Investors</h4>
                            <div>Manual listing means investors will receive tokens after the project owner finalizes the pool but they will have to wait until the project owner adds liquidity for the project on DEX to buy/sell those tokens.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={list20} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs39' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Finalize a Presale (Manual Listing)</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs41' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Team Vesting Guide</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc41 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Team Vesting Guide</h1>
                            <div>The Team Vesting System is a vesting protocol that asks project owners to lock their team tokens for a period of time. This in turn means there is no unlocked team tokens which could make a rug pull possible.</div>
                            <div>This feature helps projects establish an increased level of trust with their investors, thereby potentially resulting in growth and long-term price appreciation. It also prevents scam projects from trying to withdraw and sell unlocked tokens at or soon after listing time (the so called rug pull).</div>
                            <div>Follow the steps below to use the Team Vesting feature using PinkLock. Please note that PinkLock was audited by CerTik: <a href='https://leaderboard.certik.io/projects/pinksale' target='_blank'>https://leaderboard.certik.io/projects/pinksale</a></div>
                            <ul>
                                <li>Connect your wallet.</li>
                                <li>Go to <a target='_blank' href='https://pinksale.finance/pinklock/create'>https://pinksale.finance/pinklock/create</a></li>
                                <li>Input your token or LP token address.</li>
                                <li> Input token owner address. The unlocked tokens will be sent to this address.</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Input the title of this lock, "MoonLambo777 Team Vesting" for example.</div>
                            <div>6. Input the amount for vesting. This is the total amount of team vesting tokens: The total amount of tokens you will allocate to your team through time. Please note, you can only input numbers here, not percentages.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>7. Place a check in the check box "use vesting"</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>8. Below are some important parameters:</div>
                            <ol>
                                <li>TGE Date: Should be the listing time.</li>
                                <li>TGE (percent): The percentage of the first batch of team tokens to be released. Please note that this is expressed in percentage, not number of tokens.</li>
                                <li>Cycle (days): How long, in days, between each batch of vested tokens is released.</li>
                                <li>Cycle Release (percent): How many tokens will be released each cycle following the First Token Release batch. Please note this is expressed in percentage, not in number of tokens.</li>
                            </ol>
                            <div>Example: Your project has a vesting schedule for your team as below:</div>
                            <div>Your team has 100000 tokens to be vested in total, 20% will be vested at TGE and 80% unlocks every month afterwards for a total of 2 cycles (equal to 60 days).</div>
                            <div>Let’s imagine that your presale on Pinksale ended on the 22th of May. At TGE (2022-05-22 18:39 for example), your team can claim 100000 x 20% = 20000 tokens for the first token release batch. Then every month afterwards, on the 22th of June and July, your team can claim the next 2 batches, 100000 x 40% = 40000 tokens each batch.</div>
                            <div>In this case you would enter the following information:
                            </div>
                            <ol>
                                <li>Amount: 100000</li>
                                <li>TGE Date (UTC time): 2022-05-22T18:39</li>
                                <li>TGE Percent: 20</li>
                                <li>Cycle (days): 30</li>
                                <li>Cycle Release Percent (percent): 40</li>
                            </ol>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>9. Click on Approve</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>10. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Approve" process.</div>
                            <div>11. Click on "Lock"</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>12. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Lock" process.</div>
                            <div>Note:</div>
                            <ol>
                                <li>Team Vesting doesn't support rebase tokens.</li>
                                <li>Please exclude PinkLock's lockup address 0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max tx amount to start locking tokens. </li>
                            </ol>
                            <h4>How to Claim</h4>
                            <div>When each vesting cycle ends, project owners can go to PinkLock page and unlock the vested tokens by clicking on the “Unlock” button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>To renounce ownership click on "Renounce Lock Ownership". Renouncing ownership will transfer ownership to a dead wallet preventing you from interacting, unlocking or removing the liquidity/tokens at the end of the lock. Only do this if you fully understand how renouncing works and the outcome. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of this action.</div>
                            <div>If, for any reason, project owners are not able to withdraw their vested tokens when a cycle expires, they can do this at any given time afterwards. If they were to wait till the next cycle expires, the total amount that can be withdrawn at that time would be the balance of the previous cycle amount plus the amount of tokens of the recently expired cycle.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs40' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Manual Listing</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs42' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Presale Vesting Guide</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }

 export const Doc42 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Presale Vesting Guide</h1>
                            <div>Vesting For Contributors is a feature on PinkSale that helps projects to ensure long term price stability by locking away the tokens of presale investors for a period of time. It prevents presale investors from selling all their tokens at once at listing time, which causes too much sell pressure and crashes the price.</div>

                            <div>Follow the steps below to use the Vesting for Contributors feature.</div>
                            <ol>
                                <li>Connect your wallet.</li>
                                <li>Select your token if you already have one or create a new token for the Launchpad by following this guide:  <a target='_blank' href='https://docs.pinksale.finance/launchpads/create-a-launchpad'>https://docs.pinksale.finance/launchpads/create-a-launchpad</a></li>
                                <li>At “step 2: DeFi Launchpad Info”, please check the box “Using Vesting Contributor?”. Here below are some important parameters:
                                    <ul>
                                        <li>First release for presale (percent): The first batch of the total presale tokens that will be released at TGE. Please note that this is expressed in percentage, not in number of tokens.</li>
                                        <li>Vesting period for each cycle (days): Presale contributors will need to wait for this amount of time to receive their tokens.</li>
                                        <li>Presale token release each cycle (percent): How many tokens will be released each cycle following the first release batch. Please note that this is expressed in percentage, not in number of tokens.</li>
                                    </ul>
                                </li>
                            </ol>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>NOTE: Presale contributors must claim their tokens manually from the Launchpad page on PinkSale.</div>
                            <div>For example, your project has a Vesting For Contributors schedule as follows:</div>
                            <div>100 tokens sold at presale, 20% presale tokens to be released at TGE, 10% to be released each subsequent month.</div>
                            <div>Your presale opens on the 5th January. Presale contributors bought all 100 tokens at TGE, you then finalize your Launchpad and contributors can claim their presale tokens, which are 100 x 20% = 20 tokens in total. Then after that, on the 5th day of every month, they can claim 10 tokens each time by visiting the Pinksale dashboard. On the 5th September (8 months after the end of your presale), they will receive the final batch of tokens.</div>
                            <div>In the above mentioned example, you would enter the following information:</div>
                            <ul>
                                <li>First release for presale (percent): 20</li>
                                <li>Vesting period each cycle (days): 30</li>
                                <li>Presale token release each cycle (percent): 10. </li>
                            </ul>
                            <div>See below:</div>
                            <div>Note: Vesting Contributor doesn't support rebase tokens.</div>
                            <h4>How to claim</h4>
                            <div>1. After a project owner finalizes a Launchpad (<a target='_blank' href='https://docs.pinksale.finance/launchpads/finalize-a-launchpad'>https://docs.pinksale.finance/launchpads/finalize-a-launchpad</a>), the presale will end.</div>
                            <div>2. Presale contributors can now go to the presale Launchpad page and claim the first batch of presale tokens by clicking on the “Claim” button. They also can check the Current Vesting Cycle and Remaining Vesting Cycle.</div>
                            <div>As per example above, Current Vesting Cycle is 0/8 and Remaining Vesting Cycle is 30 days. After 8 months (240 days) it will become 8/8. If, for some reasons, presale contributors don’t claim their tokens when the cycle ends, the claimable tokens will be accumulated. For example, if they only claim once after 8 months from TGE, they will be able to claim all vested tokens at that time.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={gd9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and then the presale tokens will be sent to your wallet.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs41' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Team Vesting Guide</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs43' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Buy a PreSale</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc43 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How to Buy a Presale</h1>
                            <div>How to Participate a Presale on PinkSale: <a target='_blank' href='https://www.youtube.com/watch?v=rtgNAQZSSs0'>https://www.youtube.com/watch?v=rtgNAQZSSs0</a></div>

                            <div>1. Go to the following link: <a target='_blank' href='https://www.pinksale.finance/#/launchpads'>https://www.pinksale.finance/#/launchpads</a>- All Launchpads. </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. You can filter the presale statuses by selecting from the "Filter By" list. You only can buy a presale with the “Inprogress” status.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Hover over a presale you want and click on “View Pool”.</div>
                            <div>4. After clicking on “View Pool”, you can see all the information related to that presale. You should check everything carefully before buying.</div>
                            <div>5. To buy the presale, insert the amount of BNB (or FTM, MATIC or ETH, depending on the pool) that you want to use to buy in the “Amount” section. The corresponding amount of presale tokens will be calculated automatically below the BNB amount. Finally, click on the “Buy” button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>7. After buying, you will see the changes in the “Amount” and “Your purchased” sections. For this pool, the maximum buy is 3 BNB, I purchased 0.1 BNB so the amount has changed to 2.9 BNB (= 3 – 0.1).</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs42' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>PreSale Vesting Guide</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs44' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Claim Tokens</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc44 = () => {
    return(
     <>
        <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How to Claim Tokens</h1>
                            <div>After taking part in and purchasing a token on presale, next you'll want to claim your tokens.</div>
                            <div>In case the soft cap/hard cap has been reached, you can claim your tokens once the “Claim token” button is available. The amount of tokens that you can claim will also be shown next to the “Claim token” button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>Check your wallet balance to see the presale tokens. We recommend that you follow the social media channels of the project to check their updates.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs43' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Buy a PreSale</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs45' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Withdraw your Contribution</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc45 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How to Withdraw Your Contribution</h1>
                            <div>After taking part in and purchasing a token on presale, in case the soft cap was not reached, in order to withdraw your contribution you'll need to wait until the presale has ended. </div>
                            <div>In this case you can withdraw your contribution (BNB/ETH/KCC/AVAX) by clicking on the “Withdrawal contribution” button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div style={{width: '70%', margin: '.3rem auto'}}>
                                <img src={pre6} style={{width: "69%", margin: "2rem 0"}}/>
                            </div>
                            <div>You will see a popup at the bottom left hand corner like this:</div>
                            <div style={{width: '50%', margin: '.3rem auto'}}>
                                <img src={pre7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Check the balance of your wallet to see if the BNB is back (or MATIC, FANTOM, ETH, depending on the pool).</div>

                            <div className='doc22-flex'>
                                <NavLink to='/docs44' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Claim Tokens</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs46' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Emergency Withdraw</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc46 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Emergency Withdraw</h1>
                            <div>After taking part in and purchasing a token on presale, in case you change your mind and want to  withdraw your contribution back, you can use "Emergency Withdraw" button for a penalty fee of 10% of your contribution.</div>
                            <div>1. From the presale/fairlaunch/subscription page, click on the "Emergency Withdraw" button</div>
                            
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. Click on "Ok" to confirm the emergency withdrawal process</div>
                            
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pre9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. After clicking on “OK”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>Note:</div>
                            <ul>
                                <li>Emergency withdrawal takes your contribution (with 10% penalty) out of Presale Pool</li>
                                <li>You can use "Emergency Withdraw" button anytime until the last 15 Minutes before a presale timer runs out.</li>
                                <li>If the hard cap is reached faster than timer then you can use "Emergency Withdraw" button until the timer would run out of the presale.</li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs45' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Withdraw Your Contribution</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs47' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Fair Launch</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc47 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Fair Launch</h1>
                            <div>Note: At fair launch, everyone will have the same token price after the fair launch ends. It doesn't matter if you buy first or late. Token price = total raised bnb / total tokens for fair launch</div>
                            <h4>Step 1: Verify Token</h4>
                            <ol>
                                <li>Connect your wallet.</li>
                                <li>Go to <a target='_blank' href='https://www.pinksale.finance/#/fairlaunch/create'>https://www.pinksale.finance/#/fairlaunch/create</a></li>
                                <li>Input your token address, if you already have one, or create a new token for the Fair Launch.</li>
                                <li>Select BNB (if you want to raise funds using stable coin for your presale, refer to this post).</li>
                                <li>Select a fee choice.</li>
                            </ol>
                            <div></div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. MetaMask will now ask you to confirm the transaction and show you the fee that you are required to pay. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>Note: </div>
                            <ul>
                                <li>Make sure the token has 'Exclude transfer fee' function if it has transfer fees.</li>
                                <li>Stablecoin pair can work with standard tokens only. It doesn't support taxed tokens.</li>
                            </ul>
                            <h4>Step 2: Put Fair Launch Info</h4>
                            <div>After verifying your token, you need to input the Fair Launch information that you want to raise. Here are some following important parameters:</div>
                            <ol>
                                <li>You must use positive numbers.</li>
                                <li>Total selling amount represents the number of tokens that will be sold during the presale stage.</li>
                                <li>Softcap must be a reasonable number, not too great.</li>
                            </ol>

                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Max contribution per user in the fair launch (Max buy per user)</div>
                            <div>5. Select a router for example PancakeSwap, it cannot be blank.</div>
                            <div>6. Liquidity (%): Enter the percentage of raised funds that should be allocated to liquidity on the router that you selected. Minimum value is 51%, maximum value is 100%.</div>
                            <div>7. Start time must be before the end time.</div>
                            <div>8. Lock-up time for liquidity pool, for example 365 days.</div>
                            <h4>Step 3: Add Additional Info</h4>
                            <div>There are some notes for this step:</div>
                            <ol>
                                <li>Logo URL and website are required fields, cannot be blank. You can’t complete this step without those.</li>
                                <li>Logo URL must end with a supported image extension: png, jpg, jpeg or gif.</li>
                                <li>Click Next after done inputting.</li>
                            </ol>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 4: Finish</h4>
                            <div>This is the final step. You can review all the information one last time before submitting. Click “Submit” after you have made sure that everything is perfect, or you can go back to previous step to make any changes.</div>
                            <div>This is an example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs46' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Emergency Withdraw</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs48' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Finalize a Fair Launch</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc48 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Finalize a Fair Launch</h1>
                            <div>After your Fair Launch has met its soft cap, follow these steps to list your token:</div>
                            <div>1. Go to <a target='_blank' href='https://www.pinksale.finance/#/launchpads/my'>https://www.pinksale.finance/#/launchpads/my</a></div>
                            <div>2. Click on “My Contributions”, and you'll be able to see your pool here.</div>
                            <div>3. You only can finalize a Fair Launch with a “Sale Ended” status. In this example, it’s PinkSaleTestToken. Hover your mouse over the PinkSaleTestToken section and click on “View Pool”.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. Exclude Fees, Dividends, Max TX on BSCScan </div>
                            <div>5. In the “Pool Actions” section, you can choose to click on “Finalize” to complete the Fair Launch and list your token, or you can choose to cancel it.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={fr7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>*Note: To Finalize your Fair Launch, you should exclude all kind of fees, taxes, rewards for presale address.</div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <h4>Why PinkSale?</h4>
                            <div></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs47' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a fair Launch</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs49' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Dutch Auction</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc49 = () => {
    return(
        <div className='docs'>
        <div className='dhead'>
            <Dheader/>
        </div>
        <div className='docsmain'>
            <Dsidebar/>
            <div className='doc2'>
                <div className='doc2-margin'>
                    <h1>Create a Dutch Auction</h1>
                    <h4>Step 1: Verify Token</h4>
                    <ol>
                        <li>Connect your wallet</li>
                        <li>Go to <a target='_blank' href='https://www.pinksale.finance/dutch-auction/create'>https://www.pinksale.finance/dutch-auction/create</a></li>
                        <li>Input your token address, if you already have one, or create a new token for the Dutch Auction.</li>
                        <li>Select BNB (if you want to raise funds using stable coin for your presale, please choose stabecoin correspondence).</li>
                        <li>Select a fee choice</li>
                        <li>MetaMask will now ask you to confirm the transaction and show you the fee that you are required to pay. If you agree, then click on the “Confirm” button to finish the process. Note Make sure the token has 'Exclude transfer fee' function if it has transfer fees. Stablecoin pair can work with standard tokens only. It doesn't support taxed tokens.</li>
                    </ol>
                    <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={at1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                    <h4>Step 2: Dutch Auction Info</h4>
                    <div>After verifying your token, you need to input the Launchpad information that you want to raise. Here are some following important parameters:</div>
                    <ol>
                        <li>You must use positive numbers.</li>
                        <li>Total selling amount represents the number of tokens that will be sold during the presale stage.</li>
                        <li>Start price means the price when the auction will start. This value must be higher than the end price. End price means the price when the auction will meet its end date.</li>
                        <li>Softcap and hardcap will be calculated automatically when you input end price and start price. Softcap must be greater then or equal to 20% of hardcap</li>
                        <li>Whitelist: Choose "Enable" if you have a whitelist of presale contributors. You can enable/disable the whitelist anytime.</li>
                        <li>Decrease Price Cycle means how long for each cycle of decreasing price token</li>
                        <li>PancakeSwap liquidity (%): Enter the percentage of raised funds that should be allocated to liquidity on PancakeSwap. Minimum value is 51%, maximum value is 100%.</li>
                        <li>For refund types you can choose refund or burn from the dropdown list.</li>
                        <li>Liquidity lockup (days): Lock-up time for liquidity pool, for example 30 days.</li>
                        <li>Start time must be before the end time. The time between start time and end time have to be longer than Decrease Price Cycle.</li>
                        <li>You can choose Vesting Contributor feature:</li>
                    </ol>
                    <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={at2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                    <h4>Step 3: Add Additional Info</h4>
                    <div>There are some notes for this step:</div>
                    <ol>
                        <li>Logo URL and website are required fields, cannot be blank. You can’t complete this step without those.</li>
                        <li>Logo URL must end with a supported image extension: png, jpg, jpeg or gif. You can upload the logo here: <a target='_blank' href='https://upload.pinksale.finance'>https://upload.pinksale.finance</a></li>
                        <li>Click Next after done inputting.</li>
                    </ol>
                    <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={at3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                    <h4>Step 4: Finish</h4>
                    <div>This is the final step. You can review all the information one last time before submitting. Click “Submit” after you have made sure that everything is perfect, or you can go back to previous step to make any changes.</div>
                    <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={at4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                    <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                    <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={at5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                    <div className='doc22-flex'>
                        <NavLink to='/docs48' className='doc22'>
                            <BsArrowLeft className='doc22-icon'/>
                            <div className='doc22-col1'>
                                <div>Previous</div>
                                <h4>Finalize A fair Launch</h4>
                            </div>
                        </NavLink>
                        <NavLink to='/docs50' className='doc22'>
                            <div className='doc22-col1'>
                                <div>Next</div>
                                <h4>Finalize A Dutch Auction</h4>
                            </div>
                            <BsArrowRight className='doc22-icon'/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
 }
 export const Doc50 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Finalize a Dutch Auction</h1>
                            <div>1. After your Dutch Auction has met its soft cap, follow these steps to list your token:</div>
                            <div>2. Go to https://www.pinksale.finance/#/launchpads/my</div>
                            <div>3. Click on “My Contributions”, and you'll be able to see your pool here.</div>
                            <div>4. You only can finalize a Fair Launch with a “Success” or “Sale Ended” status. In this example, it’s DutchAuction. Hover your mouse over the DutchAuction section and click on “View Pool”. </div>
                            <div>In the “Pool Actions” section, you can choose to click on “Finalize” to complete the Fair Launch and list your token, or you can choose to cancel it.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={at6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>*Note: To Finalize your Dutch Auction, you should exclude all kind of fees, taxes, rewards for presale address. </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs49' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Dutch Auction </h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs51' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create A Subscription</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc51 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Subscription</h1>
                            <div>In the subscription format, users can commit an amount of BNB towards a token sale, where their final allocation of the new token is determined by the ratio of their committed BNB against the total committed BNB by all participating users.</div>
                            
                            <div>For example, a presale has 100 BNB hard cap. A user commits 100 BNB and 9 other users commit a total of 900 BNB during the subscription period. It means total 1000 BNB committed to the pool. This user would receive a ratio of 1000 BNB / 100 BNB, or 10% of all tokens offered in the presale pool.</div>
                            <div>However, since there is a Hard Cap per user, users that hit the hard cap will have their allocation passed onto other participants that committed less BNB.</div>
                            <div>Once the subscription pool is finalized, we will deduct the corresponding amount from each user based on token rate. Then users can withdraw their committed BNB from the pool.</div>
                            <h4>Step 1: Verify Token</h4>
                            <div>1. Connect your wallet.</div>
                            <div>2. Go to <a target='_blank' href='https://www.pinksale.finance/subscription-pool/create'>https://www.pinksale.finance/subscription-pool/create</a></div>
                            <div>3. Input your token address, if you already have one, or create a new token for the Launchpad.</div>
                            <div>4. Select BNB (if you want to raise funds using stable coin for your presale, please choose stabecoin correspondence).</div>
                            <div>5. Select a fee choice.</div>
                            <div>6. MetaMask will now ask you to confirm the transaction and show you the fee that you are required to pay. If you agree, then click on the “Confirm” button to finish the process. Note: Make sure the token has 'Exclude transfer fee' function if it has transfer fees. Stablecoin pair can work with standard tokens only. It doesn't support taxed tokens.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={st1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 2: Subscription Pool Info After verifying your token, you need to input the Subscription pool information that you want to raise. Here are some following important parameters:</h4>
                            <div>1. You must use positive numbers.</div>
                            <div>2. HardCap Tokens means total tokens amount you want to sell.</div>
                            <div>3. SoftCap Tokens means the minimum number of tokens that need to be sold for the pool to succeed. SoftCap must be greater than or equal to 50% of the Hardcap.</div>
                            <div>4. HardCap Token Per User means is the maximum number of tokens a contributor can receive</div>
                            <div>5. Whitelist: Choose "Enable" if you have a whitelist of presale contributors. You can enable/disable the whitelist anytime.</div>
                            <div>6. Liquidity percent (%): Enter the percentage of raised funds that should be allocated to liquidity on DEX. Minimum value is 51%, maximum value is 100%.</div>
                            <div>7. For refund types you can choose refund or burn from the dropdown list.</div>
                            <div>8. Start time must be before the end time.</div>
                            <div>9. Liquidity lockup (days): Lock-up time for liquidity pool.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={st2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 3: Add Additional Info There are some notes for this step:</h4>
                            <div>1. Logo URL and website are required fields, cannot be blank. You can’t complete this step without those</div>
                            <div>2. Logo URL must end with a supported image extension: png, jpg, jpeg or gif. For example: https://www.pinkswap.finance/pinkswap.png</div>
                            <div>3. Click Next after done inputting.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={st3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 4: Finish</h4>
                            <div>You can review all the information one last time before submitting. Click “Submit” after you have made sure that everything is perfect, or you can go back to previous step to make any changes.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={st4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={st5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs50' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Finalize a Dutch Auction</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs52' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Subscription Allocation Calculation</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc52 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Subscription Allocation Calculation</h1>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={st6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>In the subscription format, users can commit an amount of BNB towards a token sale, where their final allocation of the new token is determined by the ratio of their committed BNB against the total committed BNB by all participating users.</div>

                            <div>Individual committed BNB / Total committed BNB by all participants) * Total ABC tokens to be sold on Launchpad.</div>
                            <div>For example, a total 1,000,000 ABC tokens are being offered in a new Subscription sale. A user commits 500 BNB and 9 other users commit a total of 2000 BNB during the subscription period.</div>
                            <div>The final allocation is shown above and will be allocated to each user during the final distribution phase. The user that originally held 150 BNB was allocated maximum 150,000 ABC tokens after the hard cap adjustment was made (up from 75,000 ABC calculated in the first step).</div>
                            <div>Once the subscription pool is finalized, we will deduct the corresponding amount from each user based on token rate. Then users can withdraw their committed BNB from the pool.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs51' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Subscription</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs53' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create a Private Sale</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc53 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Private Sale</h1>
                            <h4>Step 1: Before you start</h4>
                            <div>1.  Go to <a target='_blank' href='https://www.pinksale.finance/private-sale/create'>https://www.pinksale.finance/private-sale/create</a></div>
                            <div>2. Connect your wallet.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Enter the title for your private sale. This should be your token name. For example, if your token is “Moon Lambo”, the title will become “Moon Lambo Private Sale” automatically after you have successfully created the private sale pool.</div>
                            <div>4. Select a token, for example, “BNB”</div>
                            <div>5.  After selecting, click on the “Next” button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 2: Private Sale Info</h4>
                            <div>You need to enter the numbers that you want to raise in this step. Here are some following important parameters:</div>
                            <div>1. You must use positive numbers.</div>
                            <div>2. Whitelist: Choose "Enable" if you have a whitelist of Private Sale contributors. You can enable/disable the whitelist anytime.</div>
                            <div>3. Soft cap must be greater than or equal to 50% of the hard cap.</div>
                            <div>4. Minimum buy must be less than the maximum buy.</div>
                            <div>5. Start time must be before the end time (using UTC time zone)</div>
                            <div>6. First Fund Release for Project (%): The percentage of the first batch of the private sale fund to be released to the project owner. Please note this is expressed in percentage and cannot be greater than 95%.</div>
                            <div>7. Fund Vesting Period Each Cycle (days): How long, in days, between each batch of the Private Sale fund is released.</div>
                            <div>8. Fund Release Each Cycle (percent): The amount of the Private Sale fund will be released each cycle following the First Fund Release for Project batch. Please note this is expressed in percentage.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 3: Add Additional Info</h4>
                            <div>1. Logo URL and website are required fields, cannot be blank. You can’t complete this step without these.</div>
                            <div>2. Logo URL must end with a supported image extension: png, jpg, jpeg or gif. Please use http://Upload.pinksale.finance to get project logo link.</div>
                            <div>3. Description must be from 128 - 512 characters long.</div>
                            <div>4. Click Next after done inputting.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 4: Finish</h4>
                            <div>This is the final step. You can review all information one last time before submitting. Click “Submit” after you make sure that everything is perfect, or you can go back to the previous steps for changing any information that you want. </div>
                            <div>This is an example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on “Submit”, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, and this is the result:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs52' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Subscription Allocation Calculation</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs54' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Finalize A private Sale</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc54 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Finalize a Private Sale</h1>
                            <div>After your Private Sale has ended or reached the hard cap, follow these steps to list your token:</div>
                            <div>1. In the “Pool Actions” section, you can choose to click on “Finalize” to complete the Private Sale.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>3. Click on “Claim Fund” to receive your Private Sale fund.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sl8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>4. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs53' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Private Sale</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs55' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create an Airdrop</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc55 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create an Airdrop</h1>
                            <div>Disclaimer: Please be advised, that once you have committed tokens to the airdrop, it cannot be cancelled or reconfigured to reduce the amount of tokens committed. Please ensure that you have correctly allocated the number of tokens to fulfill your airdrop requirement.</div>
                            <h4>Create New Airdrop</h4>
                            <div>1. Go to <a target='_blank' href='https://www.pinksale.finance/#/airdrop/create'>https://www.pinksale.finance/#/airdrop/create</a></div>
                            <div>2. Paste your token address into the “Token address” section. After that, your token name, symbol and decimals will be shown. Make sure everything is correct and then click on “Next”.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. After selecting your token, you will need to input the Airdrop information. Here are some following important parameters: Airdrop Title, Logo URL and Website are required fields, and cannot be blank. Without this information, you will not be able to proceed. Logo URL must end with a supported image extension: png, jpg, jpeg or gif. You can upload your image using https://upload.pinksale.finance/ to get the link to your logo. Then, click “Create New Airdrop”.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After clicking on the “Create New Airdrop” button, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>4. You will be redirected to this page:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Prepare a list of airdrop addresses then click on “Set Allocations”</div>
                            <div>After clicking on “Set Allocations”, you will see a pop-up box. Here, you can add addresses and amounts to your “Users allocation” list. Addresses are separated by a new line. The amount of each user is separated by comma (,) </div>
                            <div>The below list can be used as an example: </div>
                            <div>0xA4D1AcB4156539617bF54768C3854fA8b60EDa21,1000</div>
                            <div>0x7c2dc5B018fF8fCc236964D6aEd800Dc4d1C676A,500</div>
                            <div>0x9aA1012A3D3Bd85C93B0ECb16175d11917399682,2000</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Click on “Add Allocations” when you are done inputting the addresses. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>6. After successfully adding airdrop allocations, those allocations will be shown on the airdrop page.</div>
                            <div>7. Set Vesting</div>
                            <div>After clicking on “Set Vesting”, you will see a pop-up box. Below are some important parameters: </div>
                            <div>TGE release percent (%): The percentage of the first batch of airdrop tokens to be released. Please note that this is expressed in percentage, not number of tokens. </div>
                            <div>Cycle release percent (%): How many % of airdrop tokens will be released each cycle following the first TGE release percent batch. Please note this is expressed in percentage, not in number of tokens.</div>
                            <div>Cycle (days): How long, in days, between each batch of vested tokens is released. </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>An airdrop participant has 1000 tokens to be vested in total, 40% to be released at TGE, and 20% unlocks every month afterwards for a total of 3 cycles (30 days each cycle). </div>
                            <div>Let’s imagine that your presale on Pinksale ended on the 5th of January, your airdrop participant can claim 1000 x 40% = 400 tokens after your token has been listed. Every month afterwards on the 5th of February, March and April, he can claim the next batches, 1000 x 20% = 200 tokens each batch.</div>
                            <div>In this case you would enter the following information: </div>
                            <div>TGE release percent (%): 40 </div>
                            <div>Cycle release percent (%): 20 </div>
                            <div>Cycle (days): 30</div>
                            <div>Click on “Set Vesting” when you are done inputting the numbers, then MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>8. You can remove allocations by clicking on “Remove All Allocations”</div>
                            <div>9. Before starting the airdrop, you must exclude fees, dividends, max tx for airdrop address. You can find your airdrop address on your airdrop page. </div>
                            <div>10. You only can start the airdrop once you successfully finalized your presale pool. After your presale is finalized, you can go to your airdrop page by this link https://www.pinksale.finance/#/airdrops/own - Created By You - View Airdrop</div>
                           
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>11. Then click on “Start Airdrop”</div>
                            <div>12. You will see how many tokens will be used for airdrop here (total airdrop tokens + 1% fee). Now you can choose to start now:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Or start with a specific time like this:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Click on "Approve", MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process. </div>
                            <h4>Claim Airdrop</h4>
                            <div>Airdrop participants can claim their airdrop allocations by simply following the below steps:</div>
                            <div>1. Go to this link https://www.pinksale.finance/#/airdrops/my - My Airdrops - View Airdrop. You can see your airdrops which you joined here.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={ap9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. Check claimable tokens then click on “Claim”</div>
                            <div>3. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs54' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Finalize a Private Sale</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs56' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Introducing</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc56 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Introducing</h1>
                            <div>Pink Anti-Bot will blacklist all sniper bots on PancakeSwap listing. Our newest extra feature to safeguard your listing on PancakeSwap from sniper bots who are always targeting good presales. This below is the difference it can make to your project: </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={intro} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>You have to deploy it in the contract before creating your presale and if you decide you want to use it after the presale has been filled before your launch there will be a service fee of 1 BNB.</div>

                            <h4>Key Features</h4>
                            <ul>
                                <li>Prevent bots from inflating the price when the token has just been listed on the exchange.</li>
                                <li>Prevent multiple swaps in the same transaction by adding a delay between transactions.</li>
                                <li>Control the amount of tradable tokens per trade.</li>
                                <li>Change the amount of tradable tokens over time.</li>
                                <li>Add any bot addresses to a blacklist.</li>
                            </ul>
                            <h4>Mechanism</h4>
                            <ul>
                                <li>When creating tokens on PinkSale, you have the option to implement or disable the Pink Anti-Bot.</li>
                                <li>Prevents traders from transacting during the first block at listing time. Traders will only be able to trade from the second block onwards.</li>
                                <li>The limited amount of tradable tokens per trade will increase gradually, proportional to the number of blocks that have passed since the genesis block. After a number of blocks, depending on the setting, the Anti-Bot will automatically stop working.</li>
                                <li>The limited amount of tradable tokens per trade can be customized differently for each token. Only the creator has the right to edit this parameter.</li>
                                <li>Time limit per trade can be customized differently for each token. After a number of blocks, depending on the setting, time limit per trade will become zero. Only the creator has the right to edit this parameter.</li>
                                <li>You can manually add to or remove any addresses from the blacklist. The wallets in the blacklist will not be able to trade.</li>
                            </ul>
                            <h4>Implementation Procedure</h4>
                            <ul>
                                <li>Add Anti-Bot code to the contract.</li>
                                <li>Deploy token contract.</li>
                                <li>Set owner rights for Anti-Bot.</li>
                                <li>Configure Anti-Bot.</li>
                                <li>Enable Anti-Bot.</li>
                            </ul>
                            <h4>Pink Anti-Bot Links</h4>
                            <ul>
                                <li><a target='_blank' href='https://www.youtube.com/watch?v=37s-8BCFNOUhttps://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guidehttps://docs.pinksale.finance/pink-anti-bot/how-to-integrate-pink-anti-bot-for-custom-contracts'>https://www.youtube.com/watch?v=37s-8BCFNOUhttps://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guidehttps://docs.pinksale.finance/pink-anti-bot/how-to-integrate-pink-anti-bot-for-custom-contracts</a></li>
                                <li><a target='_blank' href='https://www.youtube.com/watch?v=37s-8BCFNOUhttps://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guidehttps://docs.pinksale.finance/pink-anti-bot/how-to-integrate-pink-anti-bot-for-custom-contracts'>https://www.youtube.com/watch?v=37s-8BCFNOUhttps://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guidehttps://docs.pinksale.finance/pink-anti-bot/how-to-integrate-pink-anti-bot-for-custom-contracts</a></li>
                                <li><a target='_blank' href='https://www.youtube.com/watch?v=37s-8BCFNOUhttps://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guidehttps://docs.pinksale.finance/pink-anti-bot/how-to-integrate-pink-anti-bot-for-custom-contracts'>https://www.youtube.com/watch?v=37s-8BCFNOUhttps://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guidehttps://docs.pinksale.finance/pink-anti-bot/how-to-integrate-pink-anti-bot-for-custom-contracts</a></li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs55' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create an Airdrop</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs57' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Pink AntiBot Guide</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
  export const Doc57 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Pink Anti-Bot Guide</h1>
                            <div>Follow the steps below to use Pink Anti-Bot:</div>
                            <div>1. Connect your wallet.</div>
                            <div>‌2. Go to <a target='_blank' href='https://www.pinksale.finance/#/antibot'>https://www.pinksale.finance/#/antibot</a></div>
                            <div>3. Click on “Select token” if you have already made one or choose create token.</div>
                            <div>4. When you create a new token, in order to use Pink Anti-Bot you need to click on “Implement Pink Anti-Bot System?”</div>
                            <div>For example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Click on Next</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. You will be redirected to this page:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>7. After selecting your token, you need to configure the Anti-Bot information by filling in the fields, then click on “save config”. Following are some important parameters:</div>
                            <div>Select Router Exchange: Select a router exchange, for example PancakeSwap; this field cannot be blank. Double check this field as it’s very important.</div>
                            <div>Select Pair Token: Choose the trading pair for your token. If you want to list your token with BNB trading pair, for example, make sure to choose BNB.</div>
                            <div>Amount Limit Per Trade: This is the initial limited amount of tradable tokens at listing time. Traders will not be able to trade any amount higher than this number.</div>
                            <div>Amount to Be Added Per Block: This number will continuously be added to the “Amount Limit Per Trade” from block 1 (block after listing) until the “Block Number to Disable Anti-Bot” (see below). For example, if you set the “Amount Limit Per Trade” to 1 tokens, and the “Amount to be Added Per Block” to 1 tokens, after 100 blocks the maximum tradable token amount will be 100 tokens.</div>
                            <div>Time Limit Per Trade (seconds): Add a delay between transactions to prevent multiple swaps. For example, if you set it at 60, traders will have to wait 60 seconds between each buying/selling order. When “Block Number to Disable Anti-Bot” is reached, “Time Limit Per Trade” will automatically be set to zero.</div>
                            <div>Block Number to Disable Anti-Bot (where listing time is Block #1): Pink Anti-bot will work from the listing time until this block. After this block, it will automatically disable and traders will be able to trade normally again. It is also possible to manually disable Pink Anti-Bot at any given time by clicking on the “Disable Pink Anti-Bot” button. Keep in mind this number must be greater than or equal to 150.</div>
                            <div>This is an example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>8. Click on “Save Config”. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process, then wait until the button “Next” becomes clickable.</div>
                            <div>9. Now you can activate the Pink Anti-Bot by clicking on “Enable PinkAntiBot”. You must do this before adding liquidity, otherwise the Pink Anti-Bot will not work.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>10. After enabling the Pink Anti-Bot, you will see the notification “You have already activated Pink Anti-Bot” and the status will change from N/A to a list of numbers as per image below. In this case we can see the status as “waiting to add liquidity”, “amount limit as 1”, “time limit as 60 seconds”. “Current block” will change in real time along with the blockchain.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>11. Now you can add liquidity and list your token. This is how the status will change when Pink Anti-bot is working. “Project status” will show “Protecting”, “Blocks left to disable” will show a number as per “Block Number to Disable Anti-Bot” settings.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>12. You can add any users to the blacklist by clicking on the “Add user to blacklist” and then “Add user” buttons. Once added to this list, they will not be able to trade your tokens.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>13. You can remove blacklisted users anytime by clicking on the “Remove user from black list” button, then adding their addresses in the pop up window and finally by clicking on the “remove users” button.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={pk9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>14. You can wait until the Pink Anti-Bot disables automatically or you can also manually disable it at any time by clicking on the “Disable Pink Anti-Bot” button.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs56' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Introducing</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs58' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Integrate Pink AntiBot</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc58 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How To Integrate Pink Anti-Bot for Custom Contract</h1>
                            <div>Please check out this link: <a  target='_blank' href='https://github.com/pinkmoonfinance/pink-antibot-guide'>https://github.com/pinkmoonfinance/pink-antibot-guide</a></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs57' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Pink AntiBot Guide</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs59' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Create A Lock</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc59 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Create a Lock</h1>
                            <div>Follow the steps below to use PinkLock. Please note that PinkLock was audited by CerTik: <a target='_blank' href='https://leaderboard.certik.io/projects/pinksale'>https://leaderboard.certik.io/projects/pinksale</a></div>
                            <h4>Lock Without Vesting</h4>
                            <div>1. Go to <a target='_blank' href='https://pinksale.finance/pinklock/create'>https://pinksale.finance/pinklock/create</a></div>
                            <div>2. Connect your wallet.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Input your token or LP token address.</div>
                            <div>4. Input token owner address. The unlocked tokens will be sent to this address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Input the title of this lock, "MoonLambo777 Lock" for example.</div>
                            <div>6. Input the amount of token for locking. Please note, you can only input numbers here, not percentages.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>7. Lock until (UTC time): Input the lock time, your tokens will be locked until this moment.</div>
                            <div>This is an example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>8. Click on Approve</div>
                            <div>9. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Approve" process.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>10. Click on "Lock"</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>11. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Lock" process.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Note:</h4>
                            <div>Please exclude PinkLock's lockup address 0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max tx amount to start locking tokens.</div>
                            <h4>Lock Using Vesting</h4>
                            <div>1. Go to https://pinksale.finance/pinklock/create</div>
                            <div>2. Connect your wallet.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Input your token or LP token address.</div>
                            <div>4. Input token owner address. The unlocked tokens will be sent to this address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Input the title of this lock, "MoonLambo777 Team Vesting" for example.</div>
                            <div>6. Input the amount of tokens for vesting.</div>
                            <div>7. Place a check in the check box "use vesting"</div>
                            <div>Example: Your project has a vesting schedule for your team as below:</div>
                            <div>Your team has 100000 tokens to be vested in total, 20% will be vested at TGE and 80% unlocks every month afterwards for a total of 2 cycles (equal to 60 days).</div>
                            <div>Let’s imagine that your presale on Pinksale ended on the 22th of May. At TGE (2022-05-22 18:39 for example), your team can claim 100000 x 20% = 20000 tokens for the first token release batch. Then every month afterwards, on the 22th of June and July, your team can claim the next 2 batches, 100000 x 40% = 40000 tokens each batch.</div>
                            <div>In this case you would enter the following information:</div>
                            <ul>
                                <li>Amount: 100000</li>
                                <li>TGE Date (UTC time): 2022-05-22T18:39</li>
                                <li>TGE Percent: 20</li>
                                <li>Cycle (days): 30</li>
                                <li>Cycle Release Percent (percent): 40</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk10} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>9. Click on Approve</div>
                            <div>10. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Approve" process.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk11} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>11. Click on "Lock"</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk12} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>12. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Lock" process.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk13} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Note:</h4>
                            <ul>
                                <li>Please exclude PinkLock's lockup address 0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max tx amount to start locking tokens.</li>
                                <li>Team Vesting doesn't support rebase tokens.</li>
                            </ul>
                            <div className='doc22-flex'>
                                <NavLink to='/docs58' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Integrate Pink AntiBot</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs60' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Unlock</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc60 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How to Unlock</h1>
                            <h4>Unlock Tokens Without Vesting</h4>
                            <div>When locking cycle ends, project owners can go to PinkLock page and unlock the locked tokens by clicking on the “Unlock” button.</div>
                            <div>1. Go to <a target='_blank' href='https://pinksale.finance/pinklock/token'>https://pinksale.finance/pinklock/token</a></div>
                            <div>2. Connect your wallet.</div>
                            <div>3. Click on "My Lock"</div>
                            <div>4. Click on "View"</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk14} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>5. Click on "Unlock"</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk15} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>6. MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the "Approve" process.</div>
                            <h4>Renounce Lock Ownership</h4>
                            <div>To renounce ownership, click on "Renounce Lock Ownership". Renouncing ownership will transfer ownership to a dead wallet preventing you from interacting, unlocking or removing the liquidity/tokens at the end of the lock. Only do this if you fully understand how renouncing works and the outcome. We accept no liability for any loss occurred to any person acting or refraining from action as a result of this process.</div>
                            <h4>Unlock Vesting Tokens</h4>
                            <div>When each vesting cycle ends, project owners can go to PinkLock page and unlock the vested tokens by clicking on the “Unlock” button. For example:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={lk16} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>If, for any reason, project owners are not able to withdraw their vested tokens when a cycle expires, they can do this at any given time afterwards. If they were to wait till the next cycle expires, the total amount that can be withdrawn at that time would be the balance of the previous cycle amount plus the amount of tokens of the recently expired cycle.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs59' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Create a Lock</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs61' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Use Multisender</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
  export const Doc61 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How to Use Multi-Sender</h1>
                            <h4>Step 1: Add Your Allocation</h4>
                            <div>1. Input your token address</div>
                            <div>2. Input allocations(you must use positive numbers). For multi-sender follow this structure. Example: </div>
                            <div>0xB08b73aa35c29F10Ec0Bc4885C5e584a6f71cC22 1 <br/>0xB4FE9F393512357584947fbb5d5Cd8E1bA991560 0.1558 <br/>0x6Aaa1f77147eDF28d2049F224462c22df6088C6b 0.27 <br/>0x7FFad6702bC2f8acF0d895CB5dD7b850ab47F440 0.5</div>
                            <div>Or you can use CSV file if you have many addresses you need to send</div>
                            <div>3. Unlimited Amount means you will transfer tokens many times (you don’t need to approve token again) Exact Amount means you just need to transfer tokens once. 4. Click Approve</div>
                            <div>Remember to exclude fees, rewards, max tx amount for your wallet address to start sending tokens.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sd1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <h4>Step 2: Confirmation</h4>
                            <div>1. Review addresses and amount to be sent</div>
                            <div>2. Send modes</div>
                            <ul>
                                <li>Safe mode: this option is used for standard tokens</li>
                                <li>Unsafe mode: this option is used for taxed tokens</li>
                            </ul>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sd2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>3. Click Process and you can check txid of transaction after sending successfully.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={sd3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs60' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Unlock</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs62' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Exclude Fees, Dividends etc</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
  export const Doc62 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Exclude Fees, Dividends, Max TX on BSCScan</h1>
                            <div>After you create a Launchpad, and if your token has max transaction, dividend/reward, or tax/fee in contract, in order to finalize your presale, you will have to exclude those features for the presale contract.</div>
                            <div>Before you finalize your presale, you need to access your contract address from BSCScan or you can click on the token address on your launchpad page.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Go to Contract - Write contract - Connect to Web3 to connect your wallet, you need to use owner address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er2} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Ctrl + F, Search “exclude”, then input your presale address, then click on Write, to exclude all fee/tax, max TX, rewards for presale address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er3} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>After click on the “Write” button, MetaMask will now ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, then click on the “Confirm” button to finish the process.</div>
                            <div>If you see exclude (bool), please input “true”</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er4} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Sometimes contract doesn’t have “exclude” but "exempt" instead, Search “exempt”, then input your presale address, then click on Write, to exclude all fee/tax, max TX, rewards for presale address.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs61' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Use Multisender</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs63' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Fail with Error</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
  export const Doc63 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Fail with error "Not enough allowance"</h1>
                            <div>If you can't create presale by getting the error "Not enough allowance", it means you didn't allow MetaMask to transfer enough tokens for the pool. How to solve this following problem?</div>
                            <h4>Revoke Smart Contract Allowances/Token Approvals</h4>
                            <div>1. Visit Etherscan, BscScan for token approval checker. Enter your wallet address and find your token address.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er5} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>2. "Connect to Web3" and revoke token approval.</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er6} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er7} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>                           
                            
                            <div className='doc22-flex'>
                                <NavLink to='/docs62' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Exclude Fees, Dividends etc</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs64' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>TrustWallet RPC Issue</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc64 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>TrustWallet RPC Issue</h1>
                            <div>If you're using TrustWallet to connect PinkSale but you get error:</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={wal1} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>There are 2 ways to solve this problem:</div>
                            <h4>Use WalletConnect</h4>
                            <div>1. Close TrustWallet app.</div>
                            <div>2. Use an external browser (Safari, Chrome, Firefox) to visit PinkSale</div>
                            <div>3. Connect wallet via "WalletConnect".</div>
                            <h4>Turn off Auto-Node mode and select a working Node manually</h4>
                            <div>In TrustWallet, click Settings - choose Preferences</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er8} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Choose Node Settings</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er9} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Find and choose BNB Smart Chain</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er10} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Turn off Automatic Mode and select a working Node</div>
                            <div style={{width: '90%', margin: '.3rem auto'}}>
                                <img src={er11} style={{width: "99%", margin: "2rem 0"}}/>
                            </div>
                            <div>Close TrustWallet app and open it again.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs63' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Fail with Error</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs65' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>How to Fix RPC Error</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc65 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>How to Fix RPC Error</h1>
                            <div>Use to select a good RPC <a href='https://chainlist.org/' target='_blank'>https://chainlist.org/</a></div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs64' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>TrustWallet RPC Issue</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs66' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>PreSale Cancellation</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc66 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Presale Cancellation</h1>
                            <div>PinkSale takes all necessary steps to ensure that the safety of investors comes first, all whilst upholding the integrity of the PinkSale platform.</div>
                            <div>To ensure the above, the team is constantly on the lookout for deceptive projects. It is important to understand as a project owner, that you agree with the terms stated below.</div>
                            <div>PinkSale reserves the right to cancel your presale for the following reasons, but not limited to:</div>
                            <ul>
                                <li>Plagiarising content, artwork, games, or websites</li>
                                <li>Smart contracts that compromise the safety of investors</li>
                                <li>Smart contracts with exit/mint functions</li>
                                <li>Deceptive behavior in presale contributions to inflate the total funds raised or no of contributors</li>
                                <li>Deceptive behaviour with regards to the KYC application</li>
                                <li>Abusive or disrespectful behaviour toward any of the PinkSale team or community</li>
                            </ul>
                            <div>If your presale is cancelled for any of the above reasons, you agree that you forfeit the right to a refund. Please contact us on Telegram https://t.me/pinkecosystem if you have any questions.</div>

                            <div className='doc22-flex'>
                                <NavLink to='/docs65' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>How to Fix RPC Error</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs67' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Finalize a Subscription</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc67 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Finalize a Subscription</h1>
                            <div>After your Subscription Pool has met its soft cap, follow these steps to list your token:</div>
                            <div>1. Go to https://www.pinksale.finance/#/launchpads/my</div>
                            <div>2. Click on “My Contributions”, and you'll be able to see your pool here.</div>
                            <div>3. You only can finalize a Fair Launch with a “Calculating” status. In this example, it’s Test Token. Hover your mouse over the Test Token section and click on “View Pool”.</div>
                            <div>4. Exclude Fees, Dividends, Max TX on BSCScan</div>
                            <div>5. In the “Pool Actions” section, you can choose to click on “Finalize” to complete the Subscription Pool and list your token, or you can choose to cancel it.</div>

                            <div className='doc22-flex'>
                                <NavLink to='/docs66' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Presale Cancellation</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs68' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Privacy Policy</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc68 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Privacy Policy</h1>
                            <div>At PinkSale, accessible from https://www.pinksale.finance, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PinkSale and how we use it.</div>
                            <div>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</div>
                            <div>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in PinkSale. This policy is not applicable to any information collected offline or via channels other than this website.</div>
                            <h4>Consent</h4>
                            <div>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</div>
                            <h4>Information we collect</h4>
                            <div>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</div>
                            <div>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</div>
                            <div>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</div>
                            <h4>How we use your information</h4>
                            <div>We use the information we collect in various ways, including to:</div>
                            <ul>
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Develop new products, services, features, and functionality</li>
                                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                                <li>Send you emails</li>
                                <li>Find and prevent fraud</li>
                            </ul>
                            <h4>Log Files</h4>
                            <div>PinkSale follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</div>
                            <h4>Cookies and Web Beacons</h4>
                            <div>Like any other website, PinkSale uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</div>
                            <h4>Google DoubleClick DART Cookie</h4>
                            <div>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads</div>
                            <h4>Advertising Partners Privacy Policies</h4>
                            <div>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on PinkSale, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</div>
                            <h4>Third Party Privacy Policies</h4>
                            <div>PinkSale's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</div>
                            <div>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites</div>
                            <h4>CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
                            <div>Under the CCPA, among other rights, California consumers have the right to:</div>
                            <div>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</div>
                            <div>Request that a business delete any personal data about the consumer that a business has collected.</div>
                            <div>Request that a business that sells a consumer's personal data, not sell the consumer's personal data</div>

                            <h4>GDPR Data Protection Rights</h4>
                            <div>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</div>
                            <div>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</div>
                            <div>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</div>
                            <div>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</div>
                            <div>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</div>
                            <div>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</div>
                            <div>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</div>

                            <div>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</div>
                            <h4>Children's Information</h4>
                            <div>PinkSale does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</div>
                            <div>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</div>
                            <div className='doc22-flex'>
                                <NavLink to='/docs67' className='doc22'>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Finalize A subscription</h4>
                                    </div>
                                </NavLink>
                                <NavLink to='/docs69' className='doc22'>
                                    <div className='doc22-col1'>
                                        <div>Next</div>
                                        <h4>Terms of Services</h4>
                                    </div>
                                    <BsArrowRight className='doc22-icon'/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
 export const Doc69 = () => {
    return(
     <>
         <div className='docs'>
                <div className='dhead'>
                    <Dheader/>
                </div>
                <div className='docsmain'>
                    <Dsidebar/>
                    <div className='doc2'>
                        <div className='doc2-margin'>
                            <h1>Terms of Service</h1>
                            <div>Welcome to https://www.pinksale.finance, a website-hosted user interface (the "Interface" or "App") provided by PinkSale ("we", "our", or "us"). The Interface provides access to a decentralized protocol on various public blockchains, including but not limited to Ethereum, that allows users to trade certain compatible digital assets ("the PinkSale protocol" or the "Protocol"). The Interface is one, but not the exclusive, means of accessing the Protocol. To use the Interface, you must use non-custodial wallet software, which allows you to interact with public blockchains. Your relationship with that non-custodial wallet provider is governed by the applicable terms of service of that third party, not this Terms of Service Agreement (the "Agreement").</div>
                            <div>This Agreement explains the terms and conditions by which you may access and use the Interface. You must read this Agreement carefully. By accessing or using the Interface, you signify that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use the Interface and should not use the Interface.</div>
                            <div>NOTICE: Please read this Agreement carefully as it governs your use of the Interface. This Agreement contains important information, including a binding arbitration provision and a class action waiver, both of which impact your rights as to how disputes are resolved. The Interface is only available to you — and you should only access the Interface — if you agree completely with these terms.</div>
                            <div>1. <b>Modification of this Agreement</b> <br/>We reserve the right, in our sole discretion, to modify this Agreement from time to time. If we make any modifications, we will notify you by updating the date at the top of the Agreement and by maintaining a current version of the Agreement at PinkSale's terms of services. All modifications will be effective when they are posted, and your continued accessing or use of the Interface will serve as confirmation of your acceptance of those modifications. If you do not agree with any modifications to this Agreement, you must immediately stop accessing and using the Interface.</div>
                            <div>2. <b>Eligibility</b> <br/>To access or use the Interface, you must be able to form a legally binding contract with us. <br/>Accordingly, you represent that you are at least the age of majority in your jurisdiction (e.g., 18 years old in the United States) and have the full right, power, and authority to enter into and comply with the terms and conditions of this Agreement on behalf of yourself and any company or legal entity for which you may access or use the Interface. <br/>
You further represent that you are not (a) the subject of economic or trade sanctions administered or enforced by any governmental authority or otherwise designated on any list of prohibited or restricted parties (including but not limited to the list maintained by the Office of Foreign Assets Control of the U.S. Department of the Treasury) or (b) a citizen, resident, or organized in a jurisdiction or territory that is the subject of comprehensive country-wide, territory-wide, or regional economic sanctions by the United States. Finally, you represent that your access and use of the Interface will fully comply with all applicable laws and regulations, and that you will not access or use the Interface to conduct, promote, or otherwise facilitate any illegal activity.</div>
                            <div>3. <b>Proprietary Rights</b><br/>
We own all intellectual property and other rights in the Interface and its contents, including (but not limited to) software, text, images, trademarks, service marks, copyrights, patents, and designs. This intellectual property is available under the terms of our copyright licenses and our Trademark Guidelines. </div>
                            <div>4. <b>Additional Rights</b><br/>
We reserve the following rights, which do not constitute obligations of ours: (a) with or without notice to you, to modify, substitute, eliminate or add to the Interface; (b) to review, modify, filter, disable, delete and remove any and all content and information from the Interface; and (c) to cooperate with any law enforcement, court or government investigation or order or third party requesting or directing that we disclose information or content or information that you provide.</div>
                            <div>5. <b>Privacy</b><br/>
When you use the Interface, the only information we collect from you is your blockchain wallet address, completed transaction hashes, and the token names, symbols. We do not collect any personal information from you (e.g., your name or other identifiers that can be linked to you). We do, however, use third-party service providers which may receive or independently obtain your personal information from publicly-available sources. We do not control how these third parties handle your data and you should review their privacy policies to understand how they collect, use, and share your personal information. By accessing and using the Interface, you understand and consent to our data practices and our service providers' treatment of your information.
<br/>We use the information we collect to detect, prevent, and mitigate financial crime and other illicit or harmful activities on the Interface. For these purposes, we may share the information we collect with blockchain analytics providers. We share information with these service providers only so that they can help us promote the safety, security, and integrity of the Interface.
<br/>Please note that when you use the Interface, you are interacting with Ethereum or another public blockchain, which by nature may provide transparency into your transactions. PinkSale does not control and is not responsible for any information you make public on blockchains by taking actions through the Interface.
</div>
                            <div>6. <b>Prohibited Activity</b><br/>
You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in relation to your access and use of the Interface:</div>
                            <div>7. <b>Not Registered with the SEC or Any Other Agency</b><br/>
We are not registered with the U.S. Securities and Exchange Commission as a national securities exchange or in any other capacity.</div>
                            <div>8.<b> Non-Solicitation; No Investment Advice</b><br/>
You agree and understand that: (a) all trades you submit through the Interface are considered unsolicited, which means that they are solely initiated by you; (b) you have not received any investment advice from us in connection with any trades.</div>
                            <div>
                            9. <b>Non-Custodial and No Fiduciary Duties</b><br/>
The Interface is a purely non-custodial application, meaning you are solely responsible for the custody of the cryptographic private keys to the digital asset wallets you hold. This Agreement is not intended to, and does not, create or impose any fiduciary duties on us. To the fullest extent permitted by law, you acknowledge and agree that we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, those duties and liabilities are hereby irrevocably disclaimed, waived, and eliminated. You further agree that the only duties and obligations that we owe you are those set out expressly in this Agreement.
                            </div>
                            <div>10. <b>Compliance and Tax Obligations</b><br/>
The Interface may not be available or appropriate for use in your jurisdiction. By accessing or using the Interface, you agree that you are solely and entirely responsible for compliance with all laws and regulations that may apply to you. Specifically, your use of the Interface or the Protocol may result in various tax consequences, such as income or capital gains tax, value-added tax, goods and services tax, or sales tax in certain jurisdictions. It is your responsibility to determine whether taxes apply to any transactions you initiate or receive and, if so, to report and/or remit the correct tax to the appropriate tax authority.</div>
                            <div>11. <b>Assumption of Risk</b><br/>
By accessing and using the Interface, you represent that you are financially and technically sophisticated enough to understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of the usage and intricacies of digital assets such as ether (ETH), so-called stablecoins, and other digital tokens such as those following the Ethereum Token Standard (ERC-20).</div>
                            <div>In particular, you understand that the markets for these digital assets are nascent and highly volatile due to risk factors including (but not limited to) adoption, speculation, technology, security, and regulation. You understand that anyone can create a token, including fake versions of existing tokens and tokens that falsely claim to represent projects, and acknowledge and accept the risk that you may mistakenly trade those or other tokens. So-called stablecoins may not be as stable as they purport to be, may not be fully or adequately collateralized, and may be subject to panics and runs.</div>
                            <div>Further, you understand that smart contract transactions automatically execute and settle, and that blockchain-based transactions are irreversible when confirmed. You acknowledge and accept that the cost and speed of transacting with cryptographic and blockchain-based systems such as Ethereum are variable and may increase dramatically at any time. You further acknowledge and accept the risk of selecting to trade in Expert Modes, which can expose you to potentially significant price slippage and higher costs.</div>
                            <div>In summary, you acknowledge that we are not responsible for any of these variables or risks, do not own or control the Protocol, and cannot be held liable for any resulting losses that you experience while accessing or using the Interface. Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using the Interface to interact with the Protocol</div>                            
                            <div className='doc22-flex'>
                                <NavLink to='/docs68' className='doc22' style={{width: '96%'}}>
                                    <BsArrowLeft className='doc22-icon'/>
                                    <div className='doc22-col1'>
                                        <div>Previous</div>
                                        <h4>Privacy Policy</h4>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </>
    )
 }
