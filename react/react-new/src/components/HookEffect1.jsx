import React from 'react'
import { useState, useEffect} from 'react'
function HookEffect1() {
  let [incount,changecount]=useState(0)
  function add(){
    changecount(incount+1)
  }


  useEffect(()=>{
    console.log("hello I am effect=",incount)
  })
  return (
    <div>
      <h1>useState={incount}</h1>
      <button onClick={add}>click me</button>
    </div>
  )
}

export default HookEffect1
