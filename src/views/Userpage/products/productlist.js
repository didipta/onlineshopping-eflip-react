import React from "react";
import { Link } from "react-router-dom";
function Productlist(props) {
    var id=props.id;
    var img="/img/"+props.P_img1;
   return(
  <>
        
        <a href={"/addtocarttwo/"+id}>
        <div className="items">
            <img src={img}/>
            <h3>{props.Pname}</h3>
            <h4>id-{props.Pid}</h4>
            <h4>Only-{props.P_price}Tk/-</h4>
            </div>
        </a>

    
  </>
   );
    
}

export default Productlist;