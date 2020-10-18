import React from 'react';      
import '../src/App.css';
import Headsc from './components/head-sc';
import Header from './components/header';
import Recentitems from './components/recentitems';
import Trendingcases from './components/trendingcases';
import Buycases from './components/buycases';
import Footer from './components/footer';

function App(){
    return(
        <div className="container">
            <Headsc/>
            <Header/>
            <Recentitems/>
            <Trendingcases/>
            <Buycases/>
            <Footer/>
        </div>
    )
}
export default App;