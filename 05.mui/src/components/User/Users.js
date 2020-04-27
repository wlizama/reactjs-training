import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import User from './User'

const Users = () => {

	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => setUsers(json))
	}, [])

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={2}>
					{users.map((user, idx) => 
						<Grid key={idx} item>
							<User user={user} />
						</Grid>
					)}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Users