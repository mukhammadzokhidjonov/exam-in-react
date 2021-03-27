import React from 'react';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.js';
import DishCardWrapper from '../DashboardMain/DishCardWrapper/DishCardWrapper.js';
import DashboardClients from '../DashboardMain/DashboardClients/DashboardClients.js';

import './DashboardMain.scss';

const DashboardMain = () => {
	return (
		<div className="dashboard_main">
			<DashboardHeader />
			<DishCardWrapper />
			<DashboardClients />
		</div>
	)
}

export default DashboardMain;