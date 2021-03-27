import React from 'react';

import HomeMainCard from '../../../components/HomeMainCard/HomeMainCard.js';

import Shorva1 from '../../../assets/images/soup1.png';
import Shorva2 from '../../../assets/images/soup2.png';
import Shorva3 from '../../../assets/images/soup3.png';
import Shorva4 from '../../../assets/images/soup4.png';
import Shorva6 from '../../../assets/images/soup6.png';


import './HomeMainContentCards.scss';

const HomeMainContentCards = () => {
	return (
		<div className="home_main_content_cards">

			<HomeMainCard
			img={Shorva1}
			title='Spicy seasoned seafood noodles'
			price='$ 2.29'
			status='20 Bowls available'
			/>

			<HomeMainCard
			img={Shorva2}
			title='Salted Pasta with mushroom sauce'
			price='$ 2.69'
			status='11 Bowls available'
			/>

			<HomeMainCard
			img={Shorva3}
			title='Beef dumpling in hot and sour soup'
			price='$ 2.99'
			status='16 Bowls available'
			/>

			<HomeMainCard
			img={Shorva4}
			title='Healthy noodle with spinach leaf'
			price='$ 3.29'
			status='22 Bowls available'
			/>

			<HomeMainCard
			img={Shorva4}
			title='Hot spicy fried rice with omelet'
			price='$ 3.49'
			status='13 Bowls available'
			/>

			<HomeMainCard
			img={Shorva6}
			title='Spicy instant noodle with special omelette'
			price='$ 3.59'
			status='17 Bowls available'
			/>

			<HomeMainCard
			img={Shorva3}
			title='Beef dumpling in hot and sour soup'
			price='$ 2.99'
			status='16 Bowls available'
			/>

			<HomeMainCard
			img={Shorva2}
			title='Salted Pasta with mushroom sauce'
			price='$ 2.69'
			status='11 Bowls available'
			/>

			<HomeMainCard
			img={Shorva1}
			title='Spicy seasoned seafood noodles'
			price='$ 2.29'
			status='20 Bowls available'
			/>

			<HomeMainCard
			img={Shorva4}
			title='Hot spicy fried rice with omelet'
			price='$ 3.49'
			status='13 Bowls available'
			/>

			<HomeMainCard
			img={Shorva6}
			title='Spicy instant noodle with special omelette'
			price='$ 3.59'
			status='17 Bowls available'
			/>

			<HomeMainCard
			img={Shorva3}
			title='Beef dumpling in hot and sour soup'
			price='$ 2.99'
			status='16 Bowls available'
			/>
		</div>
	)
}

export default HomeMainContentCards;