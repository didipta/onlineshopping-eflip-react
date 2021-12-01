import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
function Myoderdetails()
{
    var {orderid} =useParams();
   
    const [myordersdetails, setmyorderdetails] = useState([]);
    let url="http://127.0.0.1:8000/api/Showallodersdetails/"+orderid;
    useEffect(()=>{
        
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setmyorderdetails(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    console.log(myordersdetails);
    return(
        <>
        <Header/>
         <div className="top-head">
    <p style={{marginLeft:"20px"}}> <a href="/home">Home</a> / <Link to="/myorder" style={{color:"black"}}>All order your</Link> </p>
     </div>

     <div class="cartdetails">
    <h3 >Your Order Details is </h3>
</div>
<div class="order_list">


    {
     myordersdetails.map(myordersdetail=>(
        <div class="order_details">
        <h1>{myordersdetail.P_name}</h1>
        <p>Price-{myordersdetail.P_price}</p>
        <p style={{ width: "190px"}}>{myordersdetail.P_categories}</p>
        <p>Quantity-{myordersdetail.P_quantity}</p>
        <p>Total-{myordersdetail.P_tprice}</p>
        <p>{myordersdetail.P_size}</p>
        
    </div>

    ))
}


</div>
<Footer/>
        </>
    )

}
export default Myoderdetails;