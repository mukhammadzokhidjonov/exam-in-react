import React from 'react';


import './ChooseDishes.scss';

const ChooseDishes = () => {
	return (
		<div className="choose_dishes">
			<h2>Choose Dishes</h2>
			<div className="choose_dishes_wrapper">
				<form>
				<select name="" id="choose-typeof-dishes">
					<option value="dine in">Dine In</option>
					<option value="dine out">Dine Out</option>
					<option value="dine off">Dine Off</option>
				</select>
				</form>
			</div>
		</div>
	)
}

export default ChooseDishes;