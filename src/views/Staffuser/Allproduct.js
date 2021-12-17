import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AllProducts = (props) =>{
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/allproducts")
        .then(resp=>{
           
        console.log(resp.data);      
        setProducts(resp.data);
        
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    const deleteProduct=(e,id)=>
    {
         e.preventDefault();
         const thisClicked=e.currentTarget;
         thisClicked.innerText="Deleting";
         axios.delete(`http://127.0.0.1:8000/api/deleteproduct/${id}`)
         .then(resp=>{
            console.log(resp.data);      
            setProducts(resp.data);
            thisClicked.closest("tr").remove();
            
             }).catch(err=>{
            console.log(err);
        });

         
    }
       
            
   
        
    return(
        
        <div class="header1ss">
            <h1>All Products</h1>
          <button><Link to="AddProduct">Add Product</Link></button> 
            <table class="tabless" border='1'>
              <thead>
                    <tr>
                        <th>Product id</th>
                        <th>Product name</th>
                        <th>Product price</th>
                        <th>Product category</th>
                        <th>Product quantity</th>
                        <th>Product details</th>
                        <th>Product image 1</th>
                        <th>Product image 2</th>
                        <th>Product image 3</th>
                    </tr>
                    </thead>
               
                    {
       
       products.map((p)=>{
           return(
               <tr key={p.id}>
                   <td>{p.P_id}</td>
                   <td>{p.P_name}</td>
                   <td>{p.P_price}</td>
                   <td>{p.P_categories}</td>
                   <td>{p.P_quantity}</td>
                   <td>{p.P_details}</td>
                   <td><img src={`img/${p.P_img1}`}/></td>
                   <td><img src={`img/${p.P_img2}`}></img></td>
                   <td><img src={`img/${p.P_img3}`}></img></td>
                   <td><a href={`/EditProduct/${p.id}`}>Edit</a></td>
                   <td><div class="buttonss" onClick={(e)=>deleteProduct(e,p.id)}>Delete</div></td>
               </tr>    

         );  } )

          
   }
        
        
   
        
   
            </table>
           
           
        </div>
    )
}
export default AllProducts;