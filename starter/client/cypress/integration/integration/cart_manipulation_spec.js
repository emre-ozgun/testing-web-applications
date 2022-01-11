describe('user can see items in cart page', () => {
	it('adding item to cart navigates to cart page', () => {
		cy.visit('/products/ddd111');
		cy.findByRole('button', { name: /add to cart/i }).click();
		expect(cy.url().should('include', '/cart'));
	});
	it('same item added to cart should exist in cart page', () => {
		cy.visit('/products/ddd111');
		expect(cy.findByRole('img', { name: /study table/i })).to.exist;
		cy.findByRole('button', { name: /add to cart/i }).click();
		expect(cy.url().should('include', '/cart'));
		expect(cy.findByRole('img', { name: /study table/i })).to.exist;
	});

	it('cart can be cleaned up', () => {
		cy.visit('/cart');
		cy.findByRole('button', { name: /clear cart/i }).click();
		expect(cy.findByRole('heading', { name: /your cart is empty\.\.\./i })).to
			.exist;
	});
});
