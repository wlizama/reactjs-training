import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom"
import "./styles/App.scss"

import { Home } from "./components/Home"
import { About } from "./components/About"
import { Users } from "./components/Users"
import { ContactUs } from "./components/ContactUs"
import { NoMatch } from "./components/NoMatch"

let Routes = [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/about", title: "About", component: About },
    { path: "/users", title: "Users", component: Users },
    { path: "/contact", title: "Contact Us", component: ContactUs },
    { notLink: true, component: NoMatch },
]

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
                <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                ))}
            </Switch>
        </div>
    </Router>
)

export default App;
