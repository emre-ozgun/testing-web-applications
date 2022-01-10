import React from 'react';
import Error from '../components/Error';

const NotFoundPage = () => {
	return (
		<main className='section section-center'>
			<Error
				msg={`
			 The page you're looking for cannot be found.`}
			/>
		</main>
	);
};

export default NotFoundPage;
