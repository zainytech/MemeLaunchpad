import React from "react";
import './Header.css'
import { useState } from "react";

import {AiOutlineMenuFold} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsGraphUp} from 'react-icons/bs';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineRocket} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';
import {AiOutlineUp} from 'react-icons/ai';
import {BsShield} from 'react-icons/bs';
import {AiOutlineUnlock} from 'react-icons/ai';
import {GiAirBalloon} from 'react-icons/gi';
import {BsCoin} from 'react-icons/bs';
import {AiOutlineCrown} from 'react-icons/ai';
import {BsShieldCheck} from 'react-icons/bs';
import {AiOutlineSend} from 'react-icons/ai';
import {AiOutlineRobot} from 'react-icons/ai';
import {AiOutlineAudit} from 'react-icons/ai';
import {IoDocumentTextOutline} from 'react-icons/io5';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiTelegramLine} from 'react-icons/ri';
import {FiTwitter} from 'react-icons/fi';
import {CiFacebook} from 'react-icons/ci';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from './assets/navbar/logo.png'
import logo2 from './assets/navbar/logo2.png'

import eth from './assets/navbar/eth.svg'

function Header(){

    const [menuresp, setmenuresp] = useState('');
    const onClickmenuresp = ()=>{
        setmenuresp(!menuresp);
    };
    return(
        <>
        <div class="head-main">
            <div class="head-div1">
                <div class="head-div1-container">
                    <div class="head-div1a">
                        <AiOutlineMenuFold class="head-menu-icon-bfr-resp"/>
                        {menuresp? <AiOutlineMenuFold onClick={onClickmenuresp} class="head-menu-icon head-menu-icon-not-resp"/>:
                        <AiOutlineMenu onClick={onClickmenuresp} class="head-menu-icon-resp head-menu-icon-not-resp"/>}
                        <NavLink to="/"><img class="head-div1a-img" src={logo2}></img></NavLink>
                        {/* <span class="head-div1a-txt1">Meme Launchpad</span> */}
                    </div>
                    <div class="head-div1b">
                        <a href="https://www.dexview.com/" target="_blank" style={{textDecoration:'none',color:'black'}}><div class="head-div1b-div1">
                            <BsGraphUp/><span>dexview.com</span>
                        </div></a>
                        <div class="head-div1b-div1">
                            <img src={eth}></img><span>ETH MAINNET</span>
                        </div>
                        <div class="head-div1b-div3">
                            <button>Connect</button>
                        </div>
                    </div>
                </div>
                <div class="head-nav2-bfrclick">
                <div class={menuresp? "head-nav2 head-nav2-resp" :"head-nav2 head-nav2-resp-onclick"}>
                    <div class="head-nav2-txt1">Trending</div>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span >#1</span>PEMON</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#2</span>APEPE</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#3</span>GUCCIPEPE</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#4</span>BVV</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#5</span>zkPepe</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#6</span>PEPEAICEO</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#7</span>PEPELON</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#8</span>PEPEBULL</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#9</span>Astropepe</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#10</span>$PEPEZILLA</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#11</span>BOJACK</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span>#12</span>PepeGEN</div></NavLink>
                    <NavLink to='/pemon' activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-nav2-txt"><span></span></div></NavLink>
                    
                </div>
                </div>
            </div>
            <div class="head-div2-bfr-resp"><Menuresp /></div>
            {menuresp? <Menuresp/>:null}
            
        </div>
        </>
    )
}
function Menuresp(){
    const [launchpad, setlaunchpad] = useState('');
    const onClicklaunchpad = ()=>{
        setlaunchpad(!launchpad);
    };
    const [privatesale, setprivatesale] = useState('');
    const onClickprivatesale = ()=>{
        setprivatesale(!privatesale);
    };
    const [pinklock, setpinklock] = useState('');
    const onClickpinklock = ()=>{
        setpinklock(!pinklock);
    };
    const [airdrop, setairdrop] = useState('');
    const onClickairdrop = ()=>{
        setairdrop(!airdrop);
    };
    return(
        <><div class="head-div2">
                <NavLink to="/" exact activeClassName="active" className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1"><AiOutlineHome/>Home</div></NavLink>
                <div class="head-div2-item1" onClick={onClicklaunchpad}><AiOutlineRocket/>Launchpads{launchpad?<AiOutlineDown class="head-down-arrow-icon"/>:<AiOutlineUp class="head-down-arrow-icon"/>}</div>
                {launchpad? <>
                    <NavLink activeClassName="active" to="/createLaunch" className="nav-link" style={{textDecoration:'none'}} ><div class="head-div2-item1a"><span>Create launchpad</span></div></NavLink>
                    <div class="head-div2-item1a"><span>Create fair launch</span></div>
                    <div class="head-div2-item1a"><span>Create dutch auction</span></div>
                    <div class="head-div2-item1a"><span>Create subscription</span></div>
                    <NavLink activeClassName="active" to="/createToken" className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Create token</span></div></NavLink>
                    <NavLink activeClassName="active" to="/launchpadList" className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Launchpad list</span></div></NavLink>
                </>:null}
                <div class="head-div2-item1" onClick={onClickprivatesale}><BsShield/>Private Sale{privatesale?<AiOutlineDown class="head-down-arrow-icon"/>:<AiOutlineUp class="head-down-arrow-icon"/>}</div>
                {privatesale? <>
                    <NavLink activeClassName="active" to='/private-sale' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Create Private Sale</span></div></NavLink>
                    <NavLink activeClassName="active" to='/private-list' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Private Sale List</span></div></NavLink>
                </>:null}
                <div class="head-div2-item1" onClick={onClickpinklock}><AiOutlineUnlock/>PinkLock{pinklock?<AiOutlineDown class="head-down-arrow-icon"/>:<AiOutlineUp class="head-down-arrow-icon"/>}</div>
                {pinklock? <>
                    <NavLink activeClassName="active" to="/lockpink" className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Create lock</span></div></NavLink>
                    <NavLink activeClassName="active" to="/tokenpink" className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Token</span></div></NavLink>
                    <NavLink activeClassName="active" to="/liquidity" className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Liquidity</span></div></NavLink>
                </>:null}
                <div class="head-div2-item1" onClick={onClickairdrop}><GiAirBalloon/>Airdrop{airdrop?<AiOutlineDown class="head-down-arrow-icon"/>:<AiOutlineUp class="head-down-arrow-icon"/>}</div>
                {airdrop? <>
                    <NavLink activeClassName="active" to='/create-air' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Create airdrop</span></div></NavLink>
                    <NavLink activeClassName="active" to='/list-air' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1a"><span>Airdrop list</span></div></NavLink>
                </>:null}
                <div class="head-div2-item1"><BsCoin/>Buy Crypto Fiat</div>
                <NavLink activeClassName="active" to='/leaderboard' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1"><AiOutlineCrown/>Leaderboard</div></NavLink>
                <NavLink activeClassName="active" to='/anti-bot' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1"><BsShieldCheck/>Anti-Bot</div></NavLink>
                <NavLink activeClassName="active" to='/multisender' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1"><AiOutlineSend/>Multi-Sender</div></NavLink>
                <a href="https://www.dexview.com/" target="_blanck" style={{textDecoration:'none',color:'black'}}><div class="head-div2-item1"><BsGraphUp/>dexview.com</div></a>
                <div class="head-div2-item1"><AiOutlineRobot/>Pools Alert</div>
                <NavLink activeClassName="active" to='/docs' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1"><AiOutlineAudit/>KYC & Audit</div></NavLink>
                <NavLink activeClassName="active" to='/docs' className="nav-link" style={{textDecoration:'none'}}><div class="head-div2-item1"><IoDocumentTextOutline/>Docs</div></NavLink>
                <div class="head-div2-item1"><AiOutlineShoppingCart/>Shop</div>
                <div class="head-div2-item1"><RiTelegramLine/>Telegram</div>
                <div class="head-div2-item1"><FiTwitter/>Twitter</div>
                <div class="head-div2-item1"><CiFacebook/>Facebook</div>
                <div class="head-div2-items-bottom"></div>
                

            </div></>
    )
}
export default Header