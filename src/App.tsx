import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage'; 

const App = () => {

	// Return ----------------------------------------------------------------------------------------------------------
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<ProductList />} />
					<Route path="/products/:id" element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
