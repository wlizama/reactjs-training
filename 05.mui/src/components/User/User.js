import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
	Card,
	CardHeader,
	Avatar,
	CardContent,
	CardMedia,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText
} from '@material-ui/core'
import {
	Email as EmailIcon,
	Phone as PhoneIcon,
	Work as WorkIcon
} from '@material-ui/icons'

import UserMenu from './UserMenu'
import { randonAvatar } from 'helpers/utils'


const useStyles = makeStyles({
	root: {
		width: 345
	},
	media: {
		height: 140
	}
})

const User = props => {
	const classes = useStyles()

	const { user } = props

	return (
		<Card className={classes.root}>
			<CardHeader 
				avatar={
					<Avatar 
					src={randonAvatar()} />
				}
				action={<UserMenu />}
				title={user.name}
				subheader={`@${user.username}`}
			/>
			<CardMedia 
				className={classes.media}
				image={`https://picsum.photos/300/200?random=${user.id}`}
			/>
			<CardContent>
				<List>
					<ListItem>
						<ListItemAvatar>
							<Avatar><EmailIcon /></Avatar>
						</ListItemAvatar>
						<ListItemText 
							primary="Email"
							secondary={user.email}
						/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar><PhoneIcon /></Avatar>
						</ListItemAvatar>
						<ListItemText 
							primary="Phone"
							secondary={user.phone}
						/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar><WorkIcon /></Avatar>
						</ListItemAvatar>
						<ListItemText 
							primary="Company"
							secondary={user.company.name}
						/>
					</ListItem>
				</List>
			</CardContent>
		</Card>
	)
}

export default User
