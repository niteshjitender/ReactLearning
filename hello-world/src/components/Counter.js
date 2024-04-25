import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        //This will change the value of count but not update the UI, UI is not being rendered by this
        //Only constructor can change the value directly else we have to use setState Method
        // this.state.count += 1
        // console.log(this.state.count)

        // this.setState({
        //         count: this.state.count + 1
        //     }, () => {
        //         console.log('Callback value', this.state.count)
        //     }
        // )
        //Console.log() is asynchronous so that it will print previous value before even changing
        // console.log(this.state.count)
        //To resolve this issue, we can use callback function in the setState method

        //Multiple call to setState issue resolution passing function
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        },
            () => console.log(this.state.count)
        )
    }


    //Here when we call it the value will be 1, because react will group multiple state change call in single go to increase the performance, if 
    //want to update the state on the basis of previous state then we have to pass function instead of object in setState method
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClickCapture={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter