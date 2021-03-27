import React from 'react';

import HomeSidebar from '../../containers/HomeSidebar/HomeSidebar.js';
import HomeMainContent from '../../containers/HomeMainContent/HomeMainContent.js';
import HomeOrderSide from '../../containers/HomeOrderSide/HomeOrderSide.js';


import './HomePage.scss';

const HomePage = () => {
	return (
		<div className="home_page">
			<HomeSidebar />
			<HomeMainContent />
			<HomeOrderSide />
		</div>
	)
}

export default HomePage;