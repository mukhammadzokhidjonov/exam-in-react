import React from 'react';

import './DashboardPersonClient.scss';

const DashboardPersonClient = (props) => {
	return (
		<div className="dashboard_person_client">

			<div className="client">
				<img src={props.img} alt="" />
				<h4>{props.name}</h4>
			</div>
			<div className="client_food">
				<p>{props.food}</p>
			</div>
			<div className="client_bill">
				<p>{props.price}</p>
			</div>
			<div className="client_status">
				<span>{props.status}</span>
			</div>

		</div>
	)
}

export default DashboardPersonClient;