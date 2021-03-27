import React from 'react';

import Soup1 from '../../../assets/images/icons/soup1.png';
import Soup2 from '../../../assets/images/icons/soup2.png';
import Soup3 from '../../../assets/images/icons/soup3.png';
import Soup4 from '../../../assets/images/icons/soup4.png';

import MainOrderedDishesCard from '../../../components/MainOrderedDishesCard/MainOrderedDishesCard.js';
import './OrderMenu.scss';

const OrderMenu = () => {
	return (
      <div className="order_menu">
		
			<MainOrderedDishesCard
			img={Soup1}
			title='Spicy seasoned sea...'
			price='$ 2.29'
			count='2'
			bill='$ 4,58'
			description='Please, just a little bit spicy only.'
			/>

			<MainOrderedDishesCard
			img={Soup2}
			title='Salted pasta with mu...'
			price='$ 2.69'
			count='1'
			bill='$ 2,69'
			description='Order Note...'
			/>

			<MainOrderedDishesCard
			img={Soup3}
			title='Spicy instant noodle...'
			price='$ 3,49'
			count='3'
			bill='$ 10,47'
			description='Order Note...'
			/>

			<MainOrderedDishesCard
			img={Soup4}
			title='Healthy noodle with ...'
			price='$ 3,29'
			count='1'
			bill='$ 3,29'
			description='Order Note...'
			/>

			<MainOrderedDishesCard
			img={Soup1}
			title='Spicy seasoned sea...'
			price='$ 2.29'
			count='2'
			bill='$ 4,58'
			description='Please, just a little bit spicy only.'
			/>

			<MainOrderedDishesCard
			img={Soup2}
			title='Salted pasta with mu...'
			price='$ 2.69'
			count='1'
			bill='$ 2,69'
			description='Order Note...'
			/>

			<MainOrderedDishesCard
			img={Soup3}
			title='Spicy instant noodle...'
			price='$ 3,49'
			count='3'
			bill='$ 10,47'
			description='Order Note...'
			/>

			<MainOrderedDishesCard
			img={Soup4}
			title='Healthy noodle with ...'
			price='$ 3,29'
			count='1'
			bill='$ 3,29'
			description='Order Note...'
			/>
      </div>
	)
}

export default OrderMenu;