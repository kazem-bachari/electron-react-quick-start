import {  Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


import { useEffect } from "react";
import Grids from "./pages/Test";

function App() {
  useEffect(()=>{
   
  },[])
  return (
    <div className="">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Grids"}>Grids</Link>
      </nav>
     <Routes>
      <Route path="/"  Component={Home}/>
      <Route path="/About"  Component={About}/>
      <Route path="/Grids"  Component={Grids}/>
     </Routes>

  
    </div>
  );
}

export default App;
