import React from 'react';

import './DashboardOrderTop.scss';

const DashboardOrderTop = (props) => {
	return (
		<div className="dashboard_order_top">
			
			<div className="dashboard_order_menu">
				<div>
					<img src={props.img} alt="" />
				</div>
				<div>
					<h4>{props.title}</h4>
					<p>{props.status}</p>
				</div>	
			</div>
		</div>
	)
}

export default DashboardOrderTop;