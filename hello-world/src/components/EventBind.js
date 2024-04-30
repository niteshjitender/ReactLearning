import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     //This keyword will be undefined you have to go through the concept of javascript for this, to overcome this problem, we have to do event binding in the react(eg.-this.clickHandler.bind(this))
    //     console.log(this)
    // }

    clickHandler = () =>{
        this.setState({
            message: "Goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding in the render method, performance issue: Every update to state will cause to rerender the component */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Binding using arrow function in the render method, performance issue: */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Binding in the constructor or using arrow function, most efficient  */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind