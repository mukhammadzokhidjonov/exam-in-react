import React from 'react';

import './HomeOrderButtons.scss';

const HomeOrderButtons = (props) => {
	return (
		<div className="home_order_buttons">

			<div className="order_buttons_header">
				<h2>Orders #34562{props.id}</h2>
			</div>

			<div className="order_buttons_holder">
				<button>Dine In</button>
				<button>To Go</button>
				<button>Delivery</button>
			</div>

			<div className="order_buttons_titles">
				<h3>Items</h3>
				  <div className="order_buttons_titles_right">
					  	<h3>Qty</h3>
					  	<h3>Price</h3>
				  </div>
			</div>

		</div>
	)
}

export default HomeOrderButtons;