import React from 'react';
import { Link } from "react-router-dom"
import { RouteWithSubRoutes } from "../MyRouter"

let UserList = [
    { path: "/users/1", title: "Usuario 1" },
    { path: "/users/2", title: "Usuario 2" },
    { path: "/users/3", title: "Usuario 3" },
    { path: "/users/4", title: "Usuario 4" },
    { path: "/users/5", title: "Usuario 5" },
    { path: "/users/6", title: "Usuario 6" },
]

export const Users = ({ routes }) => (
    <div>
        <h2>Users</h2>
        <ul>
        {UserList.map((route, index) => (
            <li key={index}>
                <Link to={route.path}>{route.title}</Link>
            </li>
        ))}
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </div>
)