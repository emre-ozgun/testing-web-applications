describe('payment flow', () => {
	// RESTARTING THE EXPRESS SERVER IS ADVISED BEFORE RUNNING THIS E2E TEST
	it('e2e - placing an order', () => {
		//user lands home page
		cy.visit('/');
		//clicks shop now
		cy.findByRole('link', { name: /shop now/i }).click();
		// user is navigated to products page
		expect(cy.url().should('include', '/products'));

		cy.wait(10000);
		//user clicks on product
		cy.findByRole('img', { name: /comfy couch/i }).click();

		//user is navigated to single product page
		expect(cy.url().should('include', '/products/aaa111'));

		//user increases amount up to max amount (available stock: 9 for item aaa111)
		for (let i = 0; i < 10; i++) {
			cy.findByRole('button', { name: /\+/i }).click();
		}
		cy.get('[data-test=single-product-quantity]').should('contain', '9');

		// user clicks add to cart
		cy.findByRole('button', { name: /add to cart/i }).click();

		//user is navigated to cart page
		expect(cy.url().should('include', '/cart'));

		// user clicks login to proceed to checkout
		cy.findByRole('link', { name: /login to proceed/i }).click();

		//user is navigated to login page
		expect(cy.url().should('include', '/user/login'));

		//user provides valid credentials
		cy.findByRole('textbox', { name: /email/i }).type('testuser@gmail.com');
		cy.findByLabelText(/password/i).type('test123');

		//user clicks log in
		cy.findByRole('button', { name: /login/i }).click();

		//user is navigated back to cart page
		expect(cy.url().should('include', '/cart'));

		//user must now see checkout because they're logged in
		cy.get('[data-test=checkout-button]').should('contain', 'CHECKOUT');

		//user clicks on checkout button
		cy.get('[data-test=checkout-button]').click();

		// user is navigated to checkout page
		expect(cy.url().should('include', '/checkout'));

		// user places order
		cy.findByRole('button', { name: /pay/i }).click();

		// assert cart is cleared after payment
		cy.get('[data-test=global-cart-counter]').should('contain', '0');

		// user receives payment success messsage + payment info
		expect(
			cy.findByRole('heading', { name: /your payment has been completed\./i })
		).to.exist;

		//user clicks on got it
		cy.findByRole('link', { name: /got it!/i }).click();

		//finally the user is navigated back to products page
		expect(cy.url().should('include', '/products'));

		// ASSERTING BUSINESS LOGIC - MUTATING PRODUCTS -> The amount of the available stock of an item must be updated!
	});

	it('ensure stock update', () => {
		cy.visit('/products/aaa111');

		// add to cart is not displayed because user have purchased every single available item of product with the ID: aaa111
		cy.get('[data-test=single-product-quantity]').should('not.exist');
	});
});
