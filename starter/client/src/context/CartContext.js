import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CContext = createContext();

export const CartContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartChangeFlag, setCartChangeFlag] = useState(false);
	// const [cartLoader, setCartLoader] = useState(false);

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

	const updateCartItems = async (id, amount) => {
		// POST to cart
		const res = await axios.patch(`http://localhost:5000/cart/update`, {
			id,
			amount,
		});

		const finalUpdatedCart = res.data.cart;

		setCart(finalUpdatedCart);
	};

	const updateCartFromCart = (id, amount) => {
		updateCartItems(id, amount);
	};

	const clearShoppingCart = async () => {
		const res = await axios.delete('http://localhost:5000/cart/clear');

		setCart(res.data.cart);
	};

	return (
		<CContext.Provider
			value={{
				handleAddToCart,
				cart,
				cartChangeFlag,
				setCartChangeFlag,
				updateCartFromCart,
				clearShoppingCart,
			}}
		>
			{children}
		</CContext.Provider>
	);
};
