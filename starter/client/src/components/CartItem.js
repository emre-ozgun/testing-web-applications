import React, { useContext, useState, useEffect } from 'react';
import { formatPrice } from '../utils/formatPrice';
import { CContext } from '../context/CartContext';

const CartItem = ({ url, name, price, amount, id, stock }) => {
	const { updateCartFromCart } = useContext(CContext);

	const [cartQuantity, setCartQuantity] = useState(amount);

	useEffect(() => {
		updateCartFromCart(id, cartQuantity);
	}, [cartQuantity]);

	// decrementCartFromCart
	// incrementCartFromCart

	const incrementQuantity = () => {
		setCartQuantity((prev) => {
			if (prev + 1 > stock) {
				return stock;
			} else {
				return prev + 1;
			}
		});
	};

	const decrementQuantity = () => {
		setCartQuantity((prev) => {
			if (prev - 1 < 1) {
				return 0;
			} else {
				return prev - 1;
			}
		});
	};

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
					<button onClick={decrementQuantity}>-</button>
					<h2>{cartQuantity}</h2>
					<button onClick={incrementQuantity}>+</button>
				</div>
				<div className='cart-item-subtotal'>
					<p className='p-price light'>{formatPrice(price * cartQuantity)}</p>
				</div>
			</article>
			<div className='separator cart-separator'></div>
		</>
	);
};

export default CartItem;
