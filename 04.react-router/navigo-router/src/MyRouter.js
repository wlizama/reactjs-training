import React from 'react';
import Navigo from "navigo"
import About from "./components/About"

//init router
let router_root = null
let useHash = false
let hash = "#!"
let router = new Navigo(router_root, useHash, hash)

router.on({
    "about": () => <About />
})

class MyRouter extends React.Component {
    
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h2>About ...</h2>
        )
    }
}

export default MyRouter