import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { User } from './User';

let UserList = [
    { path: "/user/1", title: "Usuario 1" },
    { path: "/user/2", title: "Usuario 2" },
    { path: "/user/3", title: "Usuario 3" },
    { path: "/user/4", title: "Usuario 4" },
    { path: "/user/5", title: "Usuario 5" },
    { path: "/user/6", title: "Usuario 6" },
]

export const Users = (props) => (
    <Router>
        <div>
            <h2>Users</h2>
            <ul>
            {UserList.map((route, index) => (
                <li key={index}>
                    <Link to={route.path}>{route.title}</Link>
                </li>
            ))}
            </ul>

            <Route path="/user/:id" component={User} />
        </div>
    </Router>
)