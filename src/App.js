import React, {useState, useEffect} from "react";
import Start from './views/Start';
import Signin from "./views/Sign-in-up/Signin";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from './views/Sign-in-up/Signup';
import Home from './views/Userpage/Home';
import Productaxio from './views/Userpage/products/productaxio';
import Addtocartaxioxs from './views/Userpage/products/addtocartaxios';
import Userprofileaxois from './views/Userpage/profileaxios';
import axios from "axios";
import Myorder from "./views/Userpage/ordre/myorder";
import Myoderdetails from "./views/Userpage/ordre/myoderdetails";
function App() {


  return (
    <Router>
    <Switch>
  <Route exact path="/"><Start/></Route>
  <Route exact path="/Sign-in"><Signin/></Route>
  <Route exact path="/Sign-up"><Signup/></Route>
  <Route exact path="/home"><Home/></Route>
  <Route exact path="/productlist/:categories"><Productaxio/> </Route>
  <Route exact path="/addtocarttwo/:productid"><Addtocartaxioxs/></Route>
  <Route exact path="/Profile"><Userprofileaxois/></Route>
  <Route exact path="/myorder"><Myorder/></Route>
  <Route exact path="/Showallodersdetails/:orderid"><Myoderdetails/></Route>
  </Switch>
  </Router>
    
  );
}

export default App;
