describe('product details (specific/single product)', () => {
	// ID of the item 'aaa111' is known beforehand

	it('product details of the item in products page is displayed in single product page', () => {
		cy.visit('/products');
		cy.intercept('GET', 'http://localhost:6969/products').as('getProducts');
		cy.wait('@getProducts');

		expect(
			cy.findByRole('heading', {
				name: /comfy couch/i,
			})
		).to.exist;

		cy.findByRole('img', { name: /comfy couch/i }).click();

		expect(cy.get('[data-test=single-product-name]').contains('Comfy Couch'));
	});

	it('error message is displayed when the id of item does not exist', () => {
		const randomGibberishID = '844178459719848717';

		cy.visit(`http://localhost:3000/products/${randomGibberishID}`);
		cy.intercept(
			{
				method: 'GET', // Route all GET requests
				url: `http://localhost:6969/products/${randomGibberishID}`, // that have a URL that matches '/users/*'
			},
			[] // and force the response to be: []
		).as('getSingleProduct'); // and assign an alias

		cy.wait('@getSingleProduct');
		expect(
			cy.findByRole('heading', {
				name: /the product you're looking for cannot be found/i,
			})
		).to.exist;
	});
});
