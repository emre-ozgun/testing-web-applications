// check stock for the last time before purchase

// axios -> get -> cart -> for each item in the cart, reduce the quantity of the products in products array (core products data) -> if stock < 0 -> abort purchase, obviously it's out of stock...

import React from 'react';

const checkStock = () => {
	return <div>check stock pre-checkout, one last time...</div>;
};

export default checkStock;
