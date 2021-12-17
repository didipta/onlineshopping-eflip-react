import React, {useState, useEffect} from "react";
import axios from "axios";
import Headadmin from "./header";


const ProductListalls = ()=>{
    const[posts, setProducts] = useState([]);

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/product/list")
        .then(resp=>{
        console.log(resp.data);
        setProducts(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    return(
        <div>
            <Headadmin/><br/>
             <table>
                <tr>
                    <th>Product ID: </th>
                    <th>Product Name: </th>
                    <th>Product Price: </th>
                    <th>Product categories: </th>
                    <th>Product quantity:</th>
                    <th>Product Details: </th>
                    <th>Product Image1: </th>
                    <th>Product Image2:</th>
                    <th>Product Image3:</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.P_id} </td>
                    <td >{post.P_name}</td>
                    <td >{post.P_price}</td>
                    <td >{post.P_categories}</td>
                    <td >{post.P_quantity}</td>
                    <td >{post.P_details}</td>
                    <td >{post.P_img1}</td>
                    <td >{post.P_img2}</td>
                    <td >{post.P_img3}</td>
                </tr>
                    ))}
            </table> 

{/*             {
                posts.map(post=>(
                    <ProductPost id={post.id} P_id={post.P_id}  P_name={post.P_name}  P_price={post.P_price} P_categories={post.P_categories} P_quantity={post.P_quantity} P_details={post.P_details} P_img1={post.P_img1} P_img2={post.P_img2} P_img3={post.P_img3}   key={post.id}></ProductPost>


                ))
            } */}

                
        </div>
    )

}
export default ProductListalls;