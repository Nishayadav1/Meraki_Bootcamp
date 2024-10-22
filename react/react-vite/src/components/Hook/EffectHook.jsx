import {  useState } from "react"
import PeopsEffect from "./PeopsEffect"
import { Button } from 'react-bootstrap';

// ------------------------by props pass---------------------------------

function EffectHook() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(100)
    
//    useEffect(()=>{
//      console.log("useEffect call with count")
//    })
  return (
    <div>
      {/* <h1> count = {count}</h1>
      <h1>Data = {data}</h1> */}
      <PeopsEffect count={count} data={data}/>
      <Button onClick={()=>setCount(count+1)}> click me count</Button>
      <Button onClick={()=>setData(data+1)}> click me data</Button>

    </div>
   
  )
}

export default EffectHook



// ---------------------------by state pass-----------------------------
// function EffectHook() {
//     const [value,setValue]=useState("useSate")
//     const [count,setCount]=useState(0)
    

//     useEffect(()=>{
//         // alert("useEffect")
//         console.log("useEffect")
//     },[value])
   
//   return (
//     <div>
//       <h1>useEffect hook {value}</h1>
//       <h2>{count}</h2>
//       <button onClick={()=>setValue("update use State")}>click me</button>
//       <button onClick={()=>setCount(count+1)}> click me</button>
//     </div>
//   )
// }

// export default EffectHook
