import React from 'react';

import { Home } from "./components/Home"
import { About } from "./components/About"
import { Users } from "./components/Users"
import { ContactUs } from "./components/ContactUs"

let Routes = [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/about", title: "About", component: About },
    { path: "/users", title: "Users", component: Users },
    { path: "/contact", title: "Contact Us", component: ContactUs },
]

export default Routes