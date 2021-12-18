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
import StaffHead from "./views/Staffuser/staffhome";
import AllProducts from "./views/Staffuser/Allproduct";
import AddProduct from "./views/Staffuser/Addproduct";
import EditProduct from "./views/Staffuser/Editproduct";
import OrderDetails from "./views/Staffuser/allordershow";
import AdminHome from "./views/Adminpage/adminhome";
import Userlistshow from "./views/Adminpage/Showallusers";
import Createuseralls from "./views/Adminpage/addemployes";
import AllPostsalls from "./views/Adminpage/orderdetails";
import ProductListalls from "./views/Adminpage/adminproductlist";
import Createproductadmin from "./views/Adminpage/Addproductadmin";
import OrderListadmin from "./views/Adminpage/adminordershow";
import DelivaryHome from "./views/Delivaryman/Delivarhome";
import DeliOrderlist from "./views/Delivaryman/deliorder";
import DeliEditorder from "./views/Delivaryman/delieditorder";
import DeliOrderdetailslist from "./views/Delivaryman/deliordershow";
import DeliProductList from "./views/Delivaryman/deliproduct";

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
  <Route exact path="/financial"><Finanicial/></Route>
  {/* //.................Staff All routes......................................// */}
  <Route exact path="/fStaffhome"><StaffHead/></Route>
  <Route exact path="/AllProducts"><AllProducts/></Route>
  <Route exact path="/AddProduct"><AddProduct/></Route>
  <Route exact path="/EditProduct/:editid"><EditProduct/></Route>
  <Route exact path="/OrderDetails"><OrderDetails/></Route>

  {/* //...................Admin All Routers....................................// */}

  <Route exact path="/AdminHome"><AdminHome/></Route>
  <Route exact path="/Userlistshow"><Userlistshow/></Route>
  <Route exact path="/Createuseralls"><Createuseralls/></Route>
  <Route exact path="/AllPostsalls"><AllPostsalls/></Route>
  <Route exact path="/ProductListalls"><ProductListalls/></Route>
  <Route exact path="/Createproductadmin"><Createproductadmin/></Route>
  <Route exact path="/OrderListadmin"><OrderListadmin/></Route>

  {/* //...................Delivaryman All Routers....................................// */}

  <Route exact path="/delivaryHome"><DelivaryHome/></Route>
  <Route exact path="/DeliOrderlist"><DeliOrderlist/></Route>
  <Route exact path="/DeliEditorder/:id"><DeliEditorder/></Route>
  <Route exact path="/DeliOrderdetailslist"><DeliOrderdetailslist/></Route>
  <Route exact path="/DeliProductList"><DeliProductList/></Route>

  </Switch>
  </Router>
    
  );
}

export default App;
