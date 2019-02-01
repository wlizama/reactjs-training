import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./styles/App.scss"
import Routes from "./Routes"

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                {Routes.map((route, index) => (
                    !route.notLink ?
                        <li key={index}>
                            <Link className="App-link" to={route.path}>{route.title}</Link>
                        </li>
                        : null
                ))}
                </ul>
            </nav>
            <Switch>
                {Routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                ))}
            </Switch>
        </div>
    </Router>
)

export default App;
