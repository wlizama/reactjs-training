import React from 'react'
import {
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar
} from '@material-ui/core'
import { randonAvatar } from 'helpers/utils'


const Post = props => {

	const { post } = props
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar alt="Remy Sharp" src={randonAvatar()} />
			</ListItemAvatar>
			<ListItemText
				primary={post.title}
				secondary={post.body}
			/>
		</ListItem>
	)
}

export default Post
