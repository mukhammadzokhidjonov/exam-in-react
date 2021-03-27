import React from 'react';

import RightSideTop from './RightSideTop/RightSideTop.js';
import RightSideBottom from './RightSideBottom/RightSideBottom.js';

import './DashboardRight.scss';

const DashboardRight = () => {
	return (
		<div className="dashboard_right">
			<RightSideTop />
			<RightSideBottom />
		</div>
	)
}

export default DashboardRight;