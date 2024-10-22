import React from 'react'
import { useContext } from 'react'
import { nameContext } from './ComA'



function Comc() {
    let myname=useContext(nameContext)
  return (
    <div>
      <h1>hello i am context</h1>
      <h1>{myname}</h1>
    </div>
  )
}

export default Comc
