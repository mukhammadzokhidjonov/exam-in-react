import React from 'react';

import HomeMainHeader from '../../components/HomeMainHeader/HomeMainHeader.js';
import HomeMainPagination from '../../components/HomeMainPagination/HomeMainPagination.js';
import ChooseDishes from '../../components/ChooseDishes/ChooseDishes.js';
import HomeMainContentCards from './HomeMainContentCards/HomeMainContentCards.js';

import './HomeMainContent.scss';

const HomeMainContent = () => {
	return (
		<div className="home_main_content">

			<HomeMainHeader />
			<HomeMainPagination />
			<ChooseDishes />
			<HomeMainContentCards />
		</div>
	)
}

export default HomeMainContent;