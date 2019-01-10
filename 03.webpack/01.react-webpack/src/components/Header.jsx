import React from "react"
import "./Header.css"

export const Header = (props) => {
    return (
        <header className="main-header">{props.title}</header>
    )
}