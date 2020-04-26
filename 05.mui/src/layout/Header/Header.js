import React from 'react'

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const Header = props => {

	const { classes, handleDrawerToggle } = props

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
				Mi React App
			</Typography>
			</Toolbar>
      </AppBar>
	)
}

export default Header
