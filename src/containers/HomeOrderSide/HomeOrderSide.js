import React from 'react';

import HomeOrderButtons from '../../components/HomeOrderButtons/HomeOrderButtons.js';
import OrderMenu from '../../containers/HomeOrderSide/OrderMenu/OrderMenu.js';
import HomeMainOrderPayment from '../../components/HomeMainOrderPayment/HomeMainOrderPayment.js';


import './HomeOrderSide.scss';

const HomeOrderSide = () => {
	return (
		<div className="home_order_side">
			<HomeOrderButtons />
			<OrderMenu />
			<HomeMainOrderPayment />
		</div>
	)
}

export default HomeOrderSide;