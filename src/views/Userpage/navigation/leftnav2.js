import React from "react";
import { Link } from "react-router-dom";
function Leftnav2() {
   return(
  <>
  
  <div className="CATAGORIES-nav c-nav-2">
    <li><Link to="/productlist/Laptops"> Laptops </Link></li>
    <li><Link to="/productlist/Desktops"> Desktops </Link></li>
    <li><Link to="/productlist/Watchs"> Watchs </Link></li>
    <li><Link to="/productlist/Motor Bikes"> Motor Bikes </Link></li>
    <li><Link to="/productlist/Smart phone"> Smart Phones</Link></li>
    <li><Link to="/productlist/Smart & Android tvs"> Smart & Android Tvs</Link></li>
    <li><Link to="/productlist/Speakers"> Speakers </Link></li>
    <li><Link to="/productlist/Headphones"> Headphones </Link></li>
    <li><Link to="/productlist/Refrigerators"> Refrigerators </Link></li>
    <li><Link to="/productlist/Split Ac"> Split Ac </Link></li>
    <li><Link to="/productlist/Men Fashion"> Men Fashion </Link></li>
    <li><Link to="/productlist/Women Fashion"> Women Fashion</Link></li>

</div>
    
  </>
   );
    
}

export default Leftnav2;
