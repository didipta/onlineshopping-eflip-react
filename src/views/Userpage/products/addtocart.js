import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Size from "./size";
function Addtocartinfo(props) {
    var id=props.id;
    var img1="/img/"+props.product.P_img1;
    var img2="/img/"+props.product.P_img2;
    var img3="/img/"+props.product.P_img3;
   return(
  <>
  <div className="addtocart">
 <div className="top-head">
    <p style={{marginLeft:"20px" }}> <a href="/home">Home</a>/<Link to={"/productlist/"+props.product.P_categories}>{props.product.P_categories}</Link>/<a href="#" style={{color:"black"}}>{props.product.P_name}</a> </p>
 </div>
 <div className="cart-icon">
<i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
</div>
<form action="{{route('/Addtocart')}}"  method="post">
<div className="content-item">
  
<div>

<div className="item-img">
    <img src={img1} id="first-img" alt="" />
    <img src={img2} id="second-img" alt="" style={{display: "none"}} />
    <img src={img3} id="three-img" alt="" style={{display: "none"}}/>
    
</div>
<div className="three-img">
    <img src={img3} onClick={firstimg} alt="" />
    <img src={img2} onClick={secondimg} alt=""/>
    <img src={img1} onClick={threedimg} alt=""/>
</div>

</div>

<div className="item-card">

           <input type="hidden" name="id" value="{{$product->id}}"/>
           <input type="hidden" name="user_name" value="{{$Systemuser->U_username}}"/>
           <input type="hidden" name="item_categories" value="{{$product->P_categories}}"/>
            <div className="item-title">
                <h2 >{props.product.P_name}</h2>
                <input type="hidden" name="iteam_name" value="{{$product->P_name}}"/>
                <p>{props.product.P_details}</p>
            </div>
            
            <div style={{display: "inline-flex", margin: "10px"}}>
                <div className="item-color">
                    <h2>color</h2>
                    <select onclick="">
                        <option value="" >--Select--</option>
                    <option value="#dd5b1e" style={{backgroundColor: "#dd5b1e"}}></option>
                    <option value="#f0cb36" style={{backgroundColor: "#f0cb36"}}></option>
                    <option value="#252525" style={{backgroundColor: "#252525"}}></option>
                </select>
                </div>

                <Size issize={props.product.P_categories}/>
       </div>


       <div className="input">
            <h2></h2>
            <input type="number" name="item_quantity"  value="1" min="1" ></input>
            <p >Price:<span id="price">{props.product.P_price}</span>/-</p>
            <input type="hidden" name="item_price" value="{{$product->P_price}}"/>
        </div>
        <input type="submit" value="Add to cart " className="btn-add"/>
    </div>


</div>



</form>



<Rating/>


</div>
        
        

    
  </>
   );
    
}
function firstimg(){
    document.getElementById("first-img").style.display = "none";
    document.getElementById("second-img").style.display = "block";
    document.getElementById("three-img").style.display = "none";
}
function secondimg(){
    document.getElementById("first-img").style.display = "none";
    document.getElementById("second-img").style.display = "none";
    document.getElementById("three-img").style.display = "block";
}
function threedimg(){
    document.getElementById("first-img").style.display = "block";
    document.getElementById("second-img").style.display = "none";
    document.getElementById("three-img").style.display = "none";
}

export default Addtocartinfo;