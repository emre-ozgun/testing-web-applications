import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import Loading from '../components/Loading';
import Error from '../components/Error';

const serverPort = process.env.REACT_APP_PORT;

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const productData = await axios.get(
				`http://localhost:${serverPort}/products`
			);
			const productList = productData.data.PRODUCTS;
			setProducts(productList);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setError(
				`Couldn't load products. Check your connection and try again...`
			);
		}

		//product data array...
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (error) {
		return <Error msg={error} />;
	}

	if (isLoading) {
		return <Loading />;
	}

	//map products.. - remove products that are out of stock!

	const filteredProducts = products.filter((p) => p.stock !== 0);

	return (
		<>
			<main className='products section section-center'>
				{filteredProducts?.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</main>
		</>
	);
};

export default ProductsPage;
