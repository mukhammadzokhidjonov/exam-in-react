import React from 'react';
// import { Link } from 'react-router-dom';



import './PageButton.scss';

const PageButton = (props) => {
	return (
     <div className="page-button">
     	
     		<img src={props.img} alt="" />
     	
     </div>
	)
}

export default PageButton;

