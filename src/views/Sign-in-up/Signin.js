import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import React, {useState, userEffect} from "react";
import axios from "axios";
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

        //login controller
        const [inputs, setInputs] = useState({
            uname:"",password:""
        });

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
        
        const history= useHistory();
        const handleSubmit = (event) => {
            event.preventDefault();
            var obj = {uname:inputs.uname, password:inputs.password};
            axios.post("http://127.0.0.1:8000/api/loginform",obj)
            .then(resp=>{
                var userinfos = resp.data;
                var Alluser={allinfo:userinfos};
                console.log(userinfos);
                var usertype=userinfos.Usertype;
                console.log( Alluser);
                var userid =userinfos;
                if(usertype=="Customer")
                {
                    localStorage.setItem('usernames', JSON.stringify(Alluser));
                    window.location="/home";
                   
                }
                else if (usertype=="Staff") {
                    history.push("/fStaffhome");
                }
                else if (usertype=="Delivaryman") {
                    history.push("/delivaryHome");
                }
                else if (usertype=="Admin") {
                    history.push("/AdminHome");
                }
                else
                { 
                    alert("Please Enter Your right Password and Username");
                }
            }).catch(err=>{
                
                console.log(err);
                
            });
            
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

                <form onSubmit={handleSubmit} className="sign-in-form"  >

                <div className="input-field">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <input type="text" name="uname" value={inputs.uname} onChange={handleChange} placeholder="user name" required />
                        
                    </div>

                <div className="input-field">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" id="password" value={inputs.password} onChange={handleChange} placeholder="password" required />
    
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
