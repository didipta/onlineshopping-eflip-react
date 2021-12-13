import React from "react";
import logo from '../../../img/logo.png';
import {Link} from "react-router-dom";
function Menunav() {
   return(
  <>
  <header>
    <div className="search-logo-prfile">
        <div className="logo">
        <img src={logo} alt=""/>
            <h1><span style={{color: "rgb(250, 3, 229)", fontFamily: "'Lobster', cursive"}}>E</span>flip</h1>
        </div>
        <div className="search-box">
           
                
                <input type="text" name="search" placeholder="Search for....." id="search-live"/>
                
                <button><i className="fa fa-search" aria-hidden="true"></i>
               
                </button>
                
                
        </div>
        
        <div className="profile">
        <a href="/paymant"><i className="fa fa-cart-plus" aria-hidden="true"></i></a>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <Link to="/Profile"><i className="fa fa-user-o" aria-hidden="true"></i></Link> 
        </div>
    </div>


    <div className="navigation_home">
         <div className="CATAGORIES">
           
            <i className="fa fa-bars" aria-hidden="true" style={{marginLeft:"30px", fontSize:"1.1rem"}}></i>
            <p>CATAGORIES</p>
            <span style={{marginLeft:"30px"}}><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
            
        </div>
        <div className="nav">
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="/financial">$FINANCIALS</a></li>
                <li><Link to="/myorder">MY ORDERS</Link></li>
                <li><a href="">SHOP</a></li>
            </ul>
        </div>
        <div className="nav-2">
        <ul>
            <li><a href="">ADOUT</a></li>
            <li><a href="">NEWS FEED</a></li>
            <li><a href="">HELP</a></li>
            
        </ul>
        </div>
    </div>
   
        
    <table className="results"  id="result-search" ></table>
</header>

  

    
  </>
   );
    
}

export default Menunav;