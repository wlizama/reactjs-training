import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
	Container,
	List,
	Divider,
} from '@material-ui/core'
import Post from './Post'
import { useQueryString } from 'helpers/customHooks'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		// maxWidth: '36ch',
		backgroundColor: theme.palette.background.paper,
	}
}))

const Posts = props => {
	const classes = useStyles()
	const [posts, setPosts] = useState([])
	const qs = useQueryString()

	useEffect(() => {
		
		fetch('http://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(json => setPosts(json))
	}, [])

	useEffect(() => {
		console.log(qs.values())
	}, [qs])

	return (
		<Container>
			<List className={classes.root}>
				{posts.map((post, idx) => (
				<React.Fragment key={idx}>
					<Post post={post} />
					<Divider variant="middle" />
				</React.Fragment>
				))}
			</List>
		</Container>
	)
}

export default Posts
