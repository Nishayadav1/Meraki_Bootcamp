//class component
// reder method use
 import  { Component } from 'react'
 import Render from './Render';

export default class LifeCyle extends Component {
    constructor()
    {
        super();
        {
        //   console.log("concustore")
        this.state={
            name:"nisha",
            age:21
        }
        }
        
    }
  render() {
    console.log("render start", this.props)
    console.log(this.state.name)
    return (
        <>    
        <h1>---------------LIfe Cycle------------------------</h1>      
        <h1>hello {this.state.name}</h1>
        <h2>my age is {this.state.age}</h2>
        <Render/>
        </>

    )
  }
}
