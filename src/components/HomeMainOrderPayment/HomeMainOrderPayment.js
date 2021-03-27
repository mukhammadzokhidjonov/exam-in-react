import React from 'react';

import './HomeMainOrderPayment.scss';

const HomeMainOrderPayment = () => {
	return (
		<div className="order_payment">
			<div className="discount">
				<p>Discount</p>
				<h4>$ 0</h4>
			</div>
			<div className="subtotal">
				<p>Sub total</p>
				<h4>$ 21,03</h4>
			</div>

			<form>
				<button>Continue to Payment</button>
			</form>
		</div>
	)
}

export default HomeMainOrderPayment;