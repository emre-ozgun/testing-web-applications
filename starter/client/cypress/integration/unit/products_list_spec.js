describe('products', () => {
	it('user can see the list of products in products page', () => {
		cy.visit('/products');
		cy.intercept('GET', 'http://localhost:6969/products').as('getProducts');
		cy.wait('@getProducts');
		expect(cy.findByRole('img', { name: /comfy couch/i })).to.exist;
		expect(cy.get('.products').children().should('have.length', 16));
	});

	it('user can visit  products page from home page and see the list of products', () => {
		cy.visit('/');
		cy.findByRole('link', { name: /shop now/i }).click();
		// cy.intercept('GET', 'http://localhost:6969/products').as('getProducts');
		// cy.wait('@getProducts');
		expect(cy.findByRole('img', { name: /comfy couch/i })).to.exist;
		expect(cy.get('.products').children().should('have.length', 16));
	});
});
