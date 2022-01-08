import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(true);
	const fetchProducts = async () => {
		const productData = axios
			.get('http://localhost:5000/products')
			.then((res) => console.log(res));
		// setProducts(productData);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (isLoading) {
		return <>loading spinner</>;
	}

	//map products..
	return (
		<>
			{products?.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</>
	);
};

export default ProductsPage;
