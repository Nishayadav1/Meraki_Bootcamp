import React from "react"
function User(){
   // ----------with jsx
   // return(
   // <>
   //  <h1>hello user</h1>
   //  <p>{3+5}</p>
   //  </>
   // );

   // ---------without jsx
   return React.createElement("h1",null,"user component", React.createElement("span",null,"this is my span"),
   React.createElement("span",null,"this is -----second---- my span"))
   //here , null means no props are passed to the element

}
export default User //function components

// import { Component } from "react";

// class component
// import React, {Component} from 'react';
// export default class User extends Component{
//   render(){
//    return(
//       <h1>hello class componwnt</h1>
//    )
//   }
// }