import React from "react";
import './Multisender.css'
import Header from '../Components/Header';

import { Link } from "react-router-dom";


const Multisender = () => {
    return(
        <>
            <div className="msend">
                <div className="msend1">
                    <Header/>
                </div>
                <div className="msend2">
                    <div className="msend21">
                        <div className="msend12-col1">
                            <div className="msend12-col11">
                                <div>1</div>
                            </div>
                            <div className="msend12-col12">
                                <h6>Add Your Allocation</h6>
                                <div>Enter your token to be send with allocations</div>
                            </div>
                        </div>
                        <div className="msend12-col1">
                            <div className="msend12-col11">
                                <div>2</div>
                            </div>
                            <div className="msend12-col12">
                                <h6>Confirmation</h6>
                                <div>Let review your information.</div>
                            </div>
                        </div>
                    </div>
                    <div className="aircrt21-col2">
                        <div>Token Address</div>
                        <input type="text" placeholder="Ex: 0x..."/>
                        <p className="aircrt21-col3">Pink Multi-sender allows you to send ERC20 token in batch by easiest way. You can enter token address to send specific token or leave it blank to send chain token such as BNB....</p>
                    </div>
                    <div className="aircrt21-col2">
                        <div>Allocations <sup style={{color: 'red', fontSize: '1.1rem'}}>*</sup></div>
                        <textarea cols={16} rows={14} style={{width: '94.5%', padding: '1rem .5rem', borderRadius: '.8rem'}} placeholder="Insert allocation: separate with breaks line. By format: address,amount or address amount Ex:
                            0x0000000000000000000000000000000000001000 13.45
                            0x0000000000000000000000000000000000001000 1.049
                            0x0000000000000000000000000000000000001000 1">
                        </textarea>
                    </div>
                    <div className="aircrt21-col5">
                        <button>Or choose from CSV File</button>
                        <div className="aircrt21-col4">Sample CSV file</div>
                    </div>
                    <div className="msend22">
                        Please exclude <b>0x5D00661EA3c9b8f095520573b9B940B6fEbcfD8b</b> from fees, rewards, max tx amount to start sending tokens.
                    </div>
                    <div className="msend23"><button>Next</button></div>
                    <div className="hom24">
                        Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <Link>Binance Academy</Link>.
                    </div>
                </div>
            </div>
        </>
    );

}

export default Multisender;
