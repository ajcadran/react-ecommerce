import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import ProductPage from './pages/ProductPage';
import ProductView from './pages/ProductView';

const App = () => {

	// Return ----------------------------------------------------------------------------------------------------------
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<ProductPage />} />
					<Route path="/product/:id" element={<ProductView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
