import {  Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
      </nav>
     <Routes>
      <Route path="/"  Component={Home}/>
      <Route path="/About"  Component={About}/>
     </Routes>

  
    </div>
  );
}

export default App;
