import React from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles'
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Hidden,
	Drawer
} from '@material-ui/core'
import {
	Home as HomeIcon,
	Book as BookIcon,
	Comment as CommentIcon,
	FormatListBulleted as FormatListBulletedIcon,
	PhotoAlbum as PhotoAlbumIcon,
	Photo as PhotoIcon,
	Group as GroupIcon
} from '@material-ui/icons';


const navList = [
	{ to: '/', text: 'Home', icon: HomeIcon },
	{ to: '/posts', text: 'Posts', icon: BookIcon },
	{ to: '/comments', text: 'Comments', icon: CommentIcon },
	{ to: '/albums', text: 'Albums', icon: PhotoAlbumIcon },
	{ to: '/photos', text: 'Photos', icon: PhotoIcon },
	{ to: '/users', text: 'Users', icon: GroupIcon },
	{ to: '/todos', text: 'Todos', icon: FormatListBulletedIcon },
] 

const DrawerContent = classes => (
	<div>
		<div className={classes.toolbar} />
		<Divider />
		<List>
		{navList.map((navItem, index) => (
			<Link key={index} to={navItem.to}>
				<ListItem button>
					<ListItemIcon><navItem.icon /></ListItemIcon>
					<ListItemText primary={navItem.text} />
				</ListItem>
			</Link>
		))}
		</List>
	</div>
)

const Navigation = props => {

	const { classes, container, mobileOpen, handleDrawerToggle } = props

	const theme = useTheme()

	return (
		<nav className={classes.drawer} aria-label="main navigation">
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Hidden smUp implementation="css">
				<Drawer
					variant="temporary"
					container={container}
					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					>
					<DrawerContent classes={classes} />
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					open
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					>
					<DrawerContent classes={classes} />
				</Drawer>
			</Hidden>
		</nav>
	)
}

export default Navigation
