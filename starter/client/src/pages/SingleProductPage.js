import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';
import AddToCart from '../components/AddToCart';
import { formatPrice } from '../utils/formatPrice';

const serverPort = process.env.REACT_APP_PORT;

const SingleProductPage = () => {
	const { id } = useParams();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [product, setProduct] = useState({});

	const fetchSingleProduct = async () => {
		setIsLoading(true);

		try {
			const res = await axios.get(
				`http://localhost:${serverPort}/products/${id}`
			);
			const singleProduct = res.data.product;

			if (!singleProduct) {
				setIsLoading(false);
				setError(`The product you're looking for cannot be found`);
			}
			setIsLoading(false);
			setProduct(singleProduct);
		} catch (error) {
			setIsLoading(false);
			setError('There was an error loading your product...');
		}
	};

	useEffect(() => {
		fetchSingleProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return (
			<>
				<Error msg={error}></Error>
			</>
		);
	}

	const product_id = product.id;

	const {
		url,
		name,
		price,
		description,
		stock,
		available,
		company,
		stars,
		reviews,
	} = product;

	return (
		<>
			<section className='single-product section section-center'>
				<article className='single-product-image'>
					<img src={url} alt={name} />
				</article>
				<article className='single-product-info'>
					<h1 data-test='single-product-name'>{name}</h1>
					<h2>{formatPrice(price)}</h2>
					<h5>
						{Math.floor((stars / 5) * 100)}% - ({reviews} reviews)
					</h5>
					<p className='single-product-desc'>{description}</p>
					<div className='single-footer-info'>
						<h6>Company: </h6>
						<p>{company}</p>
					</div>
					<div className='single-footer-info'>
						<h6>In Stock: </h6>
						<p>{stock > 0 ? 'Available' : 'Out of Stock'}</p>
					</div>
					{available && stock > 0 && (
						<>
							<div className='separator'></div>
							<AddToCart
								stock={stock}
								available={available}
								idToBeAddedToCart={product_id}
							/>
						</>
					)}
				</article>
			</section>
		</>
	);
};

export default SingleProductPage;
