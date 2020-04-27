import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import Components
import Home from 'components/Home'
import Post from 'components/Post'
import Comment from 'components/Comment'
import Album from 'components/Album'
import Photo from 'components/Photo'
import User from 'components/User'
import Todo from 'components/Todo'


const Content = props => {

	const { classes } = props

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/posts"><Post /></Route>
				<Route path="/comments"><Comment /></Route>
				<Route path="/albums"><Album /></Route>
				<Route path="/photos"><Photo /></Route>
				<Route path="/users"><User /></Route>
				<Route path="/todos"><Todo /></Route>
			</Switch>
		</main>
	)
}

export default Content
