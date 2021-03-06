import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AContext = createContext();

const serverPort = process.env.REACT_APP_PORT;

export const AuthContext = ({ children }) => {
	const [isAuthUser, setIsAuthUser] = useState(false);

	const [loginError, setLoginError] = useState('');

	const [isLoginLoading, setIsLoginLoading] = useState(false);

	// must be await -> response is true or false -> validate the user in backend!
	const handleUserLogin = async (email, password) => {
		setIsLoginLoading(true);

		const res = await axios.post(`http://localhost:${serverPort}/user/login`, {
			email,
			password,
		});

		if (res.data.authStatus) {
			setIsLoginLoading(false);
			setIsAuthUser(true);
		} else {
			setIsLoginLoading(false);
			setIsAuthUser(false);
			setLoginError('Invalid Credentials');
		}
	};

	const handleAdminLogin = () => {};

	return (
		<AContext.Provider
			value={{
				handleUserLogin,
				handleAdminLogin,
				isAuthUser,
				isLoginLoading,
				setIsLoginLoading,
				loginError,
				setLoginError,

				setIsAuthUser,
			}}
		>
			{children}
		</AContext.Provider>
	);
};
