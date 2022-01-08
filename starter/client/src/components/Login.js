import React from 'react';

const Login = ({ type }) => {
	// this will be rendered on LoginPage

	if (type === 'user') {
		// HANDLE USER LOGIN
		// Navigate/redirect to -> products
	}

	if (type === 'admin') {
		// HANDLE ADMIN LOGIN
		// Navigate/redirect to -> DashPoardPage
	}

	// USER LOGIN
	// login credentials
	// testuser@gmail.com / test123
	// post to server and validate Auth!

	//ADMIN LOGIN

	return <div>login form</div>;
};

export default Login;
