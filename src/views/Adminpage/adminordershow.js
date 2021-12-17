import React, {useState, useEffect} from "react";
import axios from "axios";
import Headadmin from "./header";

const OrderListadmin = ()=>{
    const [posts, setPosts] = useState([]);

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/order/list")
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
                    <th>Order ID: </th>
                    <th>User ID: </th>
                    <th>Username: </th>
                    <th>Total Price: </th>
                    <th>Paymanttype: </th>
                    <th>Order Status: </th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.O_id}</td>
                    <td >{post.user_id}</td>
                    <td >{post.U_username}</td>
                    <td >{post.P_tprice}</td>
                    <td >{post.Paymanttype}</td>
                    <td >{post.O_status}</td>
                </tr>
                    ))}
            </table> 
{/*             {
                posts.map(post=>(
                    <OrderPost id={post.id} O_id={post.O_id}  user_id={post.user_id}  U_username={post.U_username} P_tprice={post.P_tprice} Paymanttype={post.Paymanttype} O_status={post.O_status}  key={post.id}></OrderPost>


                ))
            } */}

                
        </div>
    )

}
export default OrderListadmin;