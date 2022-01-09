import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CContext = createContext();

export const CartContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartChangeFlag, setCartChangeFlag] = useState(false);

	useEffect(() => {
		getCartItems();
	}, []);

	const postToCart = async (id, amount) => {
		// POST to cart
		const res = await axios.post(`http://localhost:5000/cart/${id}`, {
			id,
			amount,
		});
		const entireCart = res.data;
		setCart(entireCart);
		return true;
	};

	const getCartItems = async () => {
		const res = await axios.get('http://localhost:5000/cart');
		setCart(res.data || []);
	};

	const handleAddToCart = async (product_id_to_cart, amount) => {
		const res = await postToCart(product_id_to_cart, amount);
		if (res) {
			setCartChangeFlag(true);
		}
	};

	return (
		<CContext.Provider
			value={{ handleAddToCart, cart, cartChangeFlag, setCartChangeFlag }}
		>
			{children}
		</CContext.Provider>
	);
};
