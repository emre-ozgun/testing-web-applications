import React, { useState, useContext, useEffect } from 'react';
import { AContext } from '../context/AuthContext';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

const UserLoginForm = () => {
	const {
		handleUserLogin,
		isLoginLoading,
		isAuthUser,
		loginError,
		setLoginError,
	} = useContext(AContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (loginError) {
			const errorTimeOut = setTimeout(() => {
				setLoginError('');
			}, 3000);

			return () => clearTimeout(errorTimeOut);
		}
	}, [loginError]);

	if (isAuthUser) {
		return <Redirect push to='/cart' />;
	}

	const handleUserPre = (e) => {
		e.preventDefault();
		setLoginError('');

		if (!email || !password) {
			setLoginError('Please fill in all fields...');
			return;
		}
		handleUserLogin(email, password);
		setEmail('');
		setPassword('');
	};

	return (
		<section className='section section-center user-login-page'>
			<form
				onSubmit={(e) => handleUserPre(e)}
				className='user-login-form'
				id='user-login-form'
				role='user-login-form'
				name='user-login-form'
			>
				{loginError && (
					<div className='form-control login-error' style={{ color: 'red' }}>
						{loginError}
					</div>
				)}
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						className='form-input'
						placeholder='Your email...'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						className='form-input'
						placeholder='Your password...'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{isLoginLoading ? (
					<div className='user-login-btn'>
						<Loading />
					</div>
				) : (
					<button type='submit' className='user-login-btn'>
						LOGIN
					</button>
				)}
			</form>
		</section>
	);
};

export default UserLoginForm;
