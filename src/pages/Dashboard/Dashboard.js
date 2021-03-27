import React from 'react';
import { Link } from 'react-router-dom';

import HomeSidebar from '../../containers/HomeSidebar/HomeSidebar.js';
import DashboardMain from '../../containers/DashboardMain/DashboardMain.js';
import DashboardRight from '../../containers/DashboardRight/DashboardRight.js';

import './Dashboard.scss';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<HomeSidebar />
			<DashboardMain />
			<DashboardRight />
		</div>
	)
}

export default Dashboard;