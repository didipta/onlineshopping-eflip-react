import React, {useState, useEffect} from "react";
import '../../css/PROfile-User.css'
import axios from "axios";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Userprofileinfo from "./Profile";
const Userprofileaxois = ()=>{
   
    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo;
    }
    
    document.getElementById("title").innerHTML="Eflip | "+ useridinfo.U_username;
    return(
        <div>

            <Header/>
            
            <Userprofileinfo Systemuser={useridinfo}/>
           
            <Footer/>
        </div>
    )
        }
export default  Userprofileaxois;