import React from "react";
import { Component } from "react";

class Welcome extends Component {
    //Destructing props
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state //For the state
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome