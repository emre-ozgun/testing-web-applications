import React from 'react';
import { formatPrice } from '../utils/formatPrice';

const CartItem = ({ url, name, price, amount }) => {
	return (
		<>
			<article className='single-cart-item'>
				<div className='cart-image-name'>
					<img src={url} alt={name} />
					<h5>{name}</h5>
				</div>
				<div className='cart-item-price'>
					<p className='p-price lighter'>{formatPrice(price)}</p>
				</div>
				<div className='cart-item-quantity'>
					<button>-</button>
					<h2>{amount}</h2>
					<button>+</button>
				</div>
				<div className='cart-item-subtotal'>
					<p className='p-price light'>{formatPrice(price * amount)}</p>
				</div>
			</article>
			<div className='separator cart-separator'></div>
		</>
	);
};

export default CartItem;
