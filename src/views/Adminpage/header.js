import React from "react"
import { Link } from "react-router-dom";
const Headadmin = () => {
    function logout()
    {
        window.location="/Sign-in";
    }
    return(
        <div>
 
            <Link className="buttonadmin"  to="/AdminHome">Home</Link> <b/>
            <Link  className="buttonadmin" to="/Createuseralls">Create User</Link> <b/>
            <Link  className="buttonadmin" to="/Createproductadmin">Add Product</Link> <b/>
            <Link className="buttonadmin"  to="/AllPostsalls">Order Details list</Link> <b/>
            <Link  className="buttonadmin" to="/Userlistshow">User List</Link> <b/>
            <Link className="buttonadmin"  to="/ProductListalls">Product List</Link> <b/>
            <Link  className="buttonadmin" to="/OrderListadmin">See Order</Link><b/> <b/>
            <Link  className="buttonadmin" onClick={logout} >Login</Link> <b/>

            
        
        </div>

    )
}

export default Headadmin;