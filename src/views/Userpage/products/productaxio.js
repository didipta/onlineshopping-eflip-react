import React, {useState, useEffect} from "react";
import '../../../css/addtocart.css'
import '../../../css/PROfile-User.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Productlist from "./productlist";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

const Productaxio = ()=>{
    var {categories} =useParams();
    let url="http://127.0.0.1:8000/api/productlist/"+categories;
    document.getElementById("title").innerHTML="Eflip | "+categories;
    const [products, setPosts] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <Header/>
            <a href="{{route('/Cartdetails')}}"><div class="cart-icon">
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </div></a>
            <div className="top-head">
    <p style={{marginLeft:"20px"}}> <a href="/home">Home</a> / <Link to="" style={{color:"black"}}>{categories}</Link> </p>
     </div>
     <div className="item-list">
             {
                products.map(Product=>(
                    <Productlist Pname={Product.P_name} Pid={Product.P_id} P_price={Product.P_price} P_img1={Product.P_img1} id={Product.id}/>
                ))
               }
            
    </div>
            <Footer/>
        </div>
    )
        }
export default Productaxio;