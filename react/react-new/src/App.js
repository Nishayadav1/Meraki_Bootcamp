// import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';
import Home from "./components/Home";
import User from "./components/User";




function App() {
  const [name,setName]=useState("Nisha")
  const [num,setNum]=useState(0)
  // let name="nisha";

  function button(){
    // name="kajal"
    // console.log("my name is ",name);

    setName("kajal");
    console.log("hgfuieicuifgei")
    setNum(num+1)

    // return(
    //   // console.log("this is a button")
    //   alert("butoon function")
    // )
  }
  return (
    <>
    <Home/>
    <User/>
    <ul>
      <li>apple</li>
      <li>banana</li>
      <li>orange</li>
    </ul>



    {/* <button onClick={button}> Click</button> */}
   {/* second way with funtion prenthisis by arrow function */}
    {/* <button onClick={()=>button()}> Click1</button>  */}

    {/* third way by direct console */}
    {/* <button onClick={()=>console.log("I am nisha")}> Click2</button> */}
    
    
    <h1>{name}</h1>
    <h1>{num}</h1>
    <button onClick={button}> Click</button>
    </>
  );
}

export default App;
