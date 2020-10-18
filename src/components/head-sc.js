import React, {Component} from 'react';
import  '../styles/head-sc.css';

class Headsc extends Component{
    render(){
        return(
            <div className="head-wrp">
            <div className="language">
                <p className="chs-language">Choose language:</p>
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
            <div className="social-media">
                <p>Join us</p>
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
            <div className="wrp-share">
                <div className="share-fb">
                    <img src={require('../images/socialmedia/facebook.png')}/>
                    <p>Share</p>
                </div>
                <div  className="share-twt">
                    <img src={require('../images/socialmedia/twitter.png')}/>
                    <p>Tweet</p>
                </div>
            </div>
            </div>      
        )
    }
}
export default Headsc;