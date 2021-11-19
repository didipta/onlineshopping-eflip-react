import React from 'react';
import logo from '../img/logo.png';
import '../css/index.css';
import {Link} from "react-router-dom";
function Start() {
  document.getElementById("title").innerHTML="ONLINE SHOPPING Eflip";
  return (
    <div className="body">
      <div className="navigation">
        <div className="logo">
            <img src={logo} alt=""/>
            <h1><span className="E">E</span>flip</h1>
        </div>
        <ul>
            <li><a href="">PRODUCTS</a></li>
            <li><a href="">COMPANY</a></li>
            <li><a href="">PARTNERS</a></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">CONTACT US</a></li>
        </ul>
    </div>
    <div className="container">
      <div className="title">
          <h1>ONLINE SHOPPING</h1>
          <h3>ALL PRODUCT AVAILABLE</h3>
          <p>Online shopping is the process of buying goods and services
            from merchants who sell on the Internet. Since the emergence
            of the World Wide Web, merchants have sought to sell their 
            products to people who surf the Internet. Shoppers can visit web 
            stores from the comfort of their homes and shop as they sit in front 
            of the computer.</p>
            <Link to="/Sign-in"><button>LOG IN</button></Link>
      </div>
     
    </div>

    <div className="socail-app">
        <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-google" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-phone" aria-hidden="true"></i></a>
    </div>
    </div>
  );
}

export default Start;
