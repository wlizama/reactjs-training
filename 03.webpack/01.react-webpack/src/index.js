import React, { Component } from "react"
import { render } from "react-dom"
// import "./styles/styles.scss"
import { Header } from "./components/Header.jsx"
import { Content } from "./components/Content.jsx"

class App extends Component {
    constructor() {
        super()

        this.state = {
            title : "Hello ReactJS with Webpack •⭐🌟",
            posts: [
                { id: 1, text: "Deserunt veniam Lorem incididunt quis. Nisi in amet nostrud esse est incididunt commodo. Nulla quis non anim officia. Voluptate veniam mollit sint ipsum ad consectetur adipisicing." },
                { id: 2, text: "Laborum enim exercitation esse nostrud dolor do eiusmod minim ex do proident veniam dolor occaecat. Mollit ex pariatur deserunt laboris aliquip amet." },
                { id: 3, text: "Est deserunt voluptate sit elit laborum officia velit non dolor. Consectetur cillum ut nostrud adipisicing Lorem non exercitation irure elit mollit duis do veniam. Mollit aute duis laboris amet exercitation nostrud. Ex aute dolor minim nostrud qui esse. Sit nulla et nostrud esse. Culpa nulla sunt laboris consectetur." },
                { id: 4, text: "Non velit ea exercitation qui enim. Esse ea consectetur sint incididunt sunt anim duis incididunt. Deserunt irure cillum laboris quis deserunt magna ut esse. Ea laboris qui consequat proident ut exercitation do ea. Laboris in dolor est velit elit enim culpa pariatur ut mollit velit adipisicing." },
                { id: 5, text: "Lorem voluptate ut minim deserunt non commodo. Reprehenderit ex cillum duis ullamco quis amet pariatur ad ut cupidatat qui id Lorem. Lorem laborum eu voluptate enim pariatur id. Amet adipisicing sunt nulla quis ut nulla. Eiusmod do mollit enim magna voluptate." },
                { id: 6, text: "Et ullamco ipsum non esse sunt nostrud culpa pariatur. Adipisicing tempor sit incididunt qui eiusmod proident. Sit ut est id laboris dolore quis minim ipsum id exercitation quis nisi cillum cillum. Incididunt mollit deserunt duis quis ad officia incididunt enim enim. Aliqua pariatur qui enim magna elit excepteur sunt." }
            ]
        }
    }

    render() {
        return (
            <>
                <Header title={this.state.title} />
                <Content posts={this.state.posts}/>
            </>
        )
    }
}

render(<App />, document.getElementById("app"))