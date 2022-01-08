import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import Loading from '../components/Loading';

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const productData = await axios.get('http://localhost:5000/products');
			const productList = productData.data.PRODUCTS;
			setProducts(productList);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setError(`Couldn't load products.`);
		}

		//product data array...
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (error) {
		return <>{error}</>;
	}

	if (isLoading) {
		return <Loading />;
	}

	//map products..
	return (
		<>
			<main className='products section section-center'>
				{products?.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</main>
		</>
	);
};

export default ProductsPage;
