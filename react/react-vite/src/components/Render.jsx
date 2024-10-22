import { Component } from 'react'

export default class Render extends Component {
  render() {
    console.warn("render methods")
    return (
      <div>
      <h2>-----render-------</h2>
        <h1>user component or render</h1>
      </div>
    )
  }
}
