import React from 'react';

import Lupa from '../../assets/icons/search.png';

import './HomeMainHeader.scss';

const HomeMainHeader = () => {
	return (
		<div className="home_main_header">
			<div className="home_main_header_left">
				<h1>Jaegar Resto</h1>
				<p>Tuesday, 2 Feb 2021</p>
			</div>

			<div className="home_main_header_right">
				<form>
					<img src={Lupa} alt="" />

					<input
					type="text"
					id='header-input'
					placeholder="Search for food, coffe, etc.."
					/>
				</form>
			</div>

		</div>
	)
}

export default HomeMainHeader;