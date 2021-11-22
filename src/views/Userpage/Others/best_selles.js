import React from "react";
function Bestselles(props) {
  var img=props.img;
   return(
  <>
 
        <div className="best-item">
            <img src={img} alt=""/>
            <h3>{props.name} </h3>
            <p>{props.id}</p>
            <h2>{props.price}</h2>
        </div>
    
  </>
   );
    
}

export default Bestselles;
