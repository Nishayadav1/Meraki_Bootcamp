import { useState } from "react"

function StateHook() {
    const[count,setcount]=useState(0)
  return (
    <div>
      <h1>useState hook {count}</h1>
      <button onClick={()=>setcount(count+1)}>add+1</button>
    </div>
  )
}

export default StateHook
