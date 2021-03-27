import React from 'react';
import { Link } from 'react-router-dom';

import HomeSidebar from '../../containers/HomeSidebar/HomeSidebar.js';
import SettingsLeftSide from '../../containers/SettingsLeftSide/SettingsLeftSide.js';
import SettingsMain from '../../containers/SettingsMain/SettingsMain.js';

import './Settings.scss';

const Settings = () => {
	return (
		<div className="settings">
			
				<HomeSidebar />
				<SettingsLeftSide />
				<SettingsMain />
				
		</div>
	)
}

export default Settings;