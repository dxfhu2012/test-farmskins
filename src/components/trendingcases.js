import React,{ Component } from "react";
import  '../styles/trendingcases.css';

class Trendingcases extends Component{
    render(){
        return(
            <div>
                 <div className="wrp-tc">
                    <div className="garisgaris">
                        <hr className="garis"/>
                    </div>
                    <div className="img-garis">
                        <img src={require("../images/trandingcases/left.svg")}/>
                    </div>
                    <div className="txt-cases">
                        <p>TRENDING CASES</p>
                    </div>
                    <div className="img-garis">
                        <img src={require("../images/trandingcases/left.svg")} className="img-right"/>
                    </div>
                    <div className="garisgaris">
                        <hr className="garis"/>
                    </div>
                </div>
            {/*awal  senjata 2*/}
            <div className="wrp-sj2">
                <div className="sj2-1">
                    <div className="wrp-giveway">
                        <div>
                            <img src={require("../images/senjata2/buyicon.png")} className="giveaway"/>
                        </div>
                    </div>
                        <img src={require("../images/senjata2/senjata22/sj1.png")}/>
                       <div className="txt-ga">
                            <p>WATER PRESSURE</p>
                       </div>
                        <div className="wrp-buy">
                            <p>PRICE</p>
                            <p className="harga">$1.99 USD</p>
                        </div>
                </div>
                <div className="sj2-2">
                    <div className="wrp-giveway">
                        <div>
                            <img src={require("../images/senjata2/buyicon.png")} className="giveaway"/>
                        </div>
                    </div>
                        <img src={require("../images/senjata2/senjata22/sj2.png")}/>
                       <div className="txt-ga">
                            <p>DINKED</p>
                       </div>
                        <div className="wrp-buy">
                            <p>PRICE</p>
                            <p className="harga">$6.99 USD</p>
                        </div>
                </div>
                <div className="sj2-3">
                    <div className="wrp-giveway">
                        <div>
                            <img src={require("../images/senjata2/buyicon.png")} className="giveaway"/>
                        </div>
                    </div>
                        <img src={require("../images/senjata2/senjata22/sj3.png")}/>
                       <div className="txt-ga">
                            <p>READY PLAYER TWO</p>
                       </div>
                        <div className="wrp-buy">
                            <p>PRICE</p>
                            <p className="harga">$18.99 USD</p>
                        </div>
                </div>
                <div className="sj2-4">
                    <div className="wrp-giveway">
                        <div>
                            <img src={require("../images/senjata2/buyicon.png")} className="giveaway"/>
                        </div>
                    </div>
                        <img src={require("../images/senjata2/senjata22/sj4.png")}/>
                       <div className="txt-ga">
                            <p>NEON FUTURE</p>
                       </div>
                        <div className="wrp-buy">
                            <p>PRICE</p>
                            <p className="harga">$3.99 USD</p>
                        </div>
                </div>
                <div className="sj2-5">
                    <div className="wrp-giveway">
                        <div>
                                <img src={require("../images/senjata2/buyicon.png")} className="giveaway"/>
                        </div>
                    </div>
                        <img src={require("../images/senjata2/senjata22/sj5.png")}/>
                       <div className="txt-ga">
                            <p>COLD MINT</p>
                       </div>
                        <div className="wrp-buy">
                            <p>PRICE</p>
                            <p className="harga">$69.99 USD</p>
                        </div>
                </div>
            </div>
            </div>           
        )
    }
}
export default Trendingcases;