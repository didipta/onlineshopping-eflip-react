import React from "react";
function Size(props)
{
    if (props.issize=="Men Fashion" || props.issize=="Women Fashion" ) {

        return(
            <div class="item-size" style={{marginLeft: "10px"}}>
            <h2>Size</h2>
            <select name="item_size" id="item_size" required>
                <option value="" >--Select--</option>
                <option value="L" id="M" name="L">L</option>
                <option  value="M" >M</option>
                <option  value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="XXXL">XXXL</option>
            </select>
            
         </div>
        );
        
    }
    else
    {
        return (
      <input type="hidden" name="item_size" id="item_size" value="no size"/>
        );
    }
  
       
    
}
export default Size;