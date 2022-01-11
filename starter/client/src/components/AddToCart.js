import React, { useContext, useEffect } from 'react';
import { CContext } from '../context/CartContext';
import { useHistory } from 'react-router-dom';

const AddToCart = ({ stock, available, idToBeAddedToCart }) => {
	const history = useHistory();

	const [cartAmount, setCartAmount] = React.useState(1);

	const { handleAddToCart, cartChangeFlag } = useContext(CContext);

	useEffect(() => {
		if (cartChangeFlag) {
			history.push('/cart');
		}
	});

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
				<span data-test='single-product-quantity'>{cartAmount}</span>
				<button onClick={incrementAmount}>+</button>
			</div>
			<button
				className='add-to-cart-btn'
				style={{ backgroundColor: 'rgb(0,140,140)', letterSpacing: '1px' }}
				onClick={() => handleAddToCart(idToBeAddedToCart, cartAmount)}
				disabled={!available && 'disabled'}
			>
				ADD TO CART
			</button>
		</div>
	);
};

export default AddToCart;
