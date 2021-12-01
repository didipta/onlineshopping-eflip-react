import React, {useState, useEffect} from "react";
import '../../../css/addtocart.css'
import '../../../css/PROfile-User.css'
import '../../../css/jquery.nice-number.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import Addtocartinfo from "./addtocart";
const Addtocartaxioxs = (props)=>{
    var {productid} =useParams();
    let url="http://127.0.0.1:8000/api/addtocarttwo/"+productid;
    
    const [productinfo, setPosts] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    document.getElementById("title").innerHTML="Eflip | "+productinfo.P_name;
    return(
        <div>
           <Header/>
            <a href="{{route('/Cartdetails')}}"><div class="cart-icon">
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </div></a>
     <div>
         <Addtocartinfo product={productinfo} />
            
            
            
    </div>
            <Footer/>
        </div>
    )
        }
export default Addtocartaxioxs;