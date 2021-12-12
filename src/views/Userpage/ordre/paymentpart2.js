import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
function backclick(){
    document.getElementById("orderconfirm").style.display = "none";
   
  }
  function checkclick()
  {
    document.getElementById("orderconfirm").style.display = "block";
  }
  function bkashclick(){
             
    document.getElementById("bkashback").style.display = "block";
    document.getElementById("cardback").style.display = "none";
    document.getElementById("cashback").style.display = "none";
  }
  function cashclick(){
    document.getElementById("bkashback").style.display = "none";
    document.getElementById("cashback").style.display = "block";
    document.getElementById("cardback").style.display = "none";
  }
  function cardclick(){
    document.getElementById("bkashback").style.display = "none";
    document.getElementById("cashback").style.display = "none";
    document.getElementById("cardback").style.display = "block";
  }
function Paymantpart2(props)
{
    var useridinfo = null;
    var usernameinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo.id;
      usernameinfo=userinfo.allinfo.U_username;
    }
    ////////////////////////////////////
    var totalQuantity=0;
    var totalprice = 0;
    var alltotalprice = 0;
    var productname=[];
    var orderid=0;
    var id=0;
    const countcart=(props.carddetail).length;
    props.carddetail.forEach(added)
    function added(carddetail)
    {
        id +=carddetail.id;
        totalQuantity +=Number(carddetail.P_quantity);
        totalprice +=Number( carddetail.P_price);
        alltotalprice +=Number(carddetail.P_tprice);
        orderid=((totalQuantity*1000)+(alltotalprice*10))*(countcart+id);
    }
  ///////////////////////
    const [inputs, setInputs] = useState({
        userid:"",orderid:"",totaleprice:"",Paymenttype:"",username:""
    });
    //////////////////////////
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    ///////////Bkashmathoed///////////////
    const handleSubmit = (event) => {      
        event.preventDefault();
        inputs.Paymenttype=document.getElementById("Bkash").value;
        axios.post("http://127.0.0.1:8000/api/Paymentadd",inputs)
        .then(resp=>{
           console.log(resp.data);
           window.location="/paymant";
        }).catch(err=>{
            
            console.log(err);
            
        });
                
         
      }
      ////////////Cardmethod///////////////////
      const handleSubmit2 = (event) => {
        event.preventDefault();
        inputs.Paymenttype=document.getElementById("card").value;
        axios.post("http://127.0.0.1:8000/api/Paymentadd",inputs)
        .then(resp=>{
           console.log(resp.data);
           window.location="/paymant";
        }).catch(err=>{
            
            console.log(err);
            
        });
                
         
      }
      /////////////Cashmethod///////////////////
      const handleSubmit3 = (event) => {
        event.preventDefault();
        inputs.Paymenttype=document.getElementById("Cash").value;
        axios.post("http://127.0.0.1:8000/api/Paymentadd",inputs)
            .then(resp=>{
               console.log(resp.data);
               window.location="/paymant";
            }).catch(err=>{
                
                console.log(err);
                
            });
                
         
      }
     ///////////////////////////////////

    if (props.carddetail.length>0) {
   return(
       <>
    <div class="totalprice">
    <p>Quantity-{totalQuantity}</p>
    <p>Price-{totalprice}</p>
    <p>{totalQuantity}*{totalprice}</p>
    <h3>total price-{alltotalprice} tk</h3>
    </div>
    <input type="submit" value="Checkout" class="btnorder" onClick={checkclick}></input>
    <div id="orderconfirm">
    <div class="orderconfirm">
    <div class="order-title">
            <h1>Order id-#OrdE{orderid}</h1>
            <p>Total Item- {totalQuantity}</p>
            <p>Delivery Charge-45 Tk</p>
            <h3>total price- {alltotalprice+45} tk</h3>
            <hr/>
            <p>Item Name:</p>
            {
     props.carddetail.map(productname=>(
        <li>{productname.P_name}</li>
     ))
    }
        <button class="btnorder" onClick={backclick}>BACK</button>
        </div>
        
        <div class="paymant">
            <h1>Payment Type</h1>
            <div class="payment_type">
                <img src="/img/Bkash.png" alt="" onClick={bkashclick}/>
                <img src="/img/cart.png" alt="" onClick={cardclick}/>
                <img src="/img/cash.png" alt="" onClick={cashclick}/>
            </div>

            <form onSubmit={handleSubmit} class="paymentform" id="bkashback" >
                <input type="hidden" name="userid" value={inputs.userid=useridinfo}/>
                <input type="hidden" name="username" value={inputs.username=usernameinfo}/>
                <input type="hidden" name="orderid" value={inputs.orderid="#OrdE"+orderid}/>
                <input type="hidden" name="totaleprice" value={inputs.totaleprice=alltotalprice+45}/>
               
                <input type="hidden" id="Bkash" value="Bkash"/>

                <h4>Bkash in Payment</h4>
                <input type="text" name="phonenu" id="" placeholder="Phone number" required/><br/>
              
                  <span class="error" style={{position:"absolute",top:"20%"}} ></span>
                    
                <input type="password" name="password" id="" placeholder="password" required/>
                      <span class="error" style={{position:"absolute",top:"20%"}}></span>
                   
                <button class="btnorder">Confirm Order</button>
    </form>

    <form onSubmit={handleSubmit2} class="paymentform" id="cardback" >
            
    <input type="hidden" name="userid" value={inputs.userid=useridinfo}/>
                <input type="hidden" name="username" value={inputs.username=usernameinfo}/>
                <input type="hidden" name="orderid" value={inputs.orderid="#OrdE"+orderid}/>
                <input type="hidden" name="totaleprice" value={inputs.totaleprice=alltotalprice+45}/>
               
                <input type="hidden" id="card" value="card"/>
                <h4>Cart in Payment</h4>
                <input type="text" name="formid" id="" placeholder="User Id" required/><br/>
                <span class="error" style={{position:"absolute",top:"20%"}}></span>
                <input type="password" name="password" id="" placeholder="password" required/>
                <span class="error" style={{position:"absolute",top:"20%"}}></span>
                <button class="btnorder">Confirm Order</button>
            </form>

            <form onSubmit={handleSubmit3} class="paymentform" id="cashback" >
            <input type="hidden" name="username" value={inputs.username=usernameinfo}/>
                <input type="hidden" name="orderid" value={inputs.orderid="#OrdE"+orderid}/>
                <input type="hidden" name="totaleprice" value={inputs.totaleprice=alltotalprice+45}/>
               
                <input type="hidden" id="Cash" value="Cash"/>
                <h4>Cash in Payment</h4>
                <button class="btnorder">Confirm Order</button>
            </form>



     </div>



   </div>

   </div>
        
       
       </>
   )
    }
    else
    {
        return (
            <h1 style={{margin:"10px", fontSize:"1.3rem" ,textAlign:"center"}}>No Products have been added form add to cart</h1>
        );
    }
}
export default Paymantpart2;