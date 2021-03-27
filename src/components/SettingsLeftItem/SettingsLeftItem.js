import React from 'react';
import { Link } from 'react-router-dom';

import './SettingsLeftItem.scss';

const SettingsLeftItem = (props) => {
	return (
		<Link to='/settings' className='settings_left_item_wrapper'>
			<div className="settings_left_item">
				<div className="settings_left_icon">
					<img src={props.img} alt="" /> 
				</div>
				<div>
					<h4>{props.title}</h4>
					<p>{props.subtitle}</p>
				</div>
			</div>
		</Link>
	)
}

export default SettingsLeftItem;