import React, {Component} from 'react';
import  '../styles/buycases.css';

class Buycases extends Component{
    render(){
        return(
        <div className="buysteam">
            <p className="txt-1">Buy cases with awesome CS:GO skins!</p>    
            <p className="subtitle">Follow is in our social network, and keep up to date with the last news and special offers.</p>   
            <p className="more-info">Do you need new,cool skins?Choose and Buy a case that you like!We Have expensive skins and some exclusive cases that you will not find in the game.Weekly updates,giveaway,technical support and a lot of payment options with G2A Pay.</p>                    
             
            <div className="wrp-btnyl">
                    <img src={require('../images/stmblack.png')}/>
                    <p>Sign in throught STEAM</p>
            </div> 
            <img src={require('../images/key.png')} className="keykey"/>  
            <p  className="number123">65 132 901</p>
            <p>OPENED CASES</p>    
        </div>
        )
    }
}

export default Buycases;