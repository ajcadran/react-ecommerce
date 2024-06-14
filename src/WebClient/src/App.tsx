import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage'; 
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

const App = () => {

	const imgDir = `http://${window.location.hostname}:5000/images/`;

	// Return ----------------------------------------------------------------------------------------------------------
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/products" element={<ProductList imgDir={imgDir} />} />
					<Route path="/products/:id" element={<ProductPage imgDir={imgDir} />} />
					<Route path="/about" element={<AboutUs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
