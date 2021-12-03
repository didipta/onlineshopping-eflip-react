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
      useridinfo=userinfo.allinfo.U_username;
    }
    const [profileinfo, setprofileinfo] = useState([]);
    let url="http://127.0.0.1:8000/api/profile/"+useridinfo;
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
           setprofileinfo(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
  
       
        return(
            <div>
    
                <Header/>
                
                <Userprofileinfo Systemuser={profileinfo}/>
               
                <Footer/>
            </div>
        )
    }
   
export default  Userprofileaxois;