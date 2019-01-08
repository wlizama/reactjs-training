import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
    constructor() {
        super()

        this.state = {
            title : "Hello ReactJS with Webpack ⭐🌟"
        }
    }

    render() {
        return (
            <h1>{this.state.title}</h1>
        )
    }
}

render(<App/>, document.getElementById("app"))