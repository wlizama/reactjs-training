import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import Components
import Home from 'components/Content/Home'
import Post from 'components/Content/Post'
import Comment from 'components/Content/Comment'
import Album from 'components/Content/Album'
import Photo from 'components/Content/Photo'
import User from 'components/Content/User'
import Todo from 'components/Content/Todo'


const Content = () => {
	return (
		<section>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/posts"><Post /></Route>
				<Route path="/comments"><Comment /></Route>
				<Route path="/albums"><Album /></Route>
				<Route path="/photos"><Photo /></Route>
				<Route path="/users"><User /></Route>
				<Route path="/todos"><Todo /></Route>
			</Switch>
		</section>
	)
}

export default Content
