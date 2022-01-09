export const calculateCartTotal = (cartArray) => {
	let total = 0;
	for (let i = 0; i < cartArray.length; i++) {
		total += cartArray[i].amount * cartArray[i].price;
	}
	return total;
};
