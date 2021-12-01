import React, {useState, useEffect} from "react";
import '../../../css/addtocart.css'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
function Myorder() {
    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo;
    }

     
    
    var idname=useridinfo.U_username;
    const [myorders, setmyorder] = useState([]);
    let url="http://127.0.0.1:8000/api/Showalloders/"+idname;
    useEffect(()=>{
        
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setmyorder(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return(
        
        <>
        <Header/>
            <div className="top-head">
    <p style={{marginLeft:"20px"}}> <a href="/home">Home</a> / <Link to="" style={{color:"black"}}></Link> </p>
     </div>
     <div class="cartdetails">
    <h3>All Your Oder items</h3>
</div>
<div class="order_list">
{
     myorders.map(myorder=>(
        <div class="order_details">
        <h1>{myorder.O_id}</h1>
        <p style={{width: "150px"}}>Price-{myorder.P_tprice}</p>
        <p>{myorder.Paymanttype}</p>
        <p style={{width: "350px"}}>{myorder.created_at}</p>
        <h3 style={{width: "350px"}}>{myorder.O_status}</h3>
        <Link to={"/Showallodersdetails/"+myorder.id}><button style={{ width: "150px"}}>Order Details</button></Link>
    </div>
    ))
}

</div>

     <Footer/>
        </>
    )

}
export default Myorder;
