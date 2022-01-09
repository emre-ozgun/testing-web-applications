import React, { useContext, useEffect } from 'react';
import { CContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
	const { setCartChangeFlag, cart } = useContext(CContext);

	useEffect(() => {
		setCartChangeFlag(false);
	}, []);

	if (!cart.length) {
		return (
			<div className='empty-cart section section-center'>
				<h1>Your cart is empty...</h1>
				<Link to='/products'>START SHOPPING</Link>
			</div>
		);
	}

	return <div>Cart Page</div>;
};

export default CartPage;
