describe('single product cart', () => {
	//user visits a singleproduct page (by id);

	it('for items out of stock, add to cart button button should NOT be displayed', () => {
		// Product with ID:ccc111 -> is out of stock.
		cy.visit(`http://localhost:3000/products/ccc111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ccc111`,
		}).as('getSingleProduct');
		cy.wait('@getSingleProduct');

		// CONDITIONAL RENDERING

		//assert it's out of stock
		cy.findByText(/out of stock/i).should('exist');

		//assert add to cart component is disabled
		cy.get('[data-test=single-product-quantity]').should('not.exist');
	});

	it('quantity of the item to be added to cart is initialized by 1 (in add to cart)', () => {
		cy.visit(`http://localhost:3000/products/ddd111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ddd111`,
		}).as('getSingleProduct');

		cy.get('[data-test=single-product-quantity]').should('contain', '1');
		cy.wait('@getSingleProduct');
	});

	it('quantity of the item to be added to cart can be incremented', () => {
		cy.visit(`http://localhost:3000/products/ddd111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ddd111`,
		}).as('getSingleProduct');
		cy.wait('@getSingleProduct');
		cy.get('[data-test=single-product-quantity]').should('contain', '1');
		cy.findByRole('button', { name: /\+/i }).click();
		cy.get('[data-test=single-product-quantity]').should('contain', '2');
	});

	it('quantity of the item to be added to cart can be decremented', () => {
		cy.visit(`http://localhost:3000/products/ddd111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ddd111`,
		}).as('getSingleProduct');
		cy.wait('@getSingleProduct');
		cy.get('[data-test=single-product-quantity]').should('contain', '1');
		cy.findByRole('button', { name: /\+/i }).click();
		cy.findByRole('button', { name: /\-/i }).click();
		cy.get('[data-test=single-product-quantity]').should('contain', '1');
	});

	// Boundary Value Analysis (BVA)

	it('quantity of the item to be added to cart cannot go below 1', () => {
		cy.visit(`http://localhost:3000/products/ddd111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ddd111`,
		}).as('getSingleProduct');
		cy.wait('@getSingleProduct');
		cy.get('[data-test=single-product-quantity]').should('contain', '1');

		// click 10 times
		for (let i = 0; i < 10; i++) {
			cy.findByRole('button', { name: /\-/i }).click();
		}
		cy.get('[data-test=single-product-quantity]').should('contain', '1');
	});

	it('quantity of the item to be added to cart cannot exceed quantity available in stock', () => {
		// for item with ID:aaa111 -> available stock is:9
		cy.visit(`http://localhost:3000/products/ddd111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ddd111`,
		}).as('getSingleProduct');
		cy.wait('@getSingleProduct');
		cy.get('[data-test=single-product-quantity]').should('contain', '1');

		// click 100 times
		for (let i = 0; i < 100; i++) {
			cy.findByRole('button', { name: /\+/i }).click();
		}
		cy.get('[data-test=single-product-quantity]').should('contain', '9');
	});

	it('adding item to cart updates global cart counter', () => {
		cy.visit(`http://localhost:3000/products/ddd111`);
		cy.intercept({
			method: 'GET',
			url: `http://localhost:6969/products/ddd111`,
		}).as('getSingleProduct');
		cy.wait('@getSingleProduct');

		cy.get('[data-test=global-cart-counter]').should('contain', '0');
		cy.findByRole('button', { name: /add to cart/i }).click();
		cy.get('[data-test=global-cart-counter]').should('contain', '1');
	});
});
