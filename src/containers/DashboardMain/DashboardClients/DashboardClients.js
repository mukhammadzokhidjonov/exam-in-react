import React from 'react';

import DashboardClientsHeader from '../../../components/DashboardClientHeader/DashboardClientsHeader.js';
import DashboardPersonClient from '../../../components/DashboardPersonClient/DashboardPersonClient.js';

import Eren from '../../../assets/images/icons/eren.png';
import Reiner from '../../../assets/images/icons/reiner.png';
import Levi from '../../../assets/images/icons/levi.png';
import Historia from '../../../assets/images/icons/historia.png';
import Hanji from '../../../assets/images/icons/hanji.png';


import './DashboardClients.scss';

const DashboardClients = () => {
	return (
		<div className="dashboard_clients">
			<DashboardClientsHeader />

			<DashboardPersonClient
			img={Eren}
			name='Eren Jaegar'
			food='Spicy seasoned seafood noodles '
			price='$125'
			status='Completed'
			/>

			<DashboardPersonClient
			img={Reiner}
			name='Reiner Braunn'
			food='Salted Pasta with mushroom sauce'
			price='$145'
			status='Preparing'
			/>

			<DashboardPersonClient
			img={Levi}
			name='Levi Ackerman'
			food='Beef dumpling in hot and sour soup'
			price='$105'
			status='Pending'
			/>

			<DashboardPersonClient
			img={Historia}
			name='Historia Reiss'
			food='Hot spicy fried rice with omelet'
			price='$45'
			status='Completed'
			/>

			<DashboardPersonClient
			img={Hanji}
			name='Hanji Zoe'
			food='Hot spicy fried rice with omelet'
			price='$245'
			status='Completed'
			/>

			<DashboardPersonClient
			img={Eren}
			name='Eren Jaegar'
			food='Spicy seasoned seafood noodles '
			price='$125'
			status='Completed'
			/>

			<DashboardPersonClient
			img={Reiner}
			name='Reiner Braunn'
			food='Salted Pasta with mushroom sauce'
			price='$145'
			status='Preparing'
			/>

			<DashboardPersonClient
			img={Levi}
			name='Levi Ackerman'
			food='Beef dumpling in hot and sour soup'
			price='$105'
			status='Pending'
			/>

			<DashboardPersonClient
			img={Historia}
			name='Historia Reiss'
			food='Hot spicy fried rice with omelet'
			price='$45'
			status='Completed'
			/>

			<DashboardPersonClient
			img={Hanji}
			name='Hanji Zoe'
			food='Hot spicy fried rice with omelet'
			price='$245'
			status='Completed'
			/>

		</div>
	)
}

export default DashboardClients;