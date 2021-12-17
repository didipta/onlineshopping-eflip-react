import React, {useState, useEffect} from "react";
import axios from "axios";
import Headadmin from "./header";


function Createproductadmin() {
  const [inputs, setInputs] = useState({
    P_id:"",P_name:"",P_price:"",P_categories:"",P_quantity:"",P_details:"",P_img1:"",P_img2:"",P_img3:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("http://127.0.0.1:8000/api/product/create",inputs)
    .then(resp=>{
        var infos = resp.data;
        console.log(infos);

    }).catch(err=>{
        console.log(err);
    });
  }

  return (
      <>
      <Headadmin/><br/>
    <form onSubmit={handleSubmit}>

      <div>
      <input type="text" name="P_id" value={inputs.P_id} placeholder="P_id" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_name" value={inputs.P_name} placeholder="P_name" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_price" value={inputs.P_price} placeholder="P_price" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_categories" value={inputs.P_categories} placeholder="P_categories" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_quantity" value={inputs.P_quantity} placeholder="P_quantity" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_details" value={inputs.P_details} placeholder="P_details" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_img1" value={inputs.P_img1} placeholder="P_img1" onChange={handleChange} />

      </div>

      <div>
      <input type="text" name="P_img2" value={inputs.P_img2} placeholder="P_img2" onChange={handleChange} />

      </div>

      <div>
      <input type="text" name="P_img3" value={inputs.P_img3} placeholder="P_img3" onChange={handleChange} />
      </div>

      <input type="submit" placeholder="Add product" />
       
    </form>
    </>
  )
}






export default Createproductadmin;