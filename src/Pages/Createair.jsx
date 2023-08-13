import React from "react";
import './Createair.css';
import Sidebar from "../comp/Sidebar";
import Header from '../Components/Header'
import { Link } from "react-router-dom";

const Createair = () => {
    return(
        <>
            <div className="aircrt">
                <div className="aircrt1">
                    <Header/>
                </div>
                <div className="aircrt2">
                    <h1>Create New Airdrop</h1>
                    <div className="aircrt21">
                        <div className="aircrt21-col1">(*) is required field.</div>
                        <div className="aircrt21-col2">
                            <div>Token address*</div>
                            <input type="text" placeholder="Ex: PinkMoon"/>
                        </div>
                        <div className="aircrt21-col3">Create airdrop fee: 0.5 BNB</div>
                        <div className="aircrt21-col4">Token address cannot be blank</div>
                        <div className="aircrt21-col5"><button>Next</button></div>
                    </div>
                    <div className="hom24">
                    Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Createair;