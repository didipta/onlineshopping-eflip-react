import React from 'react';
import logo from '../../img/logo.png';
import '../../css/Registertion.css';
import {Link} from "react-router-dom";
function Signup() {
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

        function cpassword(){

            var y= document.getElementById("cpassword");
            if(y.type==="password")
            {
                y.type="text";
                document.getElementById('ceye').style.color="rgba(116, 116, 116, 0.781)";
             
        
            }
            else{
                y.type="password";
                document.getElementById('ceye').style.color="rgba(43, 43, 43, 0.781)";
            }
            }
   
    return (
        <>
        
        <div className="contaner">

            <div className="regis-title">
                <h1>Registertion</h1>
                <div className="title-line"></div>
                <h3>This Will help you manage all your activities.</h3>
                <p>Let's get you set up you can verify your personal account and 
                    setting up your profile.</p>
            </div>

            <form action="{{route('/Registertion')}}" method="POST" className="sign-up" >


                <input type="hidden" value="Customer" name="usertype" />
                <input type="hidden" value="pro.png" name="profileimg" />

                <div className="sign-up-form">

                <div>

                    <div className="input-field">
                        <i className="fa fa-user"></i>
                        <input type="text" name="Firstname" id="Firstname"  placeholder="First name" />
                    </div>
                    <span className="error" style={{position:"absolute",top:"20%"}} ></span>

                    <div className="input-field">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <input type="tel" name="U_phone" id="phone"  placeholder="Phone number" /><br/><span></span>
                    </div>
                    <span className="error" style={{position:"absolute",top:"38%"}} ></span>

                    <div className="input-field">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <input type="text" name="U_username" id="username"   placeholder="User name" />
                    </div>
                    <span className="error" style={{position:"absolute",top:"56%"}} ></span>

                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="password" id="password"  placeholder="Password" />
                        <div className="eye" onClick={password}><i className="fa fa-eye" aria-hidden="true" id="eye"></i></div> 
                    </div>
                    <span className="error" style={{position:"absolute",top:"74%"}} ></span>
                    
                </div>

                    <div style={{marginLeft: "20px"}}>

                        <div className="input-field">
                        <i className="fa fa-user"></i>
                        <input type="text" name="LastName" id="Lastname"  placeholder="Last name" />
                        </div>
                        <span className="error" style={{position:"absolute",top:"20%"}} ></span>

                        <div className="input-field">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <input type="text" name="address" id="address"  placeholder="Address" />
                        </div>
                        <span className="error" style={{position:"absolute",top:"38%"}} ></span>

                        <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="email" name="U_email" id="email"  placeholder="Email" />
                        </div>
                        <span className="error" style={{position:"absolute",top:"56%"}} ></span>

                        <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="cpassword" id="cpassword"   placeholder="Confirm Password" />
                        <div className="eye" onClick={cpassword}><i className="fa fa-eye" aria-hidden="true" id="ceye" ></i></div> 
                        </div>
                        <span className="error" style={{position:"absolute",top:"74%"}} ></span>
                        
                    </div>

                </div>

                <div className="checkbox-form">
            <input type="Checkbox" required /><span style={{marginTop: "-5px;"}}> I agree to all <a href="">Teams</a> , <a href="">Privacy policy</a> and <a href="">Fees</a></span>.
            </div>

         
            
             <input type="submit"  id="submitreg"  className="btn" value="Create Account" />

            </form>

            <div className="left-contaner">
            <Link to="/"><div classNameName="logorg">
            <img src={logo} alt=""/>
            <h1><span classNameName="E">E</span>flip</h1>
           </div></Link>
            <div className="sing-in">
                <p>Already have an account?</p>
                <Link to="/Sign-in"> <button>LOG IN</button></Link>
            </div>

            <div className="reg-info">

                <p>1) Provide your <span style={{color: "#F77979;"}}> name</span>. Provide real <span style={{color: "#F77979;"}}> name</span> . 
                    Provide real <span style={{color: "#F77979;"}}>phone number</span>.   Provide real <span style={{color: "#F77979;"}}>Address</span>  .</p>
                   
                <p>2) Password must contain at least one number and one uppercase 
                      and lowercase letter, and at least 8 or more characters.</p>
            </div>

        </div>

        

    </div>


    {/* <div className="message" style="display: {{$confirm}};">
      <div className="icon">
        <i className="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <div className="title">
        <h3>Your Registertion is Successfully receive </h3>
      <p>User-Name: <span style="color: rgb(213, 43, 255); font-weight: 900;">{{$username}}</span> </p>
      </div>
      <div className="btnok">
        <a href="{{route('/signuppage')}}" style=" color: rgb(255, 255, 255);">Ok</a>
      </div>
      
     
    </div>   (confrim mess) */}


         



        </>
      );
    
}

export default Signup;
