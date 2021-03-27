import React from 'react';
import { Link } from 'react-router-dom';

import FiterBtn from '../../assets/icons/filter.svg';

import './SettingsMainHeader.scss';

const SettingsMainHeader = () => {
	return (
		<div className="settings_main_header">
			<div className="settings_header_top">
				<h2>Products Management</h2>
				<button >
				<img src={FiterBtn} alt="" />
				Filter Order
			</button>
			</div>
			
			<div className="settings_header_bottom">
				<a href="#">Hot Dishes</a>
				<a href="#">Cold Dishes</a>
				<a href="#">Soup</a>
				<a href="#">Grill</a>
				<a href="#">Appetizer</a>
				<a href="#">Dessert</a>
			</div>	

		</div>
	)
}

export default SettingsMainHeader;