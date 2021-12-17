import React, {useState, useEffect} from "react";
import axios from "axios";
import Headadmin from "./header";

const Userlistshow = ()=>{
    const [posts, setPosts] = useState([]);

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "30px",
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/user/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <Headadmin/><br/>
             <table>
                <tr>
                    <th>Name: </th> <b/>
                    <th>Phone: </th> <b/>
                    <th>Address: </th> <b/>
                    <th>Email: </th> <b/>
                    <th>Password: </th> <b/>
                    <th>Usertype: </th> <b/>
                    <th>Profileimg: </th> <b/>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.U_Name} </td> <b/> 
                    <td >{post.U_phone} </td> <b/>
                    <td >{post.U_address} </td> <b/>
                    <td >{post.U_email} </td> <b/>
                    <td >{post.U_password} </td> <b/>
                    <td >{post.Usertype} </td> <b/>
                    <td >{post.U_profileimg} </td> <b/>
                </tr>
                    ))}
            </table>

{/*             {
                posts.map(post=>(
                    <UserPost id={post.id}  U_name={post.U_Name}  U_phone={post.U_phone} U_address={post.U_address} U_username={post.U_username} U_email={post.U_email} U_password={post.U_password} Usertype={post.Usertype} U_profileimg={post.U_profileimg}   key={post.id}></UserPost>


                ))
            } */}

                
        </div>
    )

}
export default Userlistshow;