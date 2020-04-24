import React, { useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import Footer from 'components/Footer'

const DRAWER_WIDTH = 240;

const useStyles = makeStyles( theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: DRAWER_WIDTH,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
			marginLeft: DRAWER_WIDTH,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: DRAWER_WIDTH,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));
  

const Layout = () => {

	const classes = useStyles();

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header classes={classes} handleDrawerToggle={handleDrawerToggle} />
			<Navigation classes={classes} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
			<Content classes={classes} />
			<Footer classes={classes} />
		</div>
	)
}

export default Layout
