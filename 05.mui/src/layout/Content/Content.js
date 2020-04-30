import React from 'react'

import Routes from 'routes/Routes'

const Content = props => {

	const { classes } = props

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Routes />
		</main>
	)
}

export default Content
