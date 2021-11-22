import React from "react";
function Fashioncollection(props) {
  var img=props.img;
   return(
  <>
 
     <div className="collection-f">
            <div className="c-pic">
            <img src={img} alt=""/>
            </div>
            
            <p><b>{props.type}</b></p>
  
           <h2>{props.title}</h2>
   
           <a href="#"><button type="button"><b>VIEW MORE</b></button></a>
           

         </div>
    
  </>
   );
    
}

export default Fashioncollection;