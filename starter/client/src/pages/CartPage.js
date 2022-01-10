import React, { useContext, useEffect } from 'react';
import { CContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import ClearCart from '../components/ClearCart';

const CartPage = () => {
	const { setCartChangeFlag, cart } = useContext(CContext);

	useEffect(() => {
		setCartChangeFlag(false);
	}, []);

	if (!cart.length) {
		return (
			<div className='empty-cart section section-center'>
				<h1>Your cart is empty...</h1>
				<Link to='/products' style={{ letterSpacing: '2px' }}>
					START SHOPPING
				</Link>
			</div>
		);
	}

	return (
		<>
			<main className='cart-page-container section section-center'>
				<section className='cart-page-items'>
					<article className='cart-page-headers'>
						<div>Item</div>
						<div>Price</div>
						<div>Quantity</div>
						<div>Subtotal</div>
					</article>
					<div className='separator dark header'></div>
					{cart.map((c) => {
						return <CartItem key={c.id} {...c} />;
					})}
				</section>
			</main>
			<section className='cart-total-section section section-center'>
				<ClearCart />
				<CartTotal cart={cart} />
			</section>
		</>
	);
};

export default CartPage;
