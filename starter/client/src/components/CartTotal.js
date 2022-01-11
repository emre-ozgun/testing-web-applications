import React, { useContext } from 'react';
import { calculateCartTotal } from '../utils/calculateCartTotal';
import { formatPrice } from '../utils/formatPrice';
import { Link } from 'react-router-dom';
import { AContext } from '../context/AuthContext';

const CartTotal = ({ cart }) => {
	const { isAuthUser } = useContext(AContext);

	return (
		<article className='cart-total'>
			<div className='cart-total-info'>
				<h2>Total :</h2>
				<h3>{formatPrice(calculateCartTotal(cart))}</h3>
			</div>
			{isAuthUser ? (
				<Link to='/checkout' data-test='checkout-button'>
					CHECKOUT
				</Link>
			) : (
				<Link to='/user/login'>LOGIN TO PROCEED</Link>
			)}
		</article>
	);
};

export default CartTotal;
