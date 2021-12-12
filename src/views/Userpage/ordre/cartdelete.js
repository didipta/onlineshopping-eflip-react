import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function Cartdelete()
{
    var {deletid} =useParams();
    const history= useHistory();
    let url="http://127.0.0.1:8000/api/cartiteamdelet/"+deletid;
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
            history.push("/paymant");
           
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <></>
    )

}
export default Cartdelete;