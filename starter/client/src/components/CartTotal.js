import React, { useContext } from 'react';
import { calculateCartTotal } from '../utils/calculateCartTotal';
import { formatPrice } from '../utils/formatPrice';
import { Link } from 'react-router-dom';

const CartTotal = ({ cart }) => {
	// const { cart } = useContext(CContext);

	// isAuth === true -> proceed to check out

	// isAuth === false -> You must login to proceed

	return (
		<article className='cart-total'>
			<div className='cart-total-info'>
				<h2>Total :</h2>
				<h3>{formatPrice(calculateCartTotal(cart))}</h3>
			</div>
			<Link to='/checkout'>CHECKOUT</Link>
		</article>
	);
};

export default CartTotal;
