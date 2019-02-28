import React from 'react';
import { Route } from "react-router-dom"

import { Home } from "./components/Home"
import { About } from "./components/About"
import { Users } from "./components/Users"
import { User } from "./components/User"
import { ContactUs } from "./components/ContactUs"
import { NoMatch } from "./components/NoMatch"

export const Routes = [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/about", title: "About", component: About },
    { 
        path: "/users",
        title: "Users",
        component: Users,
        routes: [
            { path: "/users/:id", component: User },
        ]
    },
    { path: "/contact", title: "Contact Us", component: ContactUs },
    { notLink: true, component: NoMatch },
]

// envuelve <Route> y usa esto en todas partes, entonces cuando
// las rutas secundarias se agregan cualquier ruta funcionará
export const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        render={props => (
            // Pasar las sub-rutas para seguir anidando.
            <route.component {...props} routes={route.routes} />
        )}
    />
)