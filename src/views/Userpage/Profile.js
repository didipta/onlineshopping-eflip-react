import React, { useEffect } from "react";
import { useState } from "react";
import {files} from "react";
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from "axios";
const Userprofileinfo = ( props)=>{
    
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
        //image block or none
        function myFunction() {
            document.getElementById("profileimg").style. display = "block";
          }
          function myFunction2() {
            document.getElementById("profileimg").style. display = "none";
          }

          var img="/img/"+props.Systemuser.U_profileimg;
          ///file handle
          const [file,setfile]=useState("")
          function handlefile(file)
          {
              setfile(URL.createObjectURL(file.target.files[0]))
          }


        //image
        
        //Handlechange//
        const [inputs, setInputs] = useState({
           id:"", name:"",address:"",U_email:"",U_phone:"",U_username:"",password:""
        });

        useEffect(()=>{
            setInputs(values => ({...values,id:props.Systemuser.id, name: props.Systemuser.U_Name,address:props.Systemuser.U_address,
                U_email:props.Systemuser.U_email,U_username:props.Systemuser.U_username,
                U_phone:props.Systemuser.U_phone,password:props.Systemuser.U_password
            
            
            }))
        },[props.Systemuser]);

        //Pasword Handlechange//
        const [inputpassword, setInputspassword] = useState({
        newpassword:"",thispassword:""
        });
        //profile handlechage
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
            setInputspassword(values => ({...values, [name]: value}))
          }
            ////Profile update 
          const handleSubmit = (event) => {
            event.preventDefault();
                axios.post("http://127.0.0.1:8000/api/profileEdite",inputs)
                .then(resp=>{
                    var userinfos = resp.data;
                    console.log(userinfos);
                    alert("Thank You,Your profile is Update")
                }).catch(err=>{
                    console.log(err);
                });
          }
                  ////Password change 
                  const handleSubmitpass = (event) => {
                    event.preventDefault();
                    if(inputs.password==inputpassword.thispassword)
                    {
                        axios.post("http://127.0.0.1:8000/api/Changepassword",inputs)
                        .then(resp=>{
                            var userinfos = resp.data;
                            console.log(userinfos);
                            alert("Thank You password is chnage")
                            localStorage.removeItem('usernames');
                            window.location="/Sign-in";
                        }).catch(err=>{
                            console.log(err);
                        });
                    }
                    else
                    {
                        alert("password not change")
                    }
                  }
     
         
          document.getElementById("title").innerHTML="Eflip | "+ props.Systemuser.U_username;

    return(
        <>
<div class="profile">
<div class="top-head">
    <p style={{ marginLeft:"20px"}}> <a href="/home">Home </a>/ <a href="#" style={{color:"black"}}>Profile</a> </p>
</div>

    <section id="profile-info">
              
          <div class="img">

            <img src={img} alt="" />

            <label class="Add-file" onClick={myFunction}><i class="fa fa-camera" aria-hidden="true"></i></label>
        </div>
       
        <form onSubmit={handleSubmit} method="Post" class="profile-form">
        
        <input type="hidden" name="id"  value={inputs.id}/>
            <fieldset>
                <legend><p>Username</p></legend> 
                <div class="input-file">
                    <input type="text"   name="name"  value={inputs.name} placeholder="username" onChange={handleChange} /><br/>
                </div>
                
            </fieldset>
          
            <fieldset>
                <legend><p>Address</p></legend> 
                <div class="input-file">
                    <input type="text" value={inputs.address} name="address" placeholder="Address" onChange={handleChange}/><br/>
                </div>
                
            </fieldset>
           
                
            <fieldset>
                <legend><p>Email</p></legend> 
                <div class="input-file">
                    <input type="text" id="U_email" value={inputs.U_email} name="U_email" placeholder="Email" /><br/>
                </div>
                
            </fieldset>

            <fieldset>
                <legend><p>User Name</p></legend> 
                <div class="input-file">
                    <input type="text" id="U_username" value={inputs.U_username} name="U_username" placeholder="User Id" readonly /><br/>
                </div>
                
            </fieldset>

            <fieldset>
                <legend><p>Phone Number</p></legend> 
                <div class="input-file">
                    <input type="text" id="U_phone" value={inputs.U_phone} name="U_phone" placeholder="Phone Number"  readonly /><br/>
                </div>
               
            </fieldset>
            <input type="submit" name="submit" value="Save" class="btn" />
        
           
        </form>

    </section>
    <section id="Change-password">
        <div class="head">
            <h1>
                PASSWORD
            </h1>
        </div>
        <form onSubmit={handleSubmitpass} method="Post" class="Changepassword">
        <input type="hidden" name="id"  value="{{$Systemuser->id}}"/>
           
                <div class="input-file-cp" >
                    <input type="password"  id="password" value={inputpassword.thispassword} onChange={handleChange}  name="thispassword" placeholder="Current password"/><br/>
                    <div class="eye eyes" onClick={password} style={{ position:"absolute" ,left:"20vw",top:"7.5vw" ,cursor:"pointer"}}  id="eye"><i class="fa fa-eye" aria-hidden="true" ></i></div> 
                </div>
               
          
                <div class="input-file-cp">
                    <input type="password"  id="cpassword" value={inputpassword.newpassword} onChange={handleChange} name="newpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="New password" />
              <div class="eye eyes" onClick={cpassword} style={{position:"absolute",left:"20vw",top:"12vw",cursor: "pointer"}} id="ceye"><i class="fa fa-eye" aria-hidden="true" ></i></div> 
                </div>
                <button class="btn">
                    Save </button>
               
         <p>  </p>

        </form>



       
    </section>
    <div id="profileimg">
       <div onClick={myFunction2}> <i class="fa fa-times" aria-hidden="true" ></i></div>

        <form action="{{route('/profileimg')}}" method="Post" class="profile-form" enctype="multipart/form-data">
            <input type="hidden" name="id"  value="{{$Systemuser->id}}"/>
            <div class="img">
  
              <img src={file||img} alt="" id="blah"/>
  
              <label for="imgfile" class="Add-file"><i type="file" class="fa fa-plus" aria-hidden="true"></i></label>
              <div class="file-style"> <input type="file" name="imgfile" id="imgfile" onChange={handlefile}/></div>
              <br/> <button class="btn">Save </button>
          </div>
       </form>

    </div>

        </div>
        </>

    );

}
export default Userprofileinfo;

