// price is stored as 'cent' -> currrency converter -> display accordingly

export const formatPrice = (num) => {
	let dollars = num / 100;
	return dollars.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};
