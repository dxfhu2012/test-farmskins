import React, {Component} from 'react';
import  '../styles/header.css';

class Header extends Component{
    render(){
        return(
            <div className="wrp-hdr">
                    <div className="logo-fs">
                         <img src={require('../images/logo.svg')}/>
                    </div>
                    <div className="menu-nav">
                        <div className="nav1">
                            <div className="img-nav">
                                 <img src={require('../images/navmenu/casebatle.svg')}/>
                            </div>
                            <p>Case Battle</p>
                        </div>
                        <div className="nav1">
                            <div className="img-nav">
                                <img src={require('../images/navmenu/contract.png')}/>            
                            </div>
                            <p>Contract</p>
                        </div>
                        <div className="nav1">
                            <div className="img-nav">
                                <img src={require('../images/navmenu/upgrad.png')}/>
                            </div>
                            <p>Upgrade</p>
                        </div>
                        <div className="nav1">
                            <div className="img-nav">
                                <img src={require('../images/navmenu/giveaway.png')}/>
                            </div>
                            <p>Giveaway</p>
                        </div>
                        <div className="nav1">
                            <div className="img-nav">
                                <img src={require('../images/navmenu/dailybonus.png')}/>
                            </div>
                            <p>Daily bonus</p>
                        </div>
                        <div className="nav1">
                            <div className="img-nav">
                                <img src={require('../images/navmenu/partner.png')}/>
                            </div>
                            <p>Partner</p>
                        </div>
                        <div className="signsteam">
                            <div className="img-nav">
                                <img src={require('../images/navmenu/signsteam.png')}/>
                            </div>
                            <p>Sign in through STEAM</p>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Header;