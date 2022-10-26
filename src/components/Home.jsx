import React,{useState} from "react";
import "./css/Home.scss";
import Hotels from "./hotels.js";
import Logo from "./Logo";
import Element from "./Element";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Carousel from "./Carousel";
import Hotel from "./Hotel.jsx";
import Grid from '@mui/material/Grid';

const Home=(props)=>{
  const [value,setValue]=useState("");

  function triggered(num){
    if(num==0){
      setValue("#4958D8");
    }
    else{
      setValue("#FFB793");
    }
    console.log(value);
  }

    return(
    <>
      <Carousel onRefer={triggered} />
      <div className="aboutUs">
      <div className="spacer layer1"></div>
      <section className="page-contain">
      <div className="AboutUs">ABOUT US</div>
          <a href="#" className="data-card">
            <h3>270</h3>
            <h4>Care Facilities</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
            <span className="link-text">
              View All Providers
              <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/></svg>
            </span>
          </a>
          <a href="#" className="data-card">
            <h3>12,000</h3>
            <h4>Employees</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <span className="link-text">
              View Information
              <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/></svg>
            </span>
          </a>
          <a href="#" className="data-card">
            <h3>14,000+</h3>
            <h4>Restaurants</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <span className="link-text">
              View Information
              <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/></svg>
            </span>
          </a>
      </section>
      </div>
      <div className="spacer1 layer2"></div>
      <div className="container1">
      <div className="logoPane">
            <div className="block">
              <div className="visit">VISIT NOW</div>
            </div>
            <div className="mapping">
            
            {Hotels.map((hotel,index)=>{
              return(
                <Logo name={hotel.hotel} hotel={hotel} key={hotel.key} onClicking={props.onClicking}/>
              );
            })}
            </div>
        </div>
      </div>
    </>
 )  
}

export default Home;

