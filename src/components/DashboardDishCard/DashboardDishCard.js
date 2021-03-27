import React from 'react';

import './DashboardDishCard.scss';

const DashboardDishCard = (props) => {
	return (
		<div className="dashboard_dish_card">
			<div className="card_top">
				<img className='main_icon' src={props.icon} alt="" />
				<p>{props.percent}</p>
				<img src={props.up} alt="" className='arrow' />
			</div>
			<h1>{props.bill}</h1>
			<span>{props.status}</span>
		</div>
	)
}

export default DashboardDishCard;