import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CContext } from '../context/CartContext';

const Navbar = () => {
	// checkout link -> isAuth ? <Link to='/checkout/> : 'do not render'

	const [isAuth, setIsAuth] = useState(true);

	// this must use global context, useState is placeholder!
	const { cart } = useContext(CContext);

	const cartAmount = cart?.length || 0;

	return (
		<header>
			<nav>
				<div className='logo'>
					<Link to='/'>Lustro</Link>
				</div>
				<div className='nav-links'>
					<Link to='/'>Home</Link>
					<Link to='/products'>Products</Link>
					{isAuth && <Link to='/checkout'>Checkout</Link>}
				</div>

				<div className='cta'>
					<Link to='/cart'>
						Cart (<span className='cart-amount'>{cartAmount}</span>)
					</Link>
					<button className='login-btn'>Login</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
