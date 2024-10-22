import React from 'react'
import { useState } from 'react'
function Hook() {
  let [inital,changestate]=useState(0)

  function  add(){
    if (inital<20)
       changestate(inital+1)
  }

  let revome=(()=>{
    if (inital>0)
      changestate(inital-1)
  })
  return (
    <div>
      <h1>counter -use use state</h1>
      <h2>counter value: {inital}</h2>
      <button onClick={add}>add vaule</button><br />
      <button onClick={revome}>remove value</button>
    </div>
  )
}

export default Hook
