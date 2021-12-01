
import '../../css/style.css';
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Leftnav from "./navigation/leftnav";
import Leftnav2 from "./navigation/leftnav2";

import Menunav from "./navigation/Menunav";
import Bestselles from "./Others/best_selles";
import Bestsellepros from "./Others/best_sellpros";
import Fashioncollectionpro from "./Others/fashion-collectionpros";
import NEWARRIVAL from "./Others/NEW-ARRIVAL";
import Slider from "./Others/slider";
import Tradingoffersale from "./Others/Trading-offer-sale";
import React, {useState, useEffect} from "react";
import axios from "axios";
function Home() {
   var useridinfo = null;
if(localStorage.getItem('usernames')){
  var userinfo = JSON.parse(localStorage.getItem('usernames'));
  useridinfo=userinfo.allinfo.U_username;
  console.log(userinfo);
}

axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = useridinfo;
console.log(axios.defaults.headers.common["Authorization"]);
   document.getElementById("title").innerHTML="Eflip | Home";
   return(
  <>
   <Header/>
   <Menunav/>
   <div className="contant-home">
   <Leftnav/>
   <div>
   <Slider/>
   
   </div>
  </div>
  <Leftnav2/>
  <Bestsellepros/>
  <Fashioncollectionpro/>
  <Tradingoffersale/>
  <NEWARRIVAL/>
  <Footer/>
   
    
  </>
   );
    
}

export default Home;
