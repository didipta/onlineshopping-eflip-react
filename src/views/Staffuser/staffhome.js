import React from "react"
import { Link } from "react-router-dom";
const StaffHead = () => {
    function logout()
    {
        window.location="/Sign-in";
    }
    return(
        <div className="bodys">
   
            <div class="headersss stickyss">
                 <h1>Welcome to Eflip shopping Staff Page</h1>
                 <div class="topnavsss">  
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
            <Link to="/AllProducts">All Products</Link>
            <Link to="/OrderDetails">Orders</Link>
            </div>

        </div>
        </div>
    )   
    
  
}
export default StaffHead;