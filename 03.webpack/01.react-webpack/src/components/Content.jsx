import React from "react"

export const Content = (props) => {
    return (
        <section>
            {props.posts.map((post) => 
                <p key={post.id}>{post.text}</p>
            )}
        </section>
    )
}