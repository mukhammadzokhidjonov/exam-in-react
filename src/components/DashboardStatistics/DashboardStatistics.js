import React from 'react';

import Circle from '../../assets/images/icons/circle.svg';

import './DashboardStatistics.scss';

const DashboardStatistics = () => {
	return (
		<div className="dashboard_statistics">
			<div className="statistics_top">
				<h3>Most Type of Order</h3>
				<form>
					<select id="">
						<option value="today">Today</option>
						<option value="yesterday">Yesterday</option>
						<option value="tomorrow">Tomorrow</option>
					</select>
				</form>
			</div>
			<div className="statistics_bottom">
				<div className="statistics_bottom_left">
					<img src={Circle} alt="" />
				</div>
				<div className="statistics_bottom_right">

					<div className="color_wrapper">
						<div className="color_pink"></div>
						<div>
                    <p>Dine In</p>
                    <span>200 customers</span>
						</div>
					</div>

					<div className="color_wrapper">
						<div className="color_yellow"></div>
						<div>
                    <p>To Go</p>
                    <span>122 customers</span>
						</div>
					</div>

					<div className="color_wrapper">
						<div className="color_blue"></div>
						<div>
                    <p>Delivery</p>
                    <span>264 customers</span>
						</div>
					</div>


				</div>
			</div>
		</div>
	)
}

export default DashboardStatistics;