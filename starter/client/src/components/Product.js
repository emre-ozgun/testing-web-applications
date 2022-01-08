import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const Product = (props) => {
	const { id, url, name, price } = props;

	return (
		<article className='product-container'>
			<div className='product-image'>
				<Link to={`/products/${id}`}>
					<img src={url} alt={name} />
				</Link>
			</div>
			<div className='product-info'>
				<h5 className='p-name'>{name}</h5>
				<h5 className='p-price'>{formatPrice(price)}</h5>
			</div>
		</article>
	);
};

export default Product;
