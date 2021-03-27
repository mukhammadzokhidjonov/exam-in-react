import React from 'react';

import Delete from '../../assets/icons/delete-btn.svg';

import './MainOrderedDishesCard.scss';

const MainOrderedDishesCard = (props) => {
	return (
		<div className="main_ordered_dishes_card">
			<div className='ordered_top'>
				<div className="ordered_top_left">

					<div className="ordered_top_left_1">
						<div className="top_img_wrapper">
							<img src={props.img} alt="" />
						</div>
						<div>
							<h4>{props.title}</h4>
							<p>{props.price}</p>
						</div>
					</div>
					<div>
						<span>{props.count}</span>
					</div>
				</div>
				<div className="ordered_top_right">
					<h3>{props.bill}</h3>
				</div>
			</div>
			<div className="ordered_bottom">
				<div className="ordered_bottom_left">
					<input type="text" placeholder={props.description} />
				</div>
				<div className="ordered_bottom_right">
					<button><img src={Delete} alt=""/></button>
				</div>
			</div>
		</div>
	)
}

export default MainOrderedDishesCard;