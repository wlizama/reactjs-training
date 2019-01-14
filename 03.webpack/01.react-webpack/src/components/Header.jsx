import React from "react"
import "./Header.scss"

export const Header = (props) => {
    return (
        <header className="main-header">{props.title}</header>
    )
}