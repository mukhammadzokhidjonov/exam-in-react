import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.js';
import Location from './pages/Location/Location.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Message from './pages/Message/Message.js';
import Notisfation from './pages/Notisfation/Notisfaction.js';
import Settings from './pages/Settings/Settings.js';

import './assets/main.scss';
const App = () => {

  return (
  	<Router>
  		<Switch>

			<Route exact path='/' component={HomePage} />
			<Route exact path='/location' component={Location} />
			<Route exact path='/dashboard' component={Dashboard} />
			<Route exact path='/message' component={Message} />
			<Route exact path='/notisfaction' component={Notisfation} />
			<Route exact path='/settings' component={Settings} />

  		</Switch>
  	</Router>
  )
}

export default App;


