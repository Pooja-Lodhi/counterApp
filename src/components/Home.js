import React from "react";
import Navbar from "./nav";
import Body from "./content";
import Footer from "./footer";

function Home(props){
    return(
        <>
      <Navbar/>
      <Body Car={props.Car.model}/>
      <Footer/>
      <h1>this is {props.Car.model}</h1>
      <h1>this is {props.bike2[3]}</h1>
      {/* <h1>this is {props.div}</h1> */}
        </>
      );
}
export default Home;