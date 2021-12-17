import React, {useState, useEffect} from "react";
import axios from "axios";
import Headadmin from "./header";


function Createuseralls() {
  const [inputs, setInputs] = useState({
    Name:"",Phone:"",Address:"",Username:"",Email:"",Password:"",Usertype:"admin",Profileimg:"default.jpg"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("user/create",inputs)
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
      <span>Name:</span> <b/>
      <input type="text" name="Name" value={inputs.Name} placeholder="Name" onChange={handleChange} />

      </div>
      <div>
      <span>Phone Number:</span> <b/>
      <input type="text" name="Phone" value={inputs.Phone} placeholder="Phone" onChange={handleChange} />

      </div>
      <div>
      <span>Address:</span> <b/>
      <input type="text" name="Address" value={inputs.Address} placeholder="Address" onChange={handleChange} />

      </div>
      <div>
      <span>Username:</span> <b/>
      <input type="text" name="Username" value={inputs.Username} placeholder="Username" onChange={handleChange} />

      </div>
      <div>
      <span>Email:</span> <b/>
      <input type="text" name="Email" value={inputs.Email} placeholder="Email" onChange={handleChange} />

      </div>
      <div>
      <span>Password:</span> <b/> 
      <input type="password" name="Password" value={inputs.Password} placeholder="Password" onChange={handleChange} />

      </div>
      <div>

      <span>Usertype</span> <b/>
          <select name="Usertype" onChange={handleChange} value={inputs.Usertype}>
          <option value="" disable="true" selected="true" >Select</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
          <option value="Customer">Customer</option>
          <option value="Delivery Man">Delivery Man</option>  
               
</select>
      </div>

      <div>
      <span>Profile image:</span> <b/>
      <input type="text" name="Profileimg" value={inputs.Profileimg} placeholder="Profileimg" onChange={handleChange} />

      </div>






        <input type="submit" />
    </form>
    </>
  )
}






export default Createuseralls;