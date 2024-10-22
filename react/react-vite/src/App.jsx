// with class component
// import { useState } from 'react'
import './App.css'
// import LifeCyle from './components/LifeCyle'
// import ComDidUpdate from './components/ComDidUpdate'
// import ShouldComponentUpdate from './components/ShouldComponentUpdate'
// import ComponentWillUnmount from './components/ComponentWillUnmount'

// import StateHook from './components/Hook/StateHook'
// import EffectHook from './components/Hook/EffectHook'
// import UseRefHook from './components/Hook/UseRefHook'
// import UseMemo from './components/Hook/UseMemo'
// import CallBackHook from './components/Hook/CallBackHook'
// import UseContextHook from './components/Hook/UseContextHook'
import UseReducer from './components/Hook/UseReducer'



// function change(){
//   setName('ajay')
// }
function App() {
  // const[name,setName]=useState('kajal')
  return (
    <>
     {/* <LifeCyle namen={name}/>
     <button onClick={()=>setName('ajay')}>change name</button> */}

    {/* <ComDidUpdate/> */}

    {/* <ShouldComponentUpdate/> */}

    {/* -------------- statet componet will unmount----------------- */}
    {/* <ComponentWillUnmount/> */}


    {/* {-------------hooks-------------} */}
    {/* useState hook */}

    {/* <StateHook/> */}
    {/* <EffectHook/> */}
    {/* bootstrap */}

    {/* <UseRefHook/> */}
    {/* <UseMemo/> */}

    {/* <CallBackHook/> */}

{/* --------------------hold-------------------------- */}
    {/* <UseContextHook/> */}

    <UseReducer/>


    



    </>
  )
}

export default App
 