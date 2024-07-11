// Hook ----use state hook --value change
// version-16.8
//--->hook is aspecial function that lets you "hook into" react features"
// when will we change state and daynamic content that time use hook 
import React,{useState} from 'react'




function Hook() {
    const [initalval, setNamefunction]=useState('nisha yadav')
  const changeContent=()=>{
    setNamefunction('kajal');
  }
  return (
    <div>
      <h1>{ initalval }</h1>
      <button className='btn' onClick={changeContent}>click me Please</button>
    </div>
  )
}

export default Hook
