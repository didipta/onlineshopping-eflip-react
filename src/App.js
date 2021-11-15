import {Routes, Route } from "react-router-dom";
import Start from './views/Start';
import React from 'react';
import Signin from "./views/Sign-in-up/Signin";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Start/>} />
    <Route path="/Sign-in" element={<Signin/>} />
   </Routes>
    
  );
}

export default App;
