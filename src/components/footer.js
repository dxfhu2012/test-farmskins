import React,{Component} from 'react';
import '../styles/footer.css';

class Footer  extends Component{
    render(){
        return(
            <div>
                <div className="head-wrp">
                <div className="social-media">
                    <a className="lk-scmd">
                        <img src={require('../images/socialmedia/facebook.png')}/>
                    </a>
                    <a className="lk-scmd">
                        <img src={require('../images/socialmedia/twitter.png')}/>
                    </a>
                    <a className="lk-scmd">
                        <img src={require('../images/socialmedia/reddit.png')}/>
                    </a>
                    <a className="lk-scmd">
                        <img src={require('../images/socialmedia/weibo.png')}/>
                    </a>
                    <a className="lk-scmd">
                        <img src={require('../images/socialmedia/steam.png')}/>
                    </a>
                    <a className="lk-scmd">
                        <img src={require('../images/socialmedia/wechat.png')}/>
                    </a>
                </div>
                <div className="language">
                    <a className="asdasd">FAQ</a>
                    <a className="asdasd">CONTACT</a>
                    <a className="asdasd">ITEMS</a>
                    <a className="asdasd">TERMS AND CONDITIONS</a>
                    <a className="asdasd">LEADERBOARD</a>
                    <a className="asdasd">SIGN IN</a>
                    <div className="select">
                    <select>
                        <option>
                        EN
                        🇺🇸&emsp;
                        </option>
                        <option>
                            NL
                            🇳🇱&emsp;
                        </option>
                        <option>
                            DE
                            🇩🇪&emsp;
                        </option>
                        <option>
                            FR
                            🇫🇷&emsp;
                        </option>
                        <option>
                            ES
                            🇪🇸&emsp;
                        </option>
                        <option>
                            JP
                            🇯🇵&emsp;
                        </option>
                    </select>
                    </div>
                </div>
                <div className="imggpa">
                    <img src={require('../images/gpa.png')} />
                </div>
                </div>
                {/*  akhirgpa*/}
                {/* awal footer */}
                <div className="footer-wrp">    
                    <div className="footer123123">
                        <p className="eight">©2016—2020 Farmskins.com</p>
                        <p className="">WiseAvant OÜ as an administrator of the Website adopts these Terms of Use that specifies User’s rights and obligations and constitute a legally binding agreement for both parties. These Terms of Use affect User’s rights and impose certain obligations while using the Website, so the User must read them carefully. </p>
                    </div>
                    <div className="img-sponsor">
                        <img src={require("../images/sponsor.png")}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;