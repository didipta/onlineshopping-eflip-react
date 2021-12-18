import React from "react"
import { Link } from "react-router-dom";
const DeliHead = () => {
    function logout()
    {
        window.location="/Sign-in";
    }
    return(
        <div>
            <Link className="buttonadmin" to="/delivaryHome">Home</Link>
           
            <Link className="buttonadmin" to="/DeliOrderlist">Delivery List </Link>
            
            <Link className="buttonadmin" to="/DeliProductList">Product List</Link>
      
            <Link className="buttonadmin" to="/DeliOrderdetailslist">Order Deatils List</Link>
        
            <Link className="buttonadmin" to="/DeliOrderlist">See All Delivery Requests</Link>
            <Link  className="buttonadmin" onClick={logout} >Login</Link> <b/>
        </div>

    )
}

export default DeliHead;