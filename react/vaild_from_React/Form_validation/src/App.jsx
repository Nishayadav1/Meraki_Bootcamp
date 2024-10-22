import { useState } from 'react'
import './App.css'

function App() {
  const init={
    username:"",
    email:"",
    password:"",
  }
  const [value,setvalue]=useState(init)
  const handleChange=(e)=>{
    console.log(e.target);
    let {name,value}=e.target;
    setvalue({...value, name:value})
    console.log(value)
  }
  return (
    <>
    <form>
      <h1>From validation</h1>
      <input type="text" required placeholder='name' value={value.username} onChange={handleChange}/><br />
      <input type="email" required placeholder='email'value={value.email} onChange={handleChange}/><br />
      <input type="password" required placeholder='password'value={value.password} onChange={handleChange}/><br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
