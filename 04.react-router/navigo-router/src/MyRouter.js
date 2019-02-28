import React from 'react';
import Navigo from "navigo"
import About from "./components/About"

//init router
let router_root = null
let useHash = false
let hash = "#!"
let router = new Navigo(router_root, useHash)

router.on({
    "about": () => <About />
}).resolve()

class MyRouter extends React.Component {
    
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // router.navigate("/about")
    }
    render() {
        return (
            <div>
                <h2>Navigo Router Components</h2>
                <a href="about" data-navigo>About</a>
            </div>
        )
    }
}

export default MyRouter