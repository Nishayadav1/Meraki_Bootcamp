import { Component } from "react";



class ShouldComponentUpdate extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    } 
    // componentDidUpdate(){
    //     console.log('nisha')
    // }
    shouldComponentUpdate(){
        console.log("should -component-update",this.state.count)
        return true
    }   
    render(){
            return(
                <div>
                <h1>------------ShouldComponentUpdate--------------------</h1>
                   <h1>should component update {this.state.count}</h1>
                   <button onClick={()=>this.setState({count:this.state.count+1})}> upate btn</button>
                </div>
            )
        }

    }


export default ShouldComponentUpdate 
