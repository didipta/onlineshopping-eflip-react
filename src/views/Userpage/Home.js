import React from "react";
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
function Home() {
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
