import { useEffect } from "react"

function PeopsEffect(props) {
    useEffect(()=>{
        console.log('alert("useEffect call with count")')
      },[props.count])
  return (
    <div>
      <h1> count : {props.count}</h1>
      <h1> Data  : {props.data}</h1>
      
    </div>
  )
}

export default PeopsEffect
