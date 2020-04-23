import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import Footer from 'components/Footer'


const App = () => {
	return (
		<Router>
			<Navigation />
			<Content />
			<Footer />
		</Router>
	)
}

export default App
