import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./styles/App.scss"
import Routes from "./Routes"

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                {Routes.map((route, index) => (
                    <li key={index}>
                        <Link className="App-link" to={route.path}>{route.title}</Link>
                    </li>
                ))}
                </ul>
            </nav>
            {Routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component} />
            ))}
        </div>
    </Router>
)

export default App;
