import { Component } from 'react'
import Unmount2 from './Unmount2'

export default class ComponentWillUnmount extends Component {
    constructor(){
        super()
        this.state={
            show:true
        }
    }
  render() {
    return (
      <div>
      <h1>-------------------ComponentWillMount-------------------</h1>
        {
           this.state.show?<Unmount2/>:<h1>child component unshow and remove:</h1>
        }
        <button onClick={()=>this.setState({show:!this.state.show})}>toggle child component</button>
      </div>
    )
  }
}
