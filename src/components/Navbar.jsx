import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Element from "./Element";
import "../components/css/Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const Navbar=()=>{
  const [name,setName]=useState("");
  const [color,setColor]=useState("");

  function onClick(event){
    console.log("clicked");
    console.log(event.target.name);
    const nme=event.target.name;
    setName(nme);
  }


    return(
        <>
            <Router>
            <nav className="navbar1">
            <div className="container-fluid1">
              <div>
                <a className="navbar-brand1" href="/">DOMINGO</a>
              </div>  
              <div className="collapse1" id="navbarSupportedContent">
                <ul className="navbar-nav1">
                  <li className="nav-ite">
                    <a className="nav-lin" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-ite2">
                    <a className="nav-lin" href="/registerRes">Register</a>
                  </li>
                  <li className="nav-ite3">
                    <a className="nav-lin" href="/explore">Explore</a>
                  </li>
                </ul>
                <form className="d-flex1" role="search">
                  <input className="form-control1" type="search"  placeholder="Search" aria-label="Search"/>
                  <Button  className="btn1" style={{background:"none",boxShadow:"none"}} type="submit">
                  <SearchIcon/>
                  </Button>
                </form>
              </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home onClicking={onClick} />}/>
            <Route exact path="/hotels" element={<Element name={name} key={name}/>}/>
            <Route exact path="/registerRes" element={<Register/>}/>
          </Routes>
          </Router>
        </>
    );
};

export default Navbar;