import React from 'react';

import DashboardOrderTop from '../../../components/DashboardOrderTop/DashboardOrderTop.js';

import Soup1 from '../../../assets/images/icons/soup1.png';
import Soup2 from '../../../assets/images/icons/soup2.png';
import Soup3 from '../../../assets/images/icons/soup3.png';
import Soup4 from '../../../assets/images/icons/soup4.png';


import './RightSideTop.scss';

const RightSideTop = () => {
	return (
		<div className="right_side_top">
			<div className="head">
					<h2>Most Ordered</h2>
					<form>
						<select id="">
							<option value='today'>Today</option>
							<option value='yesterday'>Yesterday</option>
							<option value='tomorrow'>Tomorrow</option>
						</select>
					</form>
				</div>

			<DashboardOrderTop
			img={Soup1}
			title='Spicy seasoned seafood noodles'
			status='200 dishes ordered'
			/>

			<DashboardOrderTop
			img={Soup2}
			title='Salted pasta with mushroom sauce'
			status='120 dishes ordered'
			/>

			<DashboardOrderTop
			img={Soup3}
			title='Beef dumpling in hot and sour soup'
			status='80 dishes ordered'
			/>

				<div className="view_all_dashboard">
					<button>View All</button>
				</div>
				
		</div>
	)
}

export default RightSideTop;