import { useCallback, useState } from "react"
import HeaderCallbakHook from "../HeaderCallbakHook"


function CallBackHook() {
  const [count, setCount]=useState(0)

  const newFun =useCallback(()=>{},[])
  return (
    <div>
      <h1>---------calback hook-------------</h1>
      <HeaderCallbakHook newFun={newFun}/>
      <h2>{count}</h2>
      <button onClick={()=>setCount(pre=>pre+1)}>Cleck here</button>
    </div>
  )
}

export default CallBackHook
