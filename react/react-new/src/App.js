import React from 'react'
import './App.css'
import Header from './components/Header';
import Props from './components/Props';
import Home from './components/Home';
import Arrowfn from './components/Arrowfn';
import Hook from './components/Hook';
import HookEffect1 from './components/HookEffect1';
import HookContext from './components/HookContext';
let a="ni"
const App = () => {
  return (
    <>
    <Home/>
    <Header />
    <Props name="nisha"/>
    <Props age={a}/>
    <div>
    <h1>nisha</h1>
    <h1>jahaka</h1>
    <h2>{2+4}</h2>
    <h3>{a}</h3>
    </div>
    <Arrowfn/>
    <Hook/>
    <HookEffect1/>
    <HookContext/>
    </>
  )
}


export default App

// <--------useeffect start--->
// import React, { useState } from 'react'
// import { useEffect } from 'react'
// function App() {
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     console.log("useeffect") })
//   return (
//     <div>
//       <h1>useeffect in react {count}</h1>
//       <button onClick={()=>setCount(count+1)}>update counter</button>
//     </div>
//   )
// }

// export default App
// <--------useeffect end--->


// <-------- useState------->start
// import React, { useState } from 'react';
// function App() {
//   const [int, setfun] = useState('useSate(nisha)');
//   const [num,setnumf]=useState(0)
//   const [imgsrc,setimg]=useState('/home/nisha/Desktop/Meraki_Bootcap/react/react-new/item-2.jpeg')
//   function changeSate() {
//     setfun('changeSate(kajal)');
//     setnumf(num+1)
//     setimg('/home/nisha/Desktop/Meraki_Bootcap/react/react-new/item-3.jpeg')
//   }

//   return (
//     <>
//     <div>
//       <h1>{int}</h1>
//       <h2>{num}</h2>
//       <img src={imgsrc} alt='loding...'></img>
//       <button onClick={changeSate}>click me</button>
//     </div>

    
//     </>
//   );
// }

// export default App;

  // <-------- useState------->end code

// Hook ----use state hook --value change
// version-16.8
//--->hook is aspecial function that lets you "hook into" react features"
// when will we change state and daynamic content that time use hook 


// <------------------useReducer hook------------>start
