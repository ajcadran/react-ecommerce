import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import ProductPage from './pages/ProductPage';
//const data = require('./test-data.json');

const App = () => {

	useEffect(() => {
		console.log();
	}, []);

	// Return ----------------------------------------------------------------------------------------------------------
	// 
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
