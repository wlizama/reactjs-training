import React from 'react';
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom"
import { Routes, RouteWithSubRoutes } from "./MyRouter"
import "./styles/App.scss"

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                {Routes.map((route, index) => (
                    !route.notLink ?
                        <li key={index}>
                            <NavLink
                              className="App-link"
                              exact={route.exact}
                              activeClassName="App-link--active"
                              to={route.path}>
                              {route.title}
                            </NavLink>
                        </li>
                        : null
                ))}
                </ul>
            </nav>
            <Switch>
                {Routes.map((route, index) => (
                    <RouteWithSubRoutes key={index} {...route} />
                ))}
            </Switch>
        </div>
    </Router>
)

export default App;
