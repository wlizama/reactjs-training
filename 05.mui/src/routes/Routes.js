import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routesConfig from './routesConfig'

const Routes = () => {
	return (
		<Switch>
			{routesConfig.map((route, idx) =>
			<Route 
				key={idx}
				path={route.path}
				exact={route.exact}
				component={route.component} />
			)}
		</Switch>
	)
}

export default Routes
