import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products.page";
import AboutPage from "./pages/About.page";
import React from "react";
import Navigation from "./components/Navigation";

function App() {
	return (
		<React.Fragment>
			<Navigation />
			<Routes>
				<Route path="/" element={<ProductsPage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
