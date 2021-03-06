import React from "react"
import "./Content.scss"

export const Content = (props) => {
    return (
        <section className="content-section">
            {props.posts.map((post) => 
                <p className="post-item" key={post.id}>{post.text}</p>
            )}
        </section>
    )
}