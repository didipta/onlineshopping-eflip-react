import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import Paymantpart2 from "./paymentpart2";
function Payments()
{

    ///localstorage information////////////////////////////
    document.getElementById("title").innerHTML="Eflip | All Cart iteam your";
    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo;
    }
    ////////////////////////////////////////////////////////////
     
    ////Get Add To Cart  Detalis///////////////////////////
    var idname=useridinfo.U_username;
    const [carddetails, setcarddetails] = useState([]);
    let url="http://127.0.0.1:8000/api/Addtocartdetalis/"+idname;
    useEffect(()=>{
        
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setcarddetails(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    /////////////////////////////////////////////////

    return(
        <>
        <Header/>
        <div class="top-head">
        <p style={{marginLeft:"20px" }}> <a href="/home">Home</a> / <a href="#" style={{color:"black"}}></a></p>
        </div>
        <div class="cartdetails">
            <h3>All Cart iteam your</h3>
        </div>
        <div class="order_list">
        {
     carddetails.map(cartproduct=>(
    <div class="order_details">
        <h1>{cartproduct.P_name}</h1>
        <p>Quantity-{cartproduct.P_quantity}</p>
        <p>Price-{cartproduct.P_price}</p>
        <p>{cartproduct.P_quantity}*{cartproduct.P_price}</p>
        <h3>total price-{cartproduct.P_tprice} tk</h3>
        <Link to={"/cartiteamdelet/"+cartproduct.id}><button>delete</button></Link>

       
    </div>
     ))
}
    </div>
     <Paymantpart2 carddetail={carddetails} />

        <Footer/>
        
        </>
    )
}
export default Payments;