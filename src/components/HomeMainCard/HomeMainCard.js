import React from 'react';

import './HomeMainCard.scss';

const HomeMainCard = (props) => {
	return (
		<a href="#" className="home_main_card">
			<img src={props.img} alt="" />
			<h4>{props.title}</h4>
			<p>{props.price}</p>
			<span>{props.status}</span>
		</a>
	)
}

export default HomeMainCard;