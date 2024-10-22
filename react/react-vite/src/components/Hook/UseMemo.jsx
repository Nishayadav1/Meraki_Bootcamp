import { useState, useMemo } from "react"

function UseMemo() {
    const[Number, setNumber]=useState(0)
    const[Counter, setCounder]=useState(0)

    function cubeNum(num){
        console.log('calculation done')
        return Math.pow(num,3)
    }
    // const result=cubeNum(Number)

    const result=useMemo(()=>cubeNum(Number),[Number])

  return (
    <div>
      <h1>-------------------useMemo Hook------------------------------</h1>
      <input type="number" value={Number} onChange={(e)=>{setNumber(e.target.value)}} />
        <h1>cube od the number: {result}</h1>
        <button onClick={()=>{setCounder(Counter+1)}}>Counter ++</button>
        <h1>Counter: :{Counter}</h1>
      </div>
  )
}

export default UseMemo
