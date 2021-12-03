import React from "react";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
function Header() {
    const history= useHistory();
    function logout()
{
    
    localStorage.removeItem('usernames');
    window.location="/Sign-in";
}

    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo;
    }
    if(useridinfo)
    {
        return(
            <>
            
          <div className="header">
                  <div className="call-mail">
                      <p><i className="fa fa-phone" aria-hidden="true"></i> 01919170323</p>
                      <p><i className="fa fa-envelope-o" aria-hidden="true"></i> diptacompani12@gmail.com</p>
                  </div>
                  <div className="logout-name">
                      <p><Link to="/Profile">@<span>{useridinfo.U_username}</span></Link></p>
                     <p onClick={logout} >Logout</p>
                      <p><i className="fa fa-bell-o" aria-hidden="true"></i><sup className="notification">12</sup>
                      </p>
                  </div>
                  
              </div>
              
            </>
             );
    }

    else
    {
      var x=window.location="/Sign-in";
      return x;
    }
  
    
}

export default Header;





