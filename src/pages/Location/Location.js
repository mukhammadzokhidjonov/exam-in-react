import React from 'react';
import { Link } from 'react-router-dom';

import HomeSidebar from '../../containers/HomeSidebar/HomeSidebar.js';

import './Location.scss';

const Location = () => {
	return (
		<div className="location">
			<HomeSidebar />
			<h1>Location Page</h1>
		</div>
	)
}

export default Location;