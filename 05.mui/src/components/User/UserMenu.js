import React, { useState } from 'react'
import {
	IconButton,
	Menu,
	MenuItem
} from '@material-ui/core'
import {
	MoreVert as MoreVertIcon
} from '@material-ui/icons'

const UserMenu = () => {

	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = evt => setAnchorEl(evt.currentTarget)

	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<IconButton onClick={handleClick}>
				<MoreVertIcon />
			</IconButton>
			<Menu
				keepMounted
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Posts</MenuItem>
				<MenuItem onClick={handleClose}>Comments</MenuItem>
				<MenuItem onClick={handleClose}>Albums</MenuItem>
				<MenuItem onClick={handleClose}>Photos</MenuItem>
			</Menu>
		</>
	)
}

export default UserMenu
