import { Home } from "./components/Home"
import { About } from "./components/About"
import { Users } from "./components/Users"
import { User } from "./components/User"
import { ContactUs } from "./components/ContactUs"
import { NoMatch } from "./components/NoMatch"

let Routes = [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/about", title: "About", component: About },
    {
        path: "/users",
        title: "Users",
        component: Users, 
        routes: [
            { path: "/users/:id", title: "User", component: User }
        ]
    },
    { path: "/contact", title: "Contact Us", component: ContactUs },
    { notLink: true, component: NoMatch },
]

export default Routes