import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./styles/App.scss"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Users } from "./components/Users"
import { ContactUs } from "./components/ContactUs"

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link className="App-link" to="/">Home</Link></li>
                    <li><Link className="App-link" to="/about">About</Link></li>
                    <li><Link className="App-link" to="/users">Users</Link></li>
                    <li><Link className="App-link" to="/contact">Contact Us</Link></li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={ContactUs} />
        </div>
    </Router>
)

export default App;
