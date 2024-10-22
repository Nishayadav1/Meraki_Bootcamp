import { Component } from 'react'

export default class Unmount2 extends Component {
  componentWillUnmount(){
    console.log("component will update method call")
  }
  render() {
    return (
      <div>
      <h2>-----------------UnMount components---------------------</h2>
        <h1>component will unmount2 child component</h1>
      </div>
    )
  }
}
