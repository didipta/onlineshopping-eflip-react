import React from 'react';
import logo from '../../img/logo.png';
import '../../css/Login.css';
import {Link} from "react-router-dom";
function Signin() {
    document.getElementById("title").innerHTML="Eflip | WELCOME BACK :)";
    const password=()=>{
        var x= document.getElementById("password");
        if(x.type=="password")
        {
            x.type="text";
            document.getElementById('eye').style.color="rgba(116, 116, 116, 0.781)";
         
    
        }
        else{
            x.type="password";
            document.getElementById('eye').style.color="rgba(43, 43, 43, 0.781)";
        }
        }
   
    return (
       <div className="contaner-signin">

        <div className="left-contaner">
            <Link to="/"><div className="logo">
            <img src={logo} alt=""/>
            <h1><span className="E">E</span>flip</h1>
        </div></Link>
            <div className="left-info">
                <h1>Hello friend!!</h1>
                <p>Are you new to this website? Do you like what we 
                    offer ? you should totally join our website and experience
                    community.</p>
                <Link to="/Sign-up"><button className="btn">Register....</button></Link>
            </div>

        </div>
        <div className="signin-title">
            <h1>WELCOME BACK :)</h1>
            <p>To keep connected with us please login with your personal 
                information by user-name and password.</p>

                <form action="sliderpage.html" className="sign-in-form" method="POST" >

                <div className="input-field">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <input type="text" name="uname" id="uname" placeholder="user name" required />
                        
                    </div>

                <div className="input-field">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" id="password" placeholder="password" required />
    
                    <div className="eye" onClick={password}><i className="fa fa-eye" aria-hidden="true" id="eye" ></i></div> 
    
                </div>

                <a href="#" className="forget">Forgotten password?</a><br/>
                    <input type="submit" value="Sign In" className="btn"/>
                    <p className="social-text">Or Sign in with social platforms</p>

                    <div className="social-media">

                      <a href="#" className="social-icon">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fa fa-google"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    

                    
                </form>

                </div>


        



        </div>
      );
    
}

export default Signin;
