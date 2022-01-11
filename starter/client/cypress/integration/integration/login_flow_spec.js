// Integration tests for login/logout functionality/flow
// Including unit tests

describe('login/logout', () => {
	it('user visits login page, login form is displayed', () => {
		cy.visit('/user/login');
		expect(cy.findByRole('user-login-form')).to.exist;
	});

	it('user, submits empty form, error message is displayed', () => {
		cy.visit('/user/login');
		cy.findByRole('button', { name: /login/i }).click();
		expect(cy.findByText(/please fill in all fields\.\.\./i)).to.exist;
	});

	it('user leaves email field empty, error message is played', () => {
		cy.visit('/user/login');
		cy.findByRole('textbox', { name: /email/i }).type('testuser@gmail.com');
		cy.findByRole('button', { name: /login/i }).click();
		expect(cy.findByText(/please fill in all fields\.\.\./i)).to.exist;
	});

	it('user leaves password field empty, error message is played', () => {
		cy.visit('/user/login');
		cy.findByLabelText(/password/i).type('test123');
		cy.findByRole('button', { name: /login/i }).click();
		expect(cy.findByText(/please fill in all fields\.\.\./i)).to.exist;
	});

	it('user enters invalid credentials (unauthenticated user), error message is displayed', () => {
		cy.visit('/user/login');
		cy.findByRole('textbox', { name: /email/i }).type('wronguser@gmail.com');
		cy.findByLabelText(/password/i).type('wrong');
		cy.findByRole('button', { name: /login/i }).click();
		expect(cy.findByText(/invalid credentials/i)).to.exist;
	});

	it('login fields are cleared after user submits the login form', () => {
		cy.visit('/user/login');
		cy.findByRole('textbox', { name: /email/i }).type('wronguser@gmail.com');
		cy.findByLabelText(/password/i).type('wrong');
		cy.findByRole('button', { name: /login/i }).click();
		cy.findByRole('textbox', { name: /email/i }).should('be.empty');
		cy.findByLabelText(/password/i).should('be.empty');
	});

	it('submitting login form after erroneous input, error message is cleared out', () => {
		cy.visit('/user/login');
		cy.findByRole('textbox', { name: /email/i }).type('wrongInput@gmail.com');
		cy.findByLabelText(/password/i).type('wrongPassword');
		cy.findByRole('button', { name: /login/i }).click();
		expect(cy.findByText(/invalid credentials/i)).to.exist;

		cy.wait(5000);

		expect(cy.get('.login-error').should('not.exist'));
	});

	it('user provides valid credentials, login button is updated and user is navigated to cart page', () => {
		cy.visit('/user/login');
		cy.findByRole('textbox', { name: /email/i }).type('testuser@gmail.com');
		cy.findByLabelText(/password/i).type('test123');
		cy.findByRole('button', { name: /login/i }).click();
		expect(cy.get('.login-error').should('not.exist'));
		expect(cy.findByRole('link', { name: /logout/i })).to.exist;
		expect(cy.url().should('include', '/cart'));
	});

	it('user logs out and is navigated to home page.', () => {
		cy.findByRole('link', { name: /logout/i }).click();
		expect(cy.url().should('include', '/'));
		expect(cy.findByRole('link', { name: /login/i })).to.exist;
	});
});
