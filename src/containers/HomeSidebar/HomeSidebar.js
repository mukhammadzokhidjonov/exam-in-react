import React from 'react';
import { Link } from 'react-router-dom';

import PageButton from '../../components/PageButton/PageButton.js';

import Fleshka from '../../assets/icons/fleshka.svg';
import Home from '../../assets/icons/home.svg';
import Compas from '../../assets/icons/compas.svg';
import Kusok from '../../assets/icons/kusok.svg';
import Message from '../../assets/icons/message.svg';
import Bell from '../../assets/icons/bell.svg';
import Setting from '../../assets/icons/setting.svg';
import Next from '../../assets/icons/next.svg';

import './HomeSidebar.scss';

const HomeSidebar = () => {
	return (
	  <div className="home_sidebar">
	  		<Link to=''>
				<PageButton img={Fleshka} />
	  		</Link>
	  		<Link to='/'>
	  			<PageButton img={Home} />
	  		</Link>
	  		<Link to='/location'>
	  			<PageButton img={Compas} />
	  		</Link>
	  		<Link to='/dashboard'>
	  			<PageButton img={Kusok} />
	  		</Link>
	  		<Link to='/message'>
	  			<PageButton img={Message} />
	  		</Link>
	  		<Link to='/notisfaction'>
	  			<PageButton img={Bell} />
	  		</Link>
	  		<Link to='/settings'>
	  			<PageButton img={Setting} />
	  		</Link>
	  		<Link to='/'>
	  			<PageButton img={Next} />
	  		</Link>
	  </div>
	)
}

export default HomeSidebar;