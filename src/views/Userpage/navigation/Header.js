import React from "react";
import {Link} from "react-router-dom";
function Header() {
   return(
  <>
  
<div className="header">
        <div className="call-mail">
            <p><i className="fa fa-phone" aria-hidden="true"></i> 01919170323</p>
            <p><i className="fa fa-envelope-o" aria-hidden="true"></i> diptacompani12@gmail.com</p>
        </div>
        <div className="logout-name">
            <p><a href="#">@<span>Diptasaha</span></a></p>
           <Link to="/Sign-in"><p>Logout</p></Link>
            <p><i className="fa fa-bell-o" aria-hidden="true"></i><sup className="notification">12</sup>
            </p>
        </div>
        
    </div>
    
  </>
   );
    
}

export default Header;





