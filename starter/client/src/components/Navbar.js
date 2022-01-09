import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CContext } from '../context/CartContext';
import { AContext } from '../context/AuthContext';

const Navbar = () => {
	const { isAuthUser, setIsAuthUser } = useContext(AContext);

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
					{isAuthUser && <Link to='/checkout'>Checkout</Link>}
				</div>

				<div className='cta'>
					<Link to='/cart'>
						Cart (<span className='cart-amount'>{cartAmount}</span>)
					</Link>
					{!isAuthUser ? (
						<Link to='/user/login' className='login-btn'>
							Login
						</Link>
					) : (
						<Link
							to='/'
							onClick={() => setIsAuthUser(false)}
							className='login-btn logout-btn'
						>
							Logout
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
