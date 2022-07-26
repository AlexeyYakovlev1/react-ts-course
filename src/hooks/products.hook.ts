import axios, { AxiosError } from "axios";
import React from "react";
import { IProduct } from "../models/product.model";

export function useProducts() {
	const [products, setProducts] = React.useState<Array<IProduct>>([]);
	const [load, setLoad] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string>("");

	function addProduct(product: IProduct) {
		setProducts(prev => [...prev, product]);
	}

	async function loadProducts() {
		try {
			const response = await axios.get<Array<IProduct>>("https://fakestoreapi.com/products");
			setLoad(true);
			setProducts(response.data);
			setLoad(false);
		} catch (e: unknown) {
			setLoad(false);
			const err = e as AxiosError;
			setError(err.message);
		}
	}

	React.useEffect(() => {
		loadProducts();
	}, []);

	return { products, error, load, addProduct };
}