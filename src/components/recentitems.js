import React,{ Component } from "react";
import '../styles/recentitems.css';
import Slider from "react-slick";


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
  };

class Recentitems extends Component{
render(){
    return(
        <div>
            <div className="wrp-totalsts">
            <div className="clmn-total">
                    <p className="totalopen">TOTAL OPENED</p>
                    <p className="total-nmr">65 132 898</p>
            </div>
            <div className="clmn-total">
                <p className="knives">Knives</p>
                <p className="total-nmr">660 435</p>
            </div>
            <div className="clmn-total">
                <p className="convert">CONVERT</p>
                <p className="total-nmr">4 654 824</p>
            </div>
            <div className="clmn-total">
                <p className="classfield">CLASSFIELD</p>
                <p className="total-nmr">4 065 108</p>
            </div>
            <div className="clmn-total">
                <p className="restricted">RESTRICTED</p>
                <p className="total-nmr">10 993 171</p>
            </div>
            <div className="clmn-total">
                <p className="milspec">MIL-SPEC</p>
                <p className="total-nmr">20 679 567</p>
            </div>
        </div>
        {/* akhir total */}
        <div className="recentitems">
            <p>RECENT ITEMS</p>
        </div>
        {/* awal slide senjata */}
               {/* magic scro */}
        <Slider {...settings}>
            <div className="senjata1">
                <img src={require('../images/senjata1/senjata/1.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata2">
                <img src={require('../images/senjata1/senjata/2.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata3">
                <img src={require('../images/senjata1/senjata/3.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata4">
                <img src={require('../images/senjata1/senjata/4.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata1">
                <img src={require('../images/senjata1/senjata/5.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata2">
                <img src={require('../images/senjata1/senjata/6.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata3">
                <img src={require('../images/senjata1/senjata/7.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata4">
                <img src={require('../images/senjata1/senjata/8.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata1">
                <img src={require('../images/senjata1/senjata/9.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata2">
                <img src={require('../images/senjata1/senjata/10.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata3">
                <img src={require('../images/senjata1/senjata/13.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata4">
                <img src={require('../images/senjata1/senjata/14.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata1">
                <img src={require('../images/senjata1/senjata/15.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata2">
                <img src={require('../images/senjata1/senjata/1231231.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata3">
                <img src={require('../images/senjata1/senjata/image.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata4">
                <img src={require('../images/senjata1/senjata/image1.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata1">
                <img src={require('../images/senjata1/senjata/image2.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            <div className="senjata2">
                <img src={require('../images/senjata1/senjata/image3.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
             <div className="senjata3">
                <img src={require('../images/senjata1/senjata/img4.png')} className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>mp7</p>
                        <p className="txt-org">Flame</p>
                        <p className="txt-org">(minimal)</p>
                        <p className="txt-blue">drake</p>
                    </div>
                </div>
            </div>
            
        </Slider>
        </div>
    )
}
}

export default Recentitems;