import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";


const Sidebar = () => {
    return(
        <>
            <div className="sidebar">
                <Link to='/'>Home</Link>
                <Link to='/create-air'>Create Airdrop</Link>
                <Link to='/list-air'>Airdrop List</Link>
                <Link to='/leaderboard'>LeaderBoard</Link>
                <Link to='/anti-bot'>Anti-Bot</Link>
                <Link to='/multisender'>Multi-Sender</Link>
                <Link to='/private-sale'>Create private Sale</Link>
                <Link to='/private-list'>Create private List</Link>
            </div>
        </>
    );
}

export default Sidebar;