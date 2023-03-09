import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/About"} element={<About/>}/>
        <Route path={"/Menu"} element={<Menu/>}/>
        <Route path={"/Contact"} element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
