import React, { useContext } from 'react';
import { CContext } from '../context/CartContext';
import { AContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';
import { calculateCartTotal } from '../utils/calculateCartTotal';
import { Link } from 'react-router-dom';
import Error from '../components/Error';

const CheckoutPage = () => {
	// isAuth -> useAuthProvider
	//if !isAuth -> redirect
	// if isAuth -> render

	const { cart, handlePlaceOrder, orderMessage, setOrderMessage } =
		useContext(CContext);
	const { isAuthUser } = useContext(AContext);

	if (!isAuthUser) {
		return <Redirect push to='/cart' />;
	}

	if (orderMessage) {
		return (
			<main className='section section-center checkout-main'>
				<div
					className='checkout-inner-success inner-complete'
					style={{ border: 'none' }}
				>
					<h1 className='order-success-message'>{orderMessage}</h1>
					<p>
						Further information can be found in your email: testuser@gmail.com
					</p>
					<Link
						to='/products'
						onClick={() => setOrderMessage('')}
						className='order-complete-btn'
					>
						GOT IT!
					</Link>
				</div>
			</main>
		);
	}

	if (!cart.length) {
		return <Error msg={`You can't checkout with an empty cart...`} />;
	}

	return (
		<main className='section section-center checkout-main'>
			<div className='checkout-inner'>
				<section className='checkout-items'>
					{cart.map((c) => {
						return (
							<article className='checkout-item' key={c.id}>
								<h5>
									{c.name} (x{c.amount})
								</h5>

								<h6>+{formatPrice(c.amount * c.price)}</h6>
							</article>
						);
					})}
				</section>

				<div className='separator'></div>

				<div className='checkout-cta'>
					<h2>Total : {formatPrice(calculateCartTotal(cart))}</h2>
					<button onClick={handlePlaceOrder}>PAY</button>
					<Link to='/cart' className='back-to-cart-checkout'>
						BACK TO CART
					</Link>
				</div>
			</div>
		</main>
	);
};

export default CheckoutPage;
