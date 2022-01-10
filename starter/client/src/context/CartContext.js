import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CContext = createContext();

const serverPort = process.env.REACT_APP_PORT;

export const CartContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartChangeFlag, setCartChangeFlag] = useState(false);
	const [orderMessage, setOrderMessage] = useState('');

	useEffect(() => {
		getCartItems();
	}, []);

	const postToCart = async (id, amount) => {
		// POST to cart
		const res = await axios.post(`http://localhost:${serverPort}/cart/${id}`, {
			id,
			amount,
		});
		const entireCart = res.data;
		setCart(entireCart);
		return true;
	};

	const getCartItems = async () => {
		const res = await axios.get(`http://localhost:${serverPort}/cart`);
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
		const res = await axios.patch(
			`http://localhost:${serverPort}/cart/update`,
			{
				id,
				amount,
			}
		);

		const finalUpdatedCart = res.data.cart;

		setCart(finalUpdatedCart);
	};

	const updateCartFromCart = (id, amount) => {
		updateCartItems(id, amount);
	};

	const clearShoppingCart = async () => {
		const res = await axios.delete(`http://localhost:${serverPort}/cart/clear`);

		setCart(res.data.cart);
	};

	const handlePlaceOrder = async () => {
		const res = await axios.get(`http://localhost:${serverPort}/placeorder`);

		if (res.data.orderStatus) {
			setCart([]);
			setOrderMessage('Your payment has been completed.');
		}
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
				handlePlaceOrder,
				orderMessage,
				setOrderMessage,
			}}
		>
			{children}
		</CContext.Provider>
	);
};
