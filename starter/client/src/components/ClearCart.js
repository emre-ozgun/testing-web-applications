import React, { useContext } from 'react';
import { CContext } from '../context/CartContext';

const ClearCart = () => {
	const { clearShoppingCart } = useContext(CContext);

	return (
		<button onClick={clearShoppingCart} className='clear-cart'>
			CLEAR CART
		</button>
	);
};

export default ClearCart;
