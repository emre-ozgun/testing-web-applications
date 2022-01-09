import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ msg }) => {
	return (
		<div
			style={{ paddingTop: '4rem', textAlign: 'center' }}
			className='error section section-center'
		>
			<h2>{msg}</h2>
			<Link to='/products'>BACK TO PRODUCTS</Link>
		</div>
	);
};

export default Error;
