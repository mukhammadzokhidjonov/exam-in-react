import React from 'react';

import DashboardDishCard from '../../../components/DashboardDishCard/DashboardDishCard.js';

import Dollar from '../../../assets/icons/dollar.svg';
import Comment from '../../../assets/icons/comment.svg';
import Group from '../../../assets/icons/people-group.svg';
import Up from '../../../assets/icons/up.svg';
import Down from '../../../assets/icons/down.svg';

import './DishCardWrapper.scss';

const DishCardWrapper = () => {
	return (
		<div className="dish_card_wrapper">
			<DashboardDishCard
			icon={Dollar}
			percent='+32.40%'
			up={Up}
			bill='$10,243.00'
			status='Total Revenue'
			/>

			<DashboardDishCard
			icon={Comment}
			percent='-12.40%'
			up={Down}
			bill='23,456'
			status='Total Dish Ordered'
			/>

			<DashboardDishCard
			icon={Group}
			percent='+2.40%'
			up={Up}
			bill='1,234'
			status='Total Customer'
			/>
		</div>
	)
}

export default DishCardWrapper;