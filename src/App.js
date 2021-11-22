
import Start from './views/Start';
import React from 'react';
import Signin from "./views/Sign-in-up/Signin";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from './views/Sign-in-up/Signup';
import Home from './views/Userpage/Home';
function App() {
  return (
    <Router>
    <Switch>
  <Route exact path="/"><Start/></Route>
  <Route exact path="/Sign-in"><Signin/></Route>
  <Route exact path="/Sign-up"><Signup/></Route>
  <Route exact path="/home"><Home/></Route>
  </Switch>
  </Router>
    
  );
}

export default App;
