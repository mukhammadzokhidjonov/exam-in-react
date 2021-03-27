import React from 'react';

import SettingsLeftItem from '../../components/SettingsLeftItem/SettingsLeftItem.js';

import Appereance from '../../assets/icons/heart.svg';
import Restaurant from '../../assets/icons/restaurant.svg';
import Management from '../../assets/icons/management.svg';
import Notification from '../../assets/icons/notisfaction.svg';
import Security from '../../assets/icons/security.svg';
import About from '../../assets/icons/about.svg';


import './SettingsLeftSide.scss';

const SettingsLeftSide = () => {
	return (
		<div className="settings_leftside">

			<SettingsLeftItem
			img={Appereance}
			title='Appereance'
			subtitle='Dark and Light mode, Font size'
			/>
			
			<SettingsLeftItem
			img={Restaurant}
			title='Your Restaurant'
			subtitle='Dark and Light mode, Font size'
			/>

			<SettingsLeftItem
			img={Management}
			title='Products Management'
			subtitle='Manage your product, pricing, etc'
			/>

			<SettingsLeftItem
			img={Notification}
			title='Notifications'
			subtitle='Customize your notifications'
			/>

			<SettingsLeftItem
			img={Security}
			title='Security'
			subtitle='Configure Password, PIN, etc'
			/>

			<SettingsLeftItem
			img={Security}
			title='Security'
			subtitle='Configure Password, PIN, etc'
			/>

			<SettingsLeftItem
			img={About}
			title='About Us'
			subtitle='Find out more about Posly'
			/>

		</div>
	)
}

export default SettingsLeftSide;