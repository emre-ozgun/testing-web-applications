import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../assets/landing.jpg';

const HomePage = () => {
	const imageRef = React.useRef(null);
	const titleRef = React.useRef(null);
	const paragraphRef = React.useRef(null);
	const buttonRef = React.useRef(null);

	React.useEffect(() => {
		imageRef.current.className = 'img active';
		titleRef.current.classList.add('active');
		paragraphRef.current.classList.add('active');
		buttonRef.current.classList.add('active');

		// console.log(titleRef.current.classList);
	});

	return (
		<>
			<main className='landing section section-center'>
				<section className='info'>
					<h1 className='' ref={titleRef}>
						Own your style with <br /> Lustro
					</h1>
					<p className='' ref={paragraphRef}>
						Pour-over 3 wolf moon vegan disrupt, skateboard af tofu austin.
						Meggings blue bottle vexillologist bicycle rights scenester, vinyl
						twee. Actually venmo hashtag distillery typewriter tofu yr umami.
						Meditation schlitz celiac, listicle brunch umami snackwave quinoa.
					</p>
					<Link
						to='/products'
						className=''
						ref={buttonRef}
						style={{ letterSpacing: '1px' }}
					>
						SHOP NOW
					</Link>
				</section>
				<section className='image'>
					<img src={landing} alt='lustro' className='' ref={imageRef} />
				</section>
			</main>
		</>
	);
};

export default HomePage;
