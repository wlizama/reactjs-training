import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>
const ContactUs = () => <h2>Contact Us</h2>

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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
