import React from 'react';
import { Link } from 'react-router-dom';

import HomeSidebar from '../../containers/HomeSidebar/HomeSidebar.js';

import './Message.scss';

const Message = () => {
	return (
		<div className="message">
			<HomeSidebar />
			<h1>Meassage Page</h1>
		</div>
	)
}

export default Message;