import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeliHead from "./deliheader";

const DeliOrderlist = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/myorder/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <DeliHead/><br/>
            { <table className="tabless" >
                <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>ProductTotalPrice</th>
                    <th>Payment Type</th>
                    <th>Order Status</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.O_id}</td>
                    <td >{post.user_id}</td>
                    <td >{post.U_username}</td>
                    <td >      {post.P_tprice}</td>
                    <td >{post.Paymanttype}</td>
                    <td >{post.O_status}</td>
                    <td><Link to={`/DeliEditorder/${post.id}`}>Change Status</Link></td>
                </tr>
                    ))}
            </table> }
          

                
        </div>
    )

}
export default DeliOrderlist;