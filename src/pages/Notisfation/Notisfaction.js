import React from 'react';
import { Link } from 'react-router-dom';

import HomeSidebar from '../../containers/HomeSidebar/HomeSidebar.js';

import './Notisfaction.scss';

const Notisfaction = () => {
	return (
		<div className="notisfaction">
			<HomeSidebar />
			<h1>Notisfaction Page</h1>
		</div>
	)
}

export default Notisfaction;