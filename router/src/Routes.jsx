import React from "react";
import {Route, Routes } from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
const RoutesXYZ =()=>{
    return(
        <div>
      <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
        </div>
    )
}
export default RoutesXYZ;