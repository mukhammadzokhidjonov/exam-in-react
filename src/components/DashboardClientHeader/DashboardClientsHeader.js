import React from 'react';

import FiterBtn from '../../assets/icons/filter.svg';

import './DashboardClientsHeader.scss';

const DashboardClientsHeader = () => {
	return (
		<div className="dashboard_clients_header">
			<div className="header_top">
				<h2>Order Report</h2>
			<button >
				<img src={FiterBtn} alt="" />
				Filter Order
			</button>
			</div>
			<div className="header_bottom">
				<div className="header_bottom_left">
					<p>Customer</p>
					<p>Menu</p>
				</div>
				<div className="header_bottom_right">
					<p>Total Payment</p>
					<p>Status</p>
				</div>
				
			</div>
		</div>
	)
}

export default DashboardClientsHeader;