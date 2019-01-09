import React, { Component } from "react"
import { render } from "react-dom"
import { Header } from "./components/Header.jsx"

class App extends Component {
    constructor() {
        super()

        this.state = {
            title : "Hello ReactJS with Webpack •⭐🌟"
        }
    }

    render() {
        return (
            <Header title={this.state.title} />
        )
    }
}

render(<App />, document.getElementById("app"))