import React from 'react';

const AddToCart = ({ stock, available, idToBeAddedToCart }) => {
	const [cartAmount, setCartAmount] = React.useState(1);

	const handleCart = () => {
		//POST -> to server => use idToBeAddedToCart

		if (!available) {
			return;
		}
		// from cartContext
	};

	const decrementAmount = () => {
		setCartAmount((prev) => {
			if (prev - 1 < 1) {
				return setCartAmount(1);
			} else {
				return setCartAmount(prev - 1);
			}
		});
		//handle decrement take into acount 0
	};

	const incrementAmount = () => {
		setCartAmount((prev) => {
			if (prev + 1 > stock) {
				return setCartAmount(stock);
			} else {
				return setCartAmount(prev + 1);
			}
		});
		//handle increment take into accont stock (can't go above max stock)
	};

	return (
		<div className='add-to-cart'>
			<div className='cart-toggle'>
				<button onClick={decrementAmount}>-</button>
				<span>{cartAmount}</span>
				<button onClick={incrementAmount}>+</button>
			</div>
			<button
				className='add-to-cart-btn'
				onClick={handleCart}
				disabled={!available && 'disabled'}
			>
				ADD TO CART
			</button>
		</div>
	);
};

export default AddToCart;
