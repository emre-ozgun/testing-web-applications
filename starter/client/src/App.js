import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';

function App() {
	//auth provider -> isAuth && checkout
	//allow checkout if -> authenticated
	//display in navbar!
	//navigate history.push(-1) if not authenticated

	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/products' exact>
						<ProductsPage />
					</Route>
					<Route path='/cart' exact>
						<CartPage />
					</Route>
					<Route path='/checkout' exact>
						<CheckoutPage />
					</Route>
					<Route path='/products/:id' exact>
						<SingleProductPage />
					</Route>
					<Route path='/user/login' exact>
						<LoginPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
