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
import Payments from "./views/Userpage/ordre/payment";
import Cartdelete from "./views/Userpage/ordre/cartdelete";
import Finanicial from "./views/Userpage/Others/Finanicial";
function App() {


  return (
    <Router>
    <Switch>
  {/* // All users Sign-in Page........// */}
  <Route exact path="/"><Start/></Route>
  <Route exact path="/Sign-in"><Signin/></Route>
  <Route exact path="/Sign-up"><Signup/></Route>
  {/* //................User all routes ......................// */}
  <Route exact path="/home"><Home/></Route>
  <Route exact path="/productlist/:categories"><Productaxio/> </Route>
  <Route exact path="/addtocarttwo/:productid"><Addtocartaxioxs/></Route>
  <Route exact path="/Profile"><Userprofileaxois/></Route>
  <Route exact path="/myorder"><Myorder/></Route>
  <Route exact path="/paymant"><Payments/></Route>
  <Route exact path="/Showallodersdetails/:orderid"><Myoderdetails/></Route>
  <Route exact path="/cartiteamdelet/:deletid"><Cartdelete/></Route>
  <Router exact path="/financial"><Finanicial/></Router>
  {/* //.......................................................// */}
  </Switch>
  </Router>
    
  );
}

export default App;
